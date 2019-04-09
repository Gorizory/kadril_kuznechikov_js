import {
    Checker
} from './Types';

import Cell from './Cell';

class Board {
    private _board: Cell[] = [];
    private _g: number = 0;
    private _h: number = 0;
    private _f: number = 0;
    private _move: Checker = Checker.White;
    private _previous: Board | undefined;

    constructor(start: Checker[], private end: Checker[]) {
        start.forEach((checker) => {
            this.board.push(new Cell(checker));
        });
    }

    get previous(): Board | undefined {
        return this._previous;
    }

    set previous(value: Board | undefined) {
        this._previous = value;
    }

    get move(): Checker {
        return this._move;
    }

    set move(value: Checker) {
        this._move = value;
    }

    get g(): number {
        return this._g;
    }

    set g(value: number) {
        this._g = value;
    }

    get h(): number {
        return this._h;
    }

    set h(value: number) {
        this._h = value;
    }

    get board() {
        return this._board;
    }

    set f(value: number) {
        this._f = value;
    }

    get f() {
        return this._f;
    }

    calcH() {
        return this.h;
    }

    checkEnd() {
        for (let i = 0; i < this.board.length; i++) {
            if (this.board[i].checker !== this.end[i]) {
                return false;
            }
        }

        return true;
    }

    equal(b: Board) {
        for (let i = 0; i < this.board.length; i++) {
            if (this.board[i].checker !== b.board[i].checker) {
                return false;
            }
        }

        return true;
    }

    createChild(i: number, j: number) {
        const child = new Board(this.board.map(cell => cell.checker), this.end);

        child.board[i].checker = this.board[j].checker;
        child.board[j].checker = this.board[i].checker;
        child.g = this.g + 1;
        child.h = child.calcH();
        child.f = child.g + child.h;
        child.move = this.move === Checker.White ? Checker.Black : Checker.White;
        child.previous = this;

        return child;
    }
}

export default Board;
