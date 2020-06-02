import React from 'react';
import './Blopp.css';
import {Board} from "./components/board-component/board-component";
import {Player} from "./components/player-component/player-component";

export class Blopp extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className='container'>
            <Board name="myBoard" lengthStartRow="4"/>
            <Player></Player>
        </div>;


        //board
        //players
        //status
        //actions



        //var protein_production = {red: 0, green: 1};
        /*
        return (
            <Player name="Hubert"
                    color="red"
                    protein_production={protein_production}>

            </Player>
         */
            /*
            <Board lengthStartRow="6"/>
             */
        //);
    }
}