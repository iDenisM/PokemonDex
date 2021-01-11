import GameState from '../../src/game/GameState';

new GameState();

self.onmessage = async e => {
  console.log(e.data.msg);
  if (e.data.msg === 'ADD_BOT') {

  }
}
