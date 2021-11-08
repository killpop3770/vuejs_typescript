// import Point from "./Point";
import Point from "./Point.js";

class Cam {

    private _camModel: string;
    private _camUrl: string;
    private _camUser: string;
    private _camPwd: string;
    private _camIsActive: boolean;
    private _camRoi: Point[];
    private _camGroup: string;
    private _camName: string;

    constructor(camModel: string) {
        this._camModel = camModel;
    }

    get camModel(): string {
        return this._camModel;
    }

    set camModel(value: string) {
        this._camModel = value;
    }

    get camUrl(): string {
        return this._camUrl;
    }

    set camUrl(value: string) {
        this._camUrl = value;
    }

    get camUser(): string {
        return this._camUser;
    }

    set camUser(value: string) {
        this._camUser = value;
    }

    get camPwd(): string {
        return this._camPwd;
    }

    set camPwd(value: string) {
        this._camPwd = value;
    }

    get camIsActive(): boolean {
        return this._camIsActive;
    }

    set camIsActive(value: boolean) {
        this._camIsActive = value;
    }

    get camGroup(): string {
        return this._camGroup;
    }

    set camGroup(value: string) {
        this._camGroup = value;
    }

    get camName(): string {
        return this._camName;
    }

    set camName(value: string) {
        this._camName = value;
    }

    get camRoi(): Point[] {
        return this._camRoi;
    }

    set camRoi(value: Point[]) {
        this._camRoi = value;
    }

}
export default Cam;