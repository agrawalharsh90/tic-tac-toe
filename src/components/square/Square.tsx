import React from "react";
import './Square.scss';

interface SquareProps {
    value: string
    onClick: () => void
}

export const Square: React.FC<SquareProps> = (props: SquareProps) => {
    return (
        <div className="square" onClick={props.onClick}>
            {props.value ?? ''}
        </div>
    );
}