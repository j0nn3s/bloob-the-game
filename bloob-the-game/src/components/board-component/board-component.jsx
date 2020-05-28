import React from 'react';
import { BoardRow } from './../board-row-component/board-row-component'
import "./board-component.css"


export const Board = (props) => {
    const threeElements = ['one', 'two', 'three'];
    const fourElements = ['one', 'two', 'three', 'four'];
    const fiveElements = ['one', 'two', 'three', 'four', 'five','six','seven'];
    var cardElements = [];
    for(var i = props.lengthStartRow; i < (Math.ceil(props.lengthStartRow * 1.5) + 1 ); i++){
      var el = fiveElements.slice(0,i);
      cardElements.push(el);
    }
    for(var j = (Math.ceil(props.lengthStartRow * 1.5))-1; j >= props.lengthStartRow; j--){
      var el2 = fiveElements.slice(0,j);
      cardElements.push(el2);
    }
    return <div className="board-container">
              { cardElements.map(
                cardE => (<BoardRow space={Math.abs(Math.ceil(props.lengthStartRow * 1.5)-(cardE.length)) / 2} cards={cardE} even={3 % 2 === 0 ? 'true': 'false'}></BoardRow>))
              }
              {/*<BoardRow space='1' cards={threeElements} even='false'></BoardRow>
              <BoardRow space='0' cards={fourElements} even='true'></BoardRow>
              <BoardRow space='0' cards={fiveElements} even='false'></BoardRow>
              <BoardRow space='0' cards={fourElements} even='true'></BoardRow>
              <BoardRow space='1' cards={threeElements} even='false'></BoardRow>*/}
    
            </div>
}