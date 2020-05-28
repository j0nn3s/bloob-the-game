import React from 'react';
import { Card } from './../card-component/card-component'

export const BoardRow = (props) => {
    var classNames = 'row';
    var space = parseInt(props.space) * 87;
    if(props.even === 'true'){
        classNames = classNames + ' even';
    }
    const cards = [];
    for(const [index, value] of props.cards.entries()){
        cards.push(<Card></Card>);
    }

    space = space + 'px'
    return  <div className={classNames} style={{marginLeft: `${space}`}}>
                {cards}
            </div>

}