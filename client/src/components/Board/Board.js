import './Board.css';
import React from 'react';
import { wrap } from 'comlink';

const startGame = () => {
  const worker = new Worker('./worker/WebWorker', { name: 'WebWorker', type: 'module' });
  const workerApi = wrap(worker);
  workerApi.startGame();    
}

const Board = () => {
  return (
    <div>
      <button className="btn-worker" onClick={this.startGame}>
        START GAME
      </button>
    </div>
  )
}

export default Board;