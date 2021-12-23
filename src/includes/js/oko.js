import $ from "jquery"
import Mustache from 'mustache'

const CANVAS_WIDTH = 768.0;
const CANVAS_HEIGHT = 432.0;
const CANVAS_POINT_SIZE = 7;
const CANVAS_LINE_THICKNESS = 4;
//const OKO_IP="okoapi.com";
const OKO_IP = "http://192.168.5.102:8080/";
//const OKO_IP=window.location.href;
const OKO_GET = OKO_IP + "conf";
const OKO_PUT = OKO_IP + "conf";
const OKO_APPLY = OKO_IP + "apply";
const LOAD_TIME = 2000;
const DEV_image = false;


let canvasesAndZones = [];
let zonesArray = [];
let cam = [];
let fillColors = [];
let strokeColors = [];
fillColors[0] = "rgba(253,152,152,0.5)";
fillColors[1] = "rgba(226,231,28,0.5)";
fillColors[2] = "rgba(58,207,240,0.5)";
fillColors[3] = "rgba(229,67,255,0.5)";
fillColors[4] = "rgba(135,252,125,0.5)";
strokeColors[0] = "rgb(255,79,79)";
strokeColors[1] = "rgb(226,231,28)";
strokeColors[2] = "rgb(58,207,240)";
strokeColors[3] = "rgb(229,67,255)";
strokeColors[4] = "rgb(135,252,125)";
let editId = null;
let showZones = true;
document.addEventListener("DOMContentLoaded", () => {
    console.log(OKO_IP);
    loadCameras();
});

function initTabs() {

    let elements = document.getElementsByClassName("setting-card-header-tab");
    Array.from(elements).forEach(function (element) {
        element.addEventListener('click', handleTabClick);
    });


    initZoneContainer();
}

function initZoneContainer() {
    for (let i = 0; i < cam.length; i++) {
        let secondTabContent = document.getElementById("tabContent-" + i + "-1");
        canvasesAndZones[i] = [];
        if (cam[i].camRoi[0] !== "null") {
            zonesArray[i] = [];
            for (let j = 0; j < cam[i].camRoi.length; j++) {
                zonesArray[i][j] = [];
                let zoneContainer = document.createElement("div");
                zoneContainer.classList.add("zonecontaine")
                let zoneRow = document.createElement("div");
                zoneRow.classList.add("zone-row");
                zoneRow.id = "zoneRow-" + i + "-" + j;
                let firstDiv = document.createElement("div");
                let secondDiv = document.createElement("div");
                let span = document.createElement("span");
                span.classList.add("dot");
                span.classList.add(getSpanClass(j));
                let editButton = document.createElement("button");
                let deleteButton = document.createElement("button");
                let spanDelete = document.createElement("span");
                let spanEdit = document.createElement("span");
                spanDelete.classList.add("svg-button");
                spanDelete.classList.add("icon-delete");
                spanEdit.classList.add("svg-button");
                spanEdit.classList.add("icon-edit");
                editButton.classList.add("zones-button");
                editButton.classList.add("edit-button");
                editButton.id = "editZone-" + i + "-" + j;
                deleteButton.classList.add("zones-button");
                deleteButton.classList.add("delete-button");
                deleteButton.id = "deleteZone-" + i + "-" + j;
                editButton.appendChild(spanEdit);
                deleteButton.appendChild(spanDelete);
                secondDiv.appendChild(editButton);
                secondDiv.appendChild(deleteButton);
                firstDiv.appendChild(span);
                firstDiv.append("Зона " + j);
                zoneRow.appendChild(firstDiv);
                zoneRow.appendChild(secondDiv);
                zoneContainer.appendChild(zoneRow);
                secondTabContent.appendChild(zoneContainer);
                canvasesAndZones[i]['zones'] = [];
                canvasesAndZones[i]['zones'][j] = [];
                canvasesAndZones[i]['zones'][j]["points"] = [];
                canvasesAndZones[i]['zones'][j]["points"] = okoStringToArray(cam[i].camRoi[j]);
            }
        }
    }
    let buttons = document.getElementsByClassName("edit-button");
    for (let button of buttons) {
        let ids = button.id.split("-");
        button.addEventListener('click', function (e) {
            editClick(ids[1], ids[2])
        });
    }
    let buttons2 = document.getElementsByClassName("add-zone-button");
    for (let button of buttons2) {
        let ids = button.id.split("-");
        button.addEventListener('click', function (e) {
            let zoneId = addZoneFromButton(ids[1]);
            printZones(ids[1], zoneId);
        });
    }
    let buttons3 = document.getElementsByClassName("end-zone-button");
    for (let button of buttons3) {
        let ids = button.id.split("-");
        button.addEventListener('click', function (e) {
            stopEdit(ids[1]);
        });
    }

    let buttons4 = document.getElementsByClassName("delete-button");
    for (let button of buttons4) {
        let ids = button.id.split("-");
        button.addEventListener('click', function (e) {
            deleteClick(ids[1], ids[2]);
        });
    }

    let checkbox = document.getElementById("enableZones");
    checkbox.checked = true;
    checkbox.addEventListener('click', function (e) {
        showZones = checkbox.checked;
        for (let i = 0; i < canvasesAndZones.length; i++) {
            drawPointsSingleCanvas(i);
        }
    });
    let checkbox2 = document.getElementById("onlyActive");

    checkbox2.addEventListener('change', function (e) {

        for (let i = 0; i < cam.length; i++) {
            console.log("click")
            if (checkbox2.checked) {
                console.log(checkbox.checked);
                if (!cam[i].camIsActive) {
                    document.getElementById("rowId-" + i).setAttribute("hidden", "");
                }
            } else {
                console.log(checkbox.checked);
                document.getElementById("rowId-" + i).removeAttribute("hidden");
            }
        }
    });
    initCanvas();
}

function printZones(id, zoneId) {
    let secondTabContent = document.getElementById("tabContent-" + id + "-1");
    let zoneContainer = document.createElement("div");
    zoneContainer.classList.add("zonecontaine")
    let zoneRow = document.createElement("div");
    zoneRow.id = "zoneRow-" + id + "-" + zoneId;
    zoneRow.classList.add("zone-row");
    let firstDiv = document.createElement("div");
    let secondDiv = document.createElement("div");
    let span = document.createElement("span");
    span.classList.add("dot");
    span.classList.add(getSpanClass(zoneId));
    let editButton = document.createElement("button");
    let deleteButton = document.createElement("button");
    let spanDelete = document.createElement("span");
    let spanEdit = document.createElement("span");
    spanDelete.classList.add("svg-button");
    spanDelete.classList.add("icon-delete");
    spanEdit.classList.add("svg-button");
    spanEdit.classList.add("icon-edit");
    editButton.classList.add("zones-button");
    editButton.classList.add("edit-button");
    editButton.id = "editZone-" + id + "-" + zoneId;
    deleteButton.classList.add("zones-button");
    deleteButton.classList.add("delete-button");
    deleteButton.id = "deleteZone-" + id + "-" + zoneId;
    editButton.appendChild(spanEdit);
    deleteButton.appendChild(spanDelete);
    secondDiv.appendChild(editButton);
    secondDiv.appendChild(deleteButton);
    firstDiv.appendChild(span);
    firstDiv.append("Зона " + zoneId);
    zoneRow.appendChild(firstDiv);
    zoneRow.appendChild(secondDiv);
    zoneContainer.appendChild(zoneRow);
    secondTabContent.appendChild(zoneContainer);
    editButton.addEventListener('click', function (e) {
        editClick(id, zoneId);
    });
    deleteButton.addEventListener('click', function (e) {
        deleteClick(id, zoneId);
    });
}

function deleteClick(id, zoneId) {
    console.log(canvasesAndZones);
    let elem = document.getElementById("zoneRow-" + id + "-" + zoneId);
    elem.remove();
    canvasesAndZones[id]["zones"].splice(zoneId, 1);
    drawPointsSingleCanvas(id);
}

function editClick(canvasId, zoneId) {
    console.log(zoneId);
    editId = zoneId;
    let addButtons = document.getElementsByClassName("add-zone-button");
    for (let button of addButtons) {
        button.setAttribute("disabled", "");
    }
    let editButtons = document.getElementsByClassName("edit-button");
    for (let button of editButtons) {
        button.setAttribute("disabled", "");
    }

    let currentAddButton = document.getElementById("addZoneButtonId-" + canvasId);
    currentAddButton.setAttribute("hidden", "")
    let currentEndButton = document.getElementById("endZoneButtonId-" + canvasId);
    currentEndButton.removeAttribute("hidden")
    drawPointsSingleCanvas(canvasId);
}

function addZoneFromButton(canvasId) {
    let canvas = canvasesAndZones[canvasId];
    let startX = (canvas['canvas'].width - 100) / 2;
    let startY = (canvas['canvas'].height - 100) / 2;
    let zone = [];
    zone["points"] = [];
    zone["points"][0] = [];
    zone["points"][1] = [];
    zone["points"][2] = [];
    zone["points"][3] = [];
    zone["points"][0]["x"] = startX;
    zone["points"][0]["y"] = startY;
    zone["points"][1]["x"] = startX + 100;
    zone["points"][1]["y"] = startY;
    zone["points"][2]["x"] = startX + 100;
    zone["points"][2]["y"] = startY + 100;
    zone["points"][3]["x"] = startX;
    zone["points"][3]["y"] = startY + 100;
    let id = canvas["zones"].length;
    canvas["zones"][id] = zone;

    drawPointsSingleCanvas(canvasId);
    console.log(canvasesAndZones);
    return id;
}

function stopEdit(canvasId) {
    let addButtons = document.getElementsByClassName("add-zone-button");

    let currentEndButton = document.getElementById("endZoneButtonId-" + canvasId);
    let currentAddButton = document.getElementById("addZoneButtonId-" + canvasId);
    currentEndButton.setAttribute("hidden", "")

    currentAddButton.removeAttribute("hidden")
    editId = null;
    for (let button of addButtons) {
        button.removeAttribute("disabled");
    }
    let editButtons = document.getElementsByClassName("edit-button");
    for (let button of editButtons) {
        button.removeAttribute("disabled");
    }
    drawPointsSingleCanvas(canvasId);
}

function initCanvas() {
    let canvases = document.getElementsByClassName("oko-canvas");
    console.log("271: ", canvases);
    let i = 0;
    for (let canvas of canvases) {

        canvasesAndZones[i]['canvas'] = canvas;
        canvas.addEventListener('mousedown', function (e) {
            let context = getCursorPosition(canvas, e, canvas.id);
            canvas.onmousemove = function (e) {
                if (!movePoint(canvas, e, context, canvas.id)) {
                    canvas.onmousemove = null
                }
            }
        })
        canvas.addEventListener("mouseup", function (e) {
            canvas.onmousemove = null
        });
        canvas.addEventListener('dblclick', function (e) {
            addPoint(canvas, e, canvas.id)
        });
        drawPointsSingleCanvas(i);
        i++;
    }
}

function addPoint(canvas, e, id) {
    if (editId != null && editId === id) {
        let idCanvas = id.split("-")[1];
        const rect = canvas.getBoundingClientRect()
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        let context = checkLineColliding(x, y, idCanvas);
        let temp = [];
        temp["x"] = context["midX"];
        temp["y"] = context["midY"];
        console.log(context);
        canvasesAndZones[idCanvas]["zones"][context["zoneIndex"]]["points"].join();
        canvasesAndZones[idCanvas]["zones"][context["zoneIndex"]]["points"].splice(context["index"] + 1, 0, temp);
        canvasesAndZones[idCanvas]["zones"][context["zoneIndex"]]["points"].join();
        drawPointsSingleCanvas(idCanvas);
    }
}

function checkLineColliding(x, y, id) {
    let context = [];
    for (let zoneIndex = 0; zoneIndex < canvasesAndZones[id]["zones"].length; zoneIndex++) {
        let zone = canvasesAndZones[id]["zones"][zoneIndex];
        for (let i = 0; i < zone["points"].length; i++) {
            let result = false;
            if (i + 1 < zone["points"].length) {
                result = isCircleSegmentColliding(zone["points"][i]["x"], zone["points"][i]["y"], zone["points"][i + 1]["x"], zone["points"][i + 1]["y"], x, y, 5);
                if (result) {
                    let dx = zone["points"][i + 1]["x"] - zone["points"][i]["x"];
                    let dy = zone["points"][i + 1]["y"] - zone["points"][i]["y"];
                    let midX = zone["points"][i]["x"] + dx * 0.50;
                    let midY = zone["points"][i]["y"] + dy * 0.50;
                    context["zone"] = zone;
                    context["index"] = i;
                    context["midX"] = midX;
                    context["midY"] = midY;
                    context["zoneIndex"] = zoneIndex;
                    return context;
                }
            } else {
                result = isCircleSegmentColliding(zone["points"][i]["x"], zone["points"][i]["y"], zone["points"][0]["x"], zone["points"][0]["y"], x, y, 5);
                if (result) {
                    let dx = zone["points"][0]["x"] - zone["points"][i]["x"];
                    let dy = zone["points"][0]["y"] - zone["points"][i]["y"];
                    let midX = zone["points"][i]["x"] + dx * 0.50;
                    let midY = zone["points"][i]["y"] + dy * 0.50;
                    context["zone"] = zone;
                    context["index"] = i;
                    context["midX"] = midX;
                    context["midY"] = midY;
                    context["zoneIndex"] = zoneIndex;
                    return context;
                }
            }


            if (result) {
                context["zone"] = zone;
                context["index"] = i;
                return context;
            }
        }
    }

    return context;
}

function drawZone(id) {
    let canvas = canvasesAndZones[id];
    let startX = (canvas['canvas'].width - 100) / 2;
    let startY = (canvas['canvas'].height - 100) / 2;
    if (canvas["zones"].length === 0) {

        //console.log(startX);
        let zone = [];
        zone["points"] = [];
        zone["points"][0] = [];
        zone["points"][1] = [];
        zone["points"][2] = [];
        zone["points"][3] = [];
        zone["points"][0]["x"] = startX;
        zone["points"][0]["y"] = startY;
        zone["points"][1]["x"] = startX + 100;
        zone["points"][1]["y"] = startY;
        zone["points"][2]["x"] = startX + 100;
        zone["points"][2]["y"] = startY + 100;
        zone["points"][3]["x"] = startX;
        zone["points"][3]["y"] = startY + 100;
        canvas["zones"][0] = zone;
        drawPointsSingleCanvas(id);
        //console.log(canvas)
    } else {
        let zone = [];
        zone["points"] = [];
        zone["points"][0] = [];
        zone["points"][1] = [];
        zone["points"][2] = [];
        zone["points"][3] = [];
        zone["points"][0]["x"] = startX;
        zone["points"][0]["y"] = startY;
        zone["points"][1]["x"] = startX + 100;
        zone["points"][1]["y"] = startY;
        zone["points"][2]["x"] = startX + 100;
        zone["points"][2]["y"] = startY + 100;
        zone["points"][3]["x"] = startX;
        zone["points"][3]["y"] = startY + 100;
        canvas["zones"][canvas["zones"].length] = zone;
        drawPointsSingleCanvas(id);
    }
}

function drawPointsSingleCanvas(id) {
    let canvas = canvasesAndZones[id];

    let ctx = canvas["canvas"].getContext("2d");
    ctx.clearRect(0, 0, canvas["canvas"].width, canvas["canvas"].height);
    let i = 0;
    console.log(canvas);
    console.log(canvas["zones"]);
    for (let zone of canvas["zones"]) {

        let j = 0;
        if (editId != null || showZones) {
            ctx.beginPath();
            ctx.fillStyle = fillColors[i];

            ctx.moveTo(zone["points"][0]["x"], zone["points"][0]["y"]);
            for (let k = 1; k < zone["points"].length; k++) {
                ctx.lineTo(zone["points"][k]["x"], zone["points"][k]["y"]);
            }
            ctx.fill();
            ctx.closePath();
            for (let point of zone["points"]) {
                if (point["x"] !== null && point["y"] !== null) {
                    ctx.fillStyle = strokeColors[i];
                    if (editId != null && editId === i) {
                        ctx.beginPath();
                        ctx.arc(point["x"], point["y"], 8, 0, Math.PI * 2, true);
                        ctx.fill();
                        ctx.closePath();
                    }
                    ctx.beginPath();
                    ctx.strokeStyle = strokeColors[i];
                    ctx.lineWidth = 4;
                    ctx.moveTo(point["x"], point["y"]);
                    //console.log(point["x"], point["y"])
                    if (editId != null && editId === i) {
                        if (zone["points"][j + 1] !== null && zone["points"][j + 1] !== undefined) {
                            ctx.lineTo(zone["points"][j + 1]["x"], zone["points"][j + 1]["y"]);
                            ctx.stroke();
                        } else {
                            ctx.lineTo(zone["points"][0]["x"] - 2, zone["points"][0]["y"]);
                            ctx.stroke();
                        }
                    }
                    ctx.closePath();
                }
                j++;
            }
        }


        i++;
    }
}

function getPointByCord(x, y, id) {
    let idCanvas = id.split("-")[1];
    let canvas = canvasesAndZones[idCanvas];
    for (let zone of canvas["zones"]) {
        for (let point of zone["points"]) {
            console.log(point["x"], x, point["y"], y);
            if (point["x"] !== null && point["y"] !== null) {
                if (x > point["x"] - 10 && x < point["x"] + 10 && y > point["y"] - 10 && y < point["y"] + 10) {
                    return point;
                }
            }
        }
    }
}

function getZoneByCord(x, y, id) {
    let idCanvas = id.split("-")[1];
    console.log("getZoneByCord" + idCanvas);
    let canvas = canvasesAndZones[idCanvas];
    let i = 0;
    for (let zone of canvas["zones"]) {
        for (let point of zone["points"]) {
            if (point["x"] !== null && point["y"] !== null) {
                if (x > point["x"] - 7 && x < point["x"] + 7 && y > point["y"] - 7 && y < point["y"] + 7) {
                    let zoneContext = [];
                    zoneContext["zone"] = zone;
                    zoneContext["id"] = i;
                    return zoneContext;
                }
            }
        }
        i++;
    }

}


function getCursorPosition(canvas, event, id) {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    let context = [];

    context["point"] = getPointByCord(x, y, id);
    context ["zone"] = getZoneByCord(x, y, id)['zone'];
    context ["id"] = getZoneByCord(x, y, id)['id'];

    console.log("getCursorPosition context: ", context)
    return context;
}

function movePoint(canvas, event, context, id) {
    if (editId != null) {
        let idCanvas = id.split("-")[1];
        let point = context["point"];
        let zone = context["zone"]["points"].slice();
        let i = 0;
        for (; i < zone.length; i++) {
            if (zone[i]["x"] === point["x"] && zone[i]["y"] === point["y"]) {
                break;
            }
        }
        console.log(editId, context['id'])
        if (point !== null && point !== undefined && editId === context['id']) {
            const rect = canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            if (isMovable(zone, i, x, y)) {
                point["x"] = x;
                point["y"] = y;

                drawPointsSingleCanvas(idCanvas);
                return true;
            }
        }
    }
}

function getAngle(A1x, A1y, A2x, A2y, B1x, B1y, B2x, B2y) {
    let dAx = A2x - A1x;
    let dAy = A2y - A1y;
    let dBx = B2x - B1x;
    let dBy = B2y - B1y;
    let angle = Math.atan2(dAx * dBy - dAy * dBx, dAx * dBx + dAy * dBy);


    angle = angle * (180 / Math.PI);
    if (angle === -180) {
        angle = angle * -1;
    }
    return angle;
}

function isMovable(zone, i, x, y) {
    let angle = 0;
    if (i === 0) {
        angle = getAngle(x, y, zone[i + 1]["x"], zone[i + 1]["y"], x, y, zone[zone.length - 1]["x"], zone[zone.length - 1]["y"]);
    } else if (i === zone.length - 1) {
        angle = getAngle(x, y, zone[0]["x"], zone[0]["y"], x, y, zone[i - 1]["x"], zone[i - 1]["y"]);
    } else {
        angle = getAngle(x, y, zone[i + 1]["x"], zone[i + 1]["y"], x, y, zone[i - 1]["x"], zone[i - 1]["y"]);
    }

    if ((angle < 180 && angle > 0) || (angle < -105 && angle > -180)) {
        return true;
    } else {
        return true;
    }
}

function angleTwoPoints(x1, y1, x2, y2,) {
    return Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
}

function checkColliding(zone, x, y) {
    for (let i = 0; i < zone.length - 1; i++) {
        let result = isCircleSegmentColliding(zone[i]["x"], zone[i]["y"], zone[i + 1]["x"], zone[i + 1]["y"], x, y, 3);
        if (result) {
            return true;
        }
    }
    return false;
}

function mouseOnPoint(point, x, y) {
    return x > point["x"] - 7 && x < point["x"] + 7 && y > point["y"] - 7 && y < point["y"] + 7;
}


function isCircleSegmentColliding(x0, y0, x1, y1, cx, cy, cr) {
    let dx = cx - x0;
    let dy = cy - y0;
    let dxx = x1 - x0;
    let dyy = y1 - y0;


    let t = (dx * dxx + dy * dyy) / (dxx * dxx + dyy * dyy);
    let x = x0 + dxx * t;
    let y = y0 + dyy * t;
    if (t < 0) {
        x = x0;
        y = y0;
    }
    if (t > 1) {
        x = x1;
        y = y1;
    }

    return ((cx - x) * (cx - x) + (cy - y) * (cy - y) < cr * cr);
}

function getSpanClass(id) {
    switch (id) {
        case 0:
            return "dot-red";
        // break;
        case 1:
            return "dot-yellow";
        // break;
        case 2:
            return "dot-blue"
        // break;
        case 3:
            return "dot-purple"
        // break;
        case 4:
            return "dot-green"
        // break;
        default:
            return "dot-red"
        // return
    }
}

function handleTabClick(e) {
    console.log("handleTabClick")
    let tab = e.target;
    let parent = e.target.parentElement;
    let children = parent.childNodes;
    let root = parent.parentElement;
    for (let child of children) {
        if (child.tagName !== undefined) {
            child.classList.remove("tab-active");
            child.classList.add("tab-disable");
        }
    }
    tab.classList.remove("tab-disable");
    tab.classList.add("tab-active");
    let index = tab.id.slice(-1);
    children = root.childNodes;
    for (let child of children) {
        if (child.tagName !== undefined) {
            if (child.classList.contains("settings-card-content")) {
                child.classList.remove("content-active");
                child.classList.add("content-hidden");
                if (child.id.slice(-1) === index) {
                    child.classList.remove("content-hidden");
                    child.classList.add("content-active");
                }
            }
        }
    }

}

function loadCameras() {
    $.getJSON(OKO_GET, function (data, status) {
        cam = data.camList.cam;
        let i = 0;
        for (let oneCamera of cam) {
            let name = oneCamera.camName;
            let model = oneCamera.camModel;
            let image = oneCamera.camUrl;
            let checked = "unchecked"
            let camIsActive = "unchecked"
            if (oneCamera.camIsActive) {
                checked = "checked";
            }
            let cardId = "cardId-" + i;
            let view = {
                rowId: "rowId-" + i,
                camName: name,
                camModel: model,
                camId: "camImg-" + i,
                canvasId: "canvasId-" + i,
                cardId: "cardId" + i,
                firstTabId: "tabId-" + i + "-0",
                secondTabId: "tabId-" + i + "-1",
                thirdTabId: "tabId-" + i + "-2",
                fourthTabId: "tabId-" + i + "-3",
                firstTabContent: "tabContent-" + i + "-0",
                secondTabContent: "tabContent-" + i + "-1",
                thirdTabContent: "tabContent-" + i + "-2",
                fourthTabContent: "tabContent-" + i + "-3",
                checked: checked,
                canvasWidth: CANVAS_WIDTH,
                canvasHeight: CANVAS_HEIGHT,
                zoneContainerId: "zoneContainer-" + i,
                addZoneButtonId: "addZoneButtonId-" + i,
                endZoneButtonId: "endZoneButtonId-" + i,
            };
            $('#container').load("includes/templates/cameracard.html", function () {
                let template = document.getElementById('template').innerHTML;
                let output = Mustache.render(template, view);
                $("#main").append(output);
                $.ajax({
                    url: image,
                    username: oneCamera.camUser,
                    password: oneCamera.camPwd,
                    xhrFields: {
                        responseType: 'blob'
                    },
                    error: function () {
                        console.log("Error in function loadCameras()")
                    }
                }).done(function (html) {
                    let url = window.URL || window.webkitURL;
                    let src = url.createObjectURL(html);
                    $('#' + view.camId).attr("src", src);
                });
            });
            i++;
        }
    });
    setTimeout(drawPolygons, LOAD_TIME);
}

function addEmptyImagePlaceholder() {
    $('#template').remove();
    let images = document.getElementsByClassName("camera-image");
    for (let elem of images) {
        if (elem.getAttribute("src") === null) {
            if (DEV_image) {
                elem.setAttribute("src", "includes/images/2.png");
            } else {
                elem.setAttribute("src", "includes/images/noimage.png");
            }

        }
    }
}

function drawPolygons() {
    addEmptyImagePlaceholder();
    initTabs();
}

function updateCameras() {
    let i = 0;
    for (let oneCamera of cam) {
        let camId = "camImg-" + i;
        saturate(camId);
        i++;
    }

}

function saturate(id) {
    let img = document.getElementById(id);
    img.style.webkitFilter = 'saturate(200%)';
}

function okoStringToArray(string) {
    let raws = string.split(", ");
    let elems = [];
    let i = 0;
    for (let raw of raws) {
        let string = raw;
        string = string.replace('[', '');
        string = string.replace(']', '');
        elems[i] = string.split(" ");
        elems[i]["x"] = Math.round(elems[i][0] / 2.5);
        elems[i]["y"] = Math.round(elems[i][1] / 2.5);
        i++;
    }
    return elems;
}

//Canvas section
export function canvasInit() {
    let canvases = document.getElementsByClassName("oko-canvas");
    console.log("OK")
}

// export default canvasInit; //, okoStringToArray, saturate, updateCameras, drawPolygons, addEmptyImagePlaceholder, loadCameras, handleTabClick}