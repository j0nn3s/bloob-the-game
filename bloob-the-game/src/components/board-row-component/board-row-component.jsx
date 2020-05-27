import React from 'react';
import { Card } from './../card-component/card-component'

export const BoardRow = (props) => {
    var classNames = 'row' + '-' + props.space;
    var space = parseInt(props.space) * 200;
    if(props.even === 'true'){
        classNames = classNames + ' even';
        space = space + 87;
    }
    const cards = [];
    for(const [index, value] of props.cards.entries()){
        cards.push(<Card></Card>);
    }

    space = space + 'px'
    return  <div className={classNames} style={{'margin-left': {space}}}>
                {cards}
            </div>

}