import React from 'react';
import {Card} from '../card-component/card-component'

export const BoardRow = (props) => {

    if (!props.cardStates || props.cardStates.length === 0) {
        return null;
    }

    var space = parseInt(props.spaceAmount) * 87; //half of hex width
    space = space + 'px';

    var classNames = 'row';
    if (props.evenFlag === "true") {
        classNames = classNames + ' even';
    }

    var sortedArray = props.cardStates.sort((cardState1,cardState2) => (cardState1.columnIndex - cardState2.columnIndex));

    return  <div className={classNames} style={{marginLeft: `${space}`}}>
                {sortedArray.map(cardState => <Card key={cardState.rowIndex + "_" + cardState.columnIndex}
                                                    cardState={cardState}
                                                    owner={props.owner}
                                                    onClickFunction={props.onClickFunction}/>)}
            </div>
}