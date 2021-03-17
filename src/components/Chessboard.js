import React from 'react';
import './Chessboard.css'

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

export default function Chessboard() {
    let board = [];
    let color = true;

    for(let j = verticalAxis.length - 1; j >= 0; j--) {
        
        for(let i = 0; i < horizontalAxis.length; i++) {
            if(color) {
                board.push(<div className="white-tile"> {horizontalAxis[i]}{verticalAxis[j]} </div>)
                color = !color;
            } else {
                board.push(<div className="black-tile"> {horizontalAxis[i]}{verticalAxis[j]} </div>)
                color = !color;
            }
        }
        color = !color;
    }

    return <div id="chessboard">{board}</div>
}