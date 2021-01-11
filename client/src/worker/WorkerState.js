import { expose } from 'comlink';
import Engine from './gamelogic/Engine';

const engine = new Engine();

const exports = {
  start: engine.start,
  reset: engine.reset,
  end: engine.end
};

expose(exports);