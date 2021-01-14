import Card from './Card';

const minThreshold = 0.8;
const maxThreshold = 1.2;

class Engine {
  botDraftCards = [];
  _gameStarted = false;
  _playerCards = [];
  _botCards = [];
  __cloneBotCards = [];
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
   * Create card for player and add to 
   * players deck
   * Attcks is object of fast and special
   * where each has name and damage
   * @param {object} card 
   * @param {object} attacks 
   */
  addPlayerCard(card, attacks) {
    if (card && attacks.fast && attacks.special) {
      const playerCard = new Card(card, attacks);
      this._playerCards.push(playerCard);
    }
  }

  /**
   * Removes the card from the players deck
   * @param {number} cardId 
   */
  removePlayerCard(cardId) {
    const index = this._playerCards.findIndex(c => c.id === cardId);
    if (index !== -1) this._playerCards.splice(index, 1);
  }

  /**
   * Adds to the bots deck a new card
   * @param {object} card 
   */
  addBotCard(card) {
    if (!card) return false;
    const index = this._botCards.findIndex(c => c.id === card.id);
    if (index != -1) return this._botCards[index];
    const attacks = this._getBotAttacks(card);
    const botCard = new Card(card, attacks);
    this._botCards.push(botCard);
    this.__cloneBotCards.push(botCard);
  }

  /**
   * Returns best attacks from card api
   * @param {object} card 
   */
  _getBotAttacks(card) {
    const fast = this._getBestAttck(card.attacks.fast);
    const special = this._getBestAttck(card.attacks.special);
    return { fast, special };
  }

  /**
   * Returns best attack from list
   * @param {array} attacks 
   */
  _getBestAttck(attacks) {
    let bestAttack = {damage: 0};
    for (const attack of attacks) {
      if (attack.damage > bestAttack.damage) {
        bestAttack = attack
      }
    }
    return bestAttack;
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
   * Returns the best bot card from player pick
   * @param {object} playerCard 
   */
  getBotCard(playerCard) {
    if (!playerCard) return null;
    let cardToPlay = this._botCards.find(c => c.maxCP >= playerCard.maxCP);
    if (!cardToPlay) {
      cardToPlay = this._botCards.find(c => c.maxCP >= playerCard.maxCP * minThreshold);
    }
    return cardToPlay;
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