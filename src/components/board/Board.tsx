import React from "react";
import {Square} from "../square/Square";
import './Board.scss';

interface BoardProps {
    squares: Array<string>,
    onClick: (id:number) => void;
}

export const Board: React.FC<BoardProps> = (props: BoardProps) => {
    return (
        <div className={"board"}>
            {props.squares.map((item, index) => {
                return (
                    <Square
                        value={props.squares[index]}
                        onClick={() => props.onClick(index)}
                    />
                )
            })}
        </div>
    );

}
