class Point {

    private _x: number;
    private _y: number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    get X(): number {
        return this._x;
    }

    set X(value: number) {
        this._x = value;
    }

    get Y(): number {
        return this._y;
    }

    set Y(value: number) {
        this._y = value;
    }
}
export default Point; //ES6/