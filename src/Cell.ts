import {
    Checker
} from './Types';

class Cell {
    constructor(private _checker: Checker) {}

    get checker(): Checker {
        return this._checker;
    }

    set checker(value: Checker) {
        this._checker = value;
    }
}

export default Cell;
