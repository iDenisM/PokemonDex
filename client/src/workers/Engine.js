import GameState from '../game/GameState';

new GameState();

onmessage = async e => {
  console.log(e.data.msg);
  if (e.data.msg === 'ADD_BOT') {

  }
}
