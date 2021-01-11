import React from 'react';
import './Board.css';

export default class Board extends React.Component {
  worker;

  // componentDidMount() {
  //   this.worker = new Worker('./workers/Engine.js');
  //   this.worker.onmessage = (event) => {
  //     if (event && event.data) {
  //       console.log('away', event.data);
  //     }
  //   };
  // }

  // isClicked = () => {
  //   this.worker.postMessage({msg: 'ADD_BOT', value: 1})
  // }

  render() {
    return (
      <div onClick={this.isClicked}>Board</div>
    )
  }
}