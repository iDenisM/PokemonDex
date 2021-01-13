import { expose } from 'comlink';
import Engine from './gamelogic/Engine';

const engine = new Engine();

const exports = {
  addCards: engine.addCards,
  addPlayerCards: engine.addPlayerCards,
  start: engine.start,
  reset: engine.reset,
  end: engine.end
};

expose(exports);