import React from 'react';
import { BoardRow } from './../board-row-component/board-row-component'
import "./board-component.css"


export class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            round: 0,
            dimensions: {
                width: 0,
                height: 0,
            },
            cardsStates: [],
            players: [{
                id: 0,
                name: "christian",
                color: "#f00"
            },{
                id: 1,
                name: "johannes",
                color: "#0FF"
            }]
        };
    }

    componentDidMount() {
        this.setState({
            dimensions: {
                width: this.container.offsetWidth,
                height: this.container.offsetHeight,
            },
        });

        var lengthStartRowInt = parseInt(this.props.lengthStartRow);
        this.setState({
            cardsStates: this.generateCardStates(lengthStartRowInt)
        });
    }

    handleCardClick = (rowIndex, columnIndex) => {
        var qualifiedCards = this.state.cardsStates.filter(card => card.rowIndex === rowIndex).filter(card => card.columnIndex === columnIndex);
        this.setState(qualifiedCards.map(card => card.visible = !card.visible)); 
        this.setState(qualifiedCards.map(card => card.ownerID = this.state.players.filter(player => player.id === parseInt(this.state.round) %2)));
        this.setState({round: this.state.round +1});
        console.log("Clicked on: " + rowIndex + ", " + columnIndex);
    }

    render() {
        var lengthStartRowInt = parseInt(this.props.lengthStartRow);

        var absoluteHeight = 200 + (150 * (lengthStartRowInt*2-2));
        var absoluteWidth = (174 * (lengthStartRowInt*2-1));
        var cssString = {
            height: absoluteHeight,
            width: absoluteWidth
        }

        var maxRowLength = 2*this.props.lengthStartRow-1;
        var boardRowArray = [];
        var evenFlagString;
        var spaceAmount;
        for (var k=0; k<maxRowLength;k++) {
            var rowCardStates = this.state.cardsStates.filter(card => card.rowIndex === k);
            evenFlagString = k % 2 === 1 ? "true": "false";
            spaceAmount = maxRowLength - rowCardStates.length;
            boardRowArray.push(<BoardRow key={"row_" + k}
                                         cardStates={rowCardStates}
                                         owner={this.state.players[parseInt(this.state.round) % 2]}
                                         evenFlag={evenFlagString}
                                         spaceAmount={spaceAmount}
                                         onClickFunction={this.handleCardClick}/>);
        }

        return <div className="board-container" ref={el => (this.container = el)} style={{height: window.innerHeight}}>
            <div style={cssString}>
                {boardRowArray}
            </div>
        </div>

    }

     generateCardStates = (lengthStartRow) => {
        var cardStates = [];
        var numberOfCards;
        var i;
        var j;
        //first row until 'equator' row included
        for (i = 0; i < lengthStartRow; i++) {
            numberOfCards = lengthStartRow + i;
            for (j = 0; j < numberOfCards; j++) {
                cardStates.push( this.generateCardState(i, j) );
            }
        }
        //all rows below 'equator' row
        for (i = lengthStartRow - 2; i > -1; i--) {
            numberOfCards = lengthStartRow + i;
            for (j = 0; j < numberOfCards; j++) {
                cardStates.push( this.generateCardState((lengthStartRow + Math.abs(lengthStartRow - 2 - i)), j) );
            }
        }
        return cardStates;
    }

    generateCardState = (rowIndex, columnIndex) => {
        return {rowIndex: rowIndex,
            columnIndex: columnIndex,
            visible: false,
            ownerID: "",
            vein: 0,
            type: "UNDEFINED", //will contain String; one of: "normal", "food", "salt", "vinegar", "water", "dead"
            protein: {},//will contain Object of: <color>(String) -> <amount>(int)
            sugar: {}}
    }
}
