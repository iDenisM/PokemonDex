import GameState from '../game/GameState';

new GameState();

const engineWorker = () => {
  onmessage = event => {
    if (!event) return;
    let msg = '';

    if (event.data === 'Fetch Users') {
      msg = 'OK';
    } else {
      msg = 'NO'
    }

    postMessage(msg);
  }
}

export default engineWorker;