class CamEvent {

    private _classNum: number; //6,
    private _className: string; //"car",
    private _classMainTimer: number; //20,
    private _classSubTimer: number; //60

    get classNum(): number {
        return this._classNum;
    }

    set classNum(value: number) {
        this._classNum = value;
    }

    get className(): string {
        return this._className;
    }

    set className(value: string) {
        this._className = value;
    }

    get classMainTimer(): number {
        return this._classMainTimer;
    }

    set classMainTimer(value: number) {
        this._classMainTimer = value;
    }

    get classSubTimer(): number {
        return this._classSubTimer;
    }

    set classSubTimer(value: number) {
        this._classSubTimer = value;
    }
}
export default CamEvent;