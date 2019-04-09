import './App.css';
import {
    Checker,
    IProps,
    IState,
} from './Types';

import _ from 'lodash';
import React, {
    PureComponent,
} from 'react';
import Board from './Board';
import Spinner from './Spinner/Spinner';

import config from './config';

function formVertexes(b: Board, callback: Function) {
    callback(0, 35)
}

class App extends PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            calculated: false,
            calculating: false,
            error: false,
            open: [new Board(
                config.start,
                config.end,
            )],
            close: [],
        };
    }

    componentDidMount(){
        this.setState({
            calculating: true,
        })
    }

    componentDidUpdate() {
        const {
            calculated,
            error,
            open,
            close,
        } = this.state;

        if (!calculated && !error) {
            new Promise<any>((resolve) => {
                const x = open[0];

                if (x.checkEnd()) {
                    resolve({
                        open: [],
                        close: x,
                        calculated: true,
                    })
                }

                const toOpen = [];
                formVertexes(x, (i: number, j: number) => {
                    const newBoard = x.createChild(i, j);
                    let shouldOpen = true;
                    open.forEach(board => {
                        if (newBoard.equal(board)) {
                            shouldOpen = false;
                        }
                    });
                    close.forEach(board => {
                        if (newBoard.equal(board)) {
                            shouldOpen = false;
                        }
                    });
                    if (shouldOpen) {
                        toOpen.push(newBoard);
                    }
                })
            }).then(res => {
                open.shift();
                close.push(res.close);
                this.setState({
                    open: _.sortBy(open.concat(res.open), (o) => {
                        return o.f;
                    }),
                    close,
                    calculated: res.calculated,
                })
            }).catch((err) => {
                console.error(err.message);
                this.setState({
                    error: true,
                })
            });
        }
    }

    render() {
        const {
            calculated,
            error,
        } = this.state;

        return (
            <div className='App'>
                {!calculated && !error && <Spinner/>}
                {!calculated && error && <span>error</span>}
                {calculated && !error && <span>calculated</span>}
            </div>
        );
    }
}

export default App;
