import React from 'react';
import ReactDOM from 'react';
import { BoardRow } from './../board-row-component/board-row-component'
import "./board-component.css"


export class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dimensions: {
                width: 0,
                height: 0,
            }
        };
        this.convertCardRowsInBoardRows = this.convertCardRowsInBoardRows.bind(this);
    }

    componentDidMount() {
        //console.log(this.myBoard.current.offsetWidth)
        //console.log(this.container.offsetWidth);

        this.setState({
            dimensions: {
                width: this.container.offsetWidth,
                height: this.container.offsetHeight,
            },
        });
    }

    render() {

        var lengthStartRowInt = parseInt(this.props.lengthStartRow);

        var cardRows = generateDummyCardRows(lengthStartRowInt);

        var scaleFactor = this.calculateScaleFactor(lengthStartRowInt, this.state.dimensions.width);

        var boardRowArray = this.convertCardRowsInBoardRows(cardRows, scaleFactor);

        var absoluteHeight = 200 * lengthStartRowInt + 100 * (lengthStartRowInt - 1);
        var absoluteWidth = (174 * (lengthStartRowInt*2-1));
        var scaleString = "scale(" + scaleFactor + ")";
        var cssString = {
            transform: scaleString,
            height: absoluteHeight,
            width: absoluteWidth
        }

        return <div className="board-container" ref={el => (this.container = el)}>
            <div style={cssString}>
                {boardRowArray}
            </div>
        </div>

    }

    convertCardRowsInBoardRows(cardRows, scaleFactor) {
        var boardRowArray = [];

        var x;
        var evenFlagString;
        var spaceAmount;

        for (x=0; x<cardRows.length; x++) {
            evenFlagString = x % 2 === 1 ? "true": "false";
            spaceAmount = cardRows.length - cardRows[x].length;
            boardRowArray.push( <BoardRow cards={cardRows[x]}
                                          space={spaceAmount}
                                          even={evenFlagString}
                                          scaleFactor={scaleFactor}/> );
        }

        return boardRowArray;
    }

    calculateScaleFactor(lengthStartRowInt, width) {
        var maximumRowCardCount = (lengthStartRowInt * 2) - 1;
        var maximumRowCardWidthTotal = (maximumRowCardCount * 174) + maximumRowCardCount;
        return (width - 0) / maximumRowCardWidthTotal;
    }
}


function generateDummyCardRows(lengthStartRow) {
    var cardRows = [];
    var numberOfCards;
    var currentCardRow;

    var i;
    var j;
    //first row until 'equator' row included
    for (i = 0; i < lengthStartRow; i++) {
        numberOfCards = lengthStartRow + i;
        currentCardRow = [];
        for (j = 0; j < numberOfCards; j++) {
            currentCardRow.push(i + "," + j);
        }
        cardRows.push(currentCardRow);
    }
    //all rows below 'equator' row
    for (i = lengthStartRow - 2; i > -1; i--) {
        numberOfCards = lengthStartRow + i;
        currentCardRow = [];
        for (j = 0; j < numberOfCards; j++) {
            currentCardRow.push(i + "," + j);
        }
        cardRows.push(currentCardRow);
    }
    return cardRows;
}