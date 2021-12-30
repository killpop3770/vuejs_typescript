import Cam from "./Cam";
import CamEvent from "./CamEvent";

class CamList {

    private _serverIp: string; //"192.168.5.102"
    private _movdetColorTresh: number; //60,
    private _movdetDiffTresh: number; //100,
    private _movdetTimerPeriod: number; //20
    private _confThresh: number; //0.45,
    private _nmsThresh: number; //0.35
    private _camList: Array<Cam>; // array
    private _camEventList: Array<CamEvent>; // array
    private _json_obj: any; //??????????

    constructor(value: any) {
        this._serverIp = value.serverIp;
        this._camList = value.camList;
    }

    static readFromJSON(value: string): JSON {
        return JSON.parse(value);
    }

    get camEventList(): CamEvent[] {
        return this._camEventList;
    }

    set camEventList(value: CamEvent[]) {
        this._camEventList = value;
    }

    get serverIp(): string {
        return this._serverIp;
    }

    set serverIp(value: string) {
        this._serverIp = value;
    }

    get movdetColorTresh(): number {
        return this._movdetColorTresh;
    }

    set movdetColorTresh(value: number) {
        this._movdetColorTresh = value;
    }

    get movdetDiffTresh(): number {
        return this._movdetDiffTresh;
    }

    set movdetDiffTresh(value: number) {
        this._movdetDiffTresh = value;
    }

    get movdetTimerPeriod(): number {
        return this._movdetTimerPeriod;
    }

    set movdetTimerPeriod(value: number) {
        this._movdetTimerPeriod = value;
    }

    get confThresh(): number {
        return this._confThresh;
    }

    set confThresh(value: number) {
        this._confThresh = value;
    }

    get nmsThresh(): number {
        return this._nmsThresh;
    }

    set nmsThresh(value: number) {
        this._nmsThresh = value;
    }

    get camList(): Cam[] {
        return this._camList;
    }

    set camList(value: Cam[]) {
        this._camList = value;
    }

    get length() {
        return this._camList.length;
    }

    get json_obj(): JSON {
        return this._json_obj;
    }

    set json_obj(value: JSON) {
        this._json_obj = value;
    }

    public parseJSON(value: string): void {
        this._json_obj = JSON.parse(value); //parse JSON to create data object

        // For cameraTile number
        const num_of_tile: number = this._json_obj.camList.cam.length
        this._camList = [];

        for (let i = 0; i < num_of_tile; i++) {
            const data_of_camera: any = this._json_obj.camList.cam[i];

            // const cam0: Cam = new Cam(data_of_camera.camName);
            const cam0: Cam = new Cam();

            cam0.camName = data_of_camera.camName;
            cam0.camUrl = data_of_camera.camUrl;
            cam0.camUser = data_of_camera.camUser;
            cam0.camPwd = data_of_camera.camPwd;
            cam0.camIsActive = data_of_camera.camIsActive;
            cam0.camModel = data_of_camera.camModel;
            cam0.camRoi = data_of_camera.camRoi;
            cam0.camGroup = data_of_camera.camGroup;

            // console.log(data_of_camera.camRoi[0]);


            this._camList.push(cam0);
        }

    }
}

export default CamList;