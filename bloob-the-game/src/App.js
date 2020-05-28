import React from 'react';
import {Component} from 'react'
import { Board } from './components/board-component/board-component';
import './App.css';

class App extends Component{
  render(){
    return (
        <Board lengthStartRow='4'></Board>
    );
  }
}
  

export default App;
