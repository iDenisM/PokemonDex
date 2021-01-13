import { expose } from 'comlink';
import Engine from './gamelogic/Engine';

const exports = {
  engine: Engine,
  addPlayerCards: Engine.addPlayerCards
};

expose(exports);