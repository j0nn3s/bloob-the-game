import React from 'react';
import {Component} from 'react'
import { Board } from './components/board-component/board-component';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      dimensions: {
        width: "0",
        height: "0",
      }
    };
  }

  componentDidMount() {
    this.setState({
      dimensions: {
        width: this.container.offsetWidth,
        height: this.container.offsetHeight,
      },
    });
  
  }

  render() {
    return (
      <div className="Hello" ref={el => (this.container = el)}>
        <Board className="whyNot" dimensions={this.state.dimensions} />
      </div>
    );
  }
}
  

export default App;
