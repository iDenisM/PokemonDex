import { rewriteURIForGET } from "@apollo/client";

class Engine {
  _gameStarted = false;
  _playerCards = [];
  _botCards = [];
  botDraftCards = [];
  _currentTurn = false;

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

  /**
   * Start the game
   */
  startGame() {
    this.gameStarted = true;
    if (this.gameStarted) {
      this.__clonePlayerCards = [...this._playerCards];
    }
  }

  /**
   * End the game
   */
  endGame() {
    this.gameStarted = false;
  }

  /**
   * Restart the current game
   */
  resetGame() {
    this._playerCards = {...this.__clonePlayerCards};
    this._botCards = {...this.__cloneBotCards};
  }

  /**
   * Add the full list of available cards
   * In this case every single card has a
   * simpler api use other methods to get
   * the full data of card
   * @param {[object]} cards 
   */
  addCards(cards) {
    this._allCards = cards;
  }

  /**
   * Updates the players deck list
   * @param {[object]} cards 
   */
  addPlayerCards(cards) {
    this._playerCards = cards;
  }

  /**
   * Adds to the bots deck a new card
   * @param {object} card 
   */
  addBotCard(card) {
    this._botCards.push(card);
    this.__cloneBotCards.push(card);
  }

  /**
   * Returns the updated card data of 
   * the player by id
   * @param {number} id 
   */
  getPlayerCardById(id) {
    if (!id) return null;
    return this._playerCards.find(c => c.id === id);
  }

  /**
   * Return the whos the current turn
   * If true then the turn is for player
   */
  getCurrentTurn() {
    // Make a random function to start turn
    return true;
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