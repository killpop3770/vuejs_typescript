import Cam from "./Cam";
import CamEvent from "./CamEvent";

class CamList {

    private _serverIp: string; //"192.168.5.102"
    private _movdetColorTresh: number; //60,
    private _movdetDiffTresh: number; //100,
    private _movdetTimerPeriod: number; //20
    private _confThresh: number; //0.45,
    private _nmsThresh: number; //0.35
    private _camList: Cam[];
    private _camEventList: CamEvent[];

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
}

export default CamList;