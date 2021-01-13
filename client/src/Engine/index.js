import { useQuery, gql } from '@apollo/client';

class Engine {
  _gameStarted = false;
  _playerCards = [];
  _botCards = [];

  constructor() {
    if (!Engine.instance) {
      Engine.instance = this;
    }

    return Engine.instance;
  }

  get gameStarted() {
    return this._gameStarted;
  }

  set gameStarted(start) {
    if (start) {
      
      this._createBotDeck();

      this._gameStarted = 
        !this.gameStarted &&
        this._allCards?.length > 0 &&
        this._playerCards?.length > 0 &&
        this._botCards?.length > 0
    } else {
      this._gameStarted = false;
    }
  }

  startGame() {
    this.gameStarted = true;
  }

  endGame() {
    this.gameStarted = false;
  }

  addCards(cards) {
    this._allCards = cards;
  }

  addPlayerCards(cards) {
    this._playerCards = cards;
  }

  _createBotDeck() {
    const minThreshold = 0.8;
    const maxThreshold = 1.2;
    const findFn = (c, card) => {
      const a = c.maxCP > card.maxCP * minThreshold;
      const b = c.maxCP < card.maxCP * maxThreshold;

      debugger
      return a || b;
    }
    for (const card of this._playerCards) {
      this._botCards = this._allCards.find(c => findFn(c, card))
    }
  }
}

const engine = new Engine();
export default engine;