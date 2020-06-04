import React from 'react';
import "./card-component.css"


export const Card = (props) => {

        var fillColor = "#123";
        if (props.cardState.visible) {
            fillColor = props.owner.color;
        }

        return <svg version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 173.20508075688772 200"
                    className='svg'
                    onClick={() => props.onClickFunction(props.cardState.rowIndex,props.cardState.columnIndex)}>
            <path fill={fillColor}
                  stroke="white"
                  d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"></path>
            <text id="debug" x="10" y="100" fill="#ffffff">{props.cardState.rowIndex}, {props.cardState.columnIndex}</text>
        </svg>

}