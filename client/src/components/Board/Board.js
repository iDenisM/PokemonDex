import './Board.css';
import React from 'react';
import { start, reset, end } from '../../worker';

const Board = () => {
  return (
    <div>
      <button className="btn-worker" onClick={start}>
        START GAME
      </button>
      <button className="btn-worker" onClick={reset}>
        RESET GAME
      </button>
      <button className="btn-worker" onClick={end}>
        END GAME
      </button>
    </div>
  )
}

export default Board;