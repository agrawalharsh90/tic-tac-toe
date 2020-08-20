import React, {useState} from "react";
import {Board} from "../board/Board";

const Game: React.FC = () => {
    const [data, setData] = useState({

        squares: Array(9).fill(null),

        xIsNext: true
    });
    const calculateWinner: Function = (squares: Array<number>) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }
    const handleClick: Function = (i: number) => {

        const squares = data.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = data.xIsNext ? "X" : "O";
        setData({

            squares: squares,

            xIsNext: !data.xIsNext
        });
    }


    const winner = calculateWinner(data.squares);

    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (data.xIsNext ? "X" : "O");
    }


    return (
        <div className="game">
            <div className="game-info">
                <div>{status}</div>
            </div>
            <div className="game-board">
                <Board
                    squares={data.squares}
                    onClick={handleClick}
                />
            </div>

        </div>
    );
}

export default Game;