import {
    Checker,
} from './Types';

const start = [
    // 1st row
    Checker.White,
    Checker.White,
    Checker.White,
    Checker.Black,
    Checker.Black,
    Checker.Empty,
    // 2nd row
    Checker.White,
    Checker.White,
    Checker.White,
    Checker.Black,
    Checker.Black,
    Checker.Empty,
    // 3rd row
    Checker.White,
    Checker.White,
    Checker.Empty,
    Checker.Black,
    Checker.Black,
    Checker.Empty,
    // 4th row
    Checker.White,
    Checker.White,
    Checker.Black,
    Checker.Black,
    Checker.Black,
    Checker.Empty,
    // 5th row
    Checker.White,
    Checker.White,
    Checker.Black,
    Checker.Black,
    Checker.Black,
    Checker.Empty,
    // 6th row
    Checker.Empty,
    Checker.Empty,
    Checker.Empty,
    Checker.Empty,
    Checker.Empty,
    Checker.Empty
];
const end = [
    // 1st row
    Checker.Black,
    Checker.Black,
    Checker.Black,
    Checker.White,
    Checker.White,
    Checker.Empty,
    // 2nd row
    Checker.Black,
    Checker.Black,
    Checker.Black,
    Checker.White,
    Checker.White,
    Checker.Empty,
    // 3rd row
    Checker.Black,
    Checker.Black,
    Checker.Empty,
    Checker.White,
    Checker.White,
    Checker.Empty,
    // 4th row
    Checker.Black,
    Checker.Black,
    Checker.White,
    Checker.White,
    Checker.White,
    Checker.Empty,
    // 5th row
    Checker.Black,
    Checker.Black,
    Checker.White,
    Checker.White,
    Checker.White,
    Checker.Empty,
    // 6th row
    Checker.Empty,
    Checker.Empty,
    Checker.Empty,
    Checker.Empty,
    Checker.Empty,
    Checker.Empty,
];
const size = Math.sqrt(start.length).toFixed(0);

export default {
    start,
    end,
    size,
}
