
class Engine {
  _gameStarted = false;
  _playerCards = [];
  _botCards = [];
  botDraftCards = [];

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
      
      this.botDraftCards = this._createDraftBotDeck();

      this._gameStarted = 
        !this.gameStarted &&
        this._allCards?.length > 0 &&
        this._playerCards?.length > 0 &&
        this.botDraftCards?.length > 0
    } else {
      this._gameStarted = false;
      this._playerCards = [];
      this.botDraftCards = [];
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

  addBotCard(card) {
    this._botCards.push(card);
  }

  _createDraftBotDeck() {
    const minThreshold = 0.8;
    const maxThreshold = 1.2;
    let draftBots = [];

    const findFn = (currentCard, playerCard) => {
      const a = !this._playerCards.find(b => b.id === currentCard.id)  
      const b = !draftBots.find(b => b.id === currentCard.id)
      const c = currentCard.maxCP > playerCard.maxCP * minThreshold;
      const d = currentCard.maxCP < playerCard.maxCP * maxThreshold;

      return a && b && (c || d);
    }
    for (const card of this._playerCards) {
      const bot = this._allCards.find(c => findFn(c, card))
      if (bot) draftBots.push(bot);
    }

    return draftBots;
  }
}

const engine = new Engine();
export default engine;