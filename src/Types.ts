import Board from './Board';

export interface IProps {}

export interface IState {
    calculated: boolean;
    calculating: boolean;
    error: boolean;
    open: Board[];
    close: Board[];
}

export enum Checker {
    White = 'white',
    Black = 'black',
    Empty = 'empty',
}
