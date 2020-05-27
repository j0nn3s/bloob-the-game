import React from 'react';
import { BoardRow } from './../board-row-component/board-row-component'
import "./board-component.css"


export const Board = (props) => {
    const threeElements = ['one', 'two', 'three'];
    const fourElements = ['one', 'two', 'three', 'four'];
    const fiveElements = ['one', 'two', 'three', 'four', 'five'];
    return <div className="board-container">
              <BoardRow space='2' cards={threeElements} even='false'></BoardRow>
              <BoardRow space='1' cards={fourElements} even='true'></BoardRow>
              <BoardRow space='0' cards={fiveElements} even='false'></BoardRow>
              <BoardRow space='1' cards={fourElements} even='true'></BoardRow>
              <BoardRow space='2' cards={threeElements} even='false'></BoardRow>
    
</div>

}