import React, {MouseEventHandler} from "react";

interface SquareProps {
    value: string
    onClick: MouseEventHandler
}

export const Square: React.FC<SquareProps> = (props: SquareProps) => {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value??''}
        </button>
    );
}