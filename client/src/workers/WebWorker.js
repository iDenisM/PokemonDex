import { expose } from 'comlink';
import Engine from './Engine';

const engine = new Engine();

const exports = {
  start: engine.start()
};

expose(exports);