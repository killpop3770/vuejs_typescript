import CamList from "@/store/modules/CamList";

const json_obj: string = "{\n" +
    "    \"camList\": {\n" +
    "        \"cam\": [\n" +
    "            {\n" +
    "                \"camUrl\": \"http://admin:coolGrap356@192.168.5.65/ISAPI/Streaming/channels/101/picture?snapShotImageType=JPEG\",\n" +
    "                \"camUser\": \"admin\",\n" +
    "                \"camPwd\": \"coolGrap356\",\n" +
    "                \"camIsActive\": false,\n" +
    "                \"camModel\": \"hiwatch DS-I214W\",\n" +
    "                \"camRoi\": [\"[640 300], [640 700], [1280 700], [1280 300]\"],\n" +
    "                \"camGroup\": \"Interpolitex\",\n" +
    "                \"camName\": \"Камера 1\"\n" +
    "            },\n" +
    "\n" +
    "            {\n" +
    "                \"camUrl\": \"http://admin:coolGrap356@192.168.5.119/ISAPI/Streaming/channels/101/picture?snapShotImageType=JPEG\",\n" +
    "                \"camUser\": \"admin\",\n" +
    "                \"camPwd\": \"coolGrap356\",\n" +
    "                \"camIsActive\": true,\n" +
    "                \"camModel\": \"hiwatch DS-I202\",\n" +
    "                \"camRoi\": [\"null\"],\n" +
    "                \"camGroup\": \"Interpolitex\",\n" +
    "                \"camName\": \"Камера 2\"\n" +
    "            }\n" +
    "        ]\n" +
    "    },\n" +
    "    \"serverIp\": \"192.168.5.102\"\n" +
    "}";

let camList: CamList = new CamList("TEST");
camList.parseJSON(json_obj);
let list: JSON = camList.getJSON();
let l = JSON.stringify(list);
export default l;