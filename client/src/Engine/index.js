import Card from './Card';

const minThreshold = 0.8;
const maxThreshold = 1.2;

class Engine {
  botDraftCards = [];
  winner = null;
  payerCards = [];
  botCards = [];
  _gameStarted = false;
  _currentTurn = false;
  _gameFinished = false;
  __cloneBotCards = [];

  constructor() {
    if (!Engine.instance) {
      Engine.instance = this;
    }

    return Engine.instance;
  }

  /**
   * Returns if game is started state
   */
  get gameStarted() {
    return this._gameStarted;
  }

  /**
   * Sets the gameStarted value based
   * on conditions if one not true
   * then the game will not be started
   */
  set gameStarted(start) {
    if (start) {
      
      this.botDraftCards = this._createDraftBotDeck();

      this._gameStarted = 
        !this.gameStarted &&
        this._allCards?.length > 0 &&
        this.payerCards?.length > 0 &&
        this.botDraftCards?.length > 0
    } else {
      this._gameStarted = false;
      this.botDraftCards = [];
    }
  }

  get gameFinished() {
    return this._gameFinished;
  }

  set gameFinished(value) {
    this._gameFinished = value;
  }

  /**
   * Start the game
   */
  startGame() {
    this.gameStarted = true;
    this._resetValues();
    if (this.gameStarted) {
      this.__clonePlayerCards = [...this.payerCards];
    }
  }

  /**
   * End the game
   */
  endGame() {
    this.gameStarted = false;
    this._resetValues();
  }
  
  /**
   * Restart the current game
   */
  resetGame() {
    this._resetValues();
    this.payerCards = {...this.__clonePlayerCards};
    this.botCards = {...this.__cloneBotCards};
  }

  _resetValues() {
    this.gameFinished = false;
    this.winner = null;
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
      this.payerCards.push(playerCard);
    }
  }

  /**
   * Removes the card from the players deck
   * @param {number} cardId 
   */
  removePlayerCard(cardId) {
    const index = this.payerCards.findIndex(c => c.id === cardId);
    if (index !== -1) this.payerCards.splice(index, 1);
  }

  /**
   * Adds to the bots deck a new card
   * @param {object} card 
   */
  addBotCard(card) {
    if (!card) return false;
    const index = this.botCards.findIndex(c => c.id === card.id);
    if (index !== -1) return this.botCards[index];
    const attacks = this._getBotAttacks(card);
    const botCard = new Card(card, attacks);
    botCard.HP = 0;
    this.botCards.push(botCard);
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
    console.log(id);
    if (!id) return null;
    this.gameFinished = this._checkGameFinished(this.payerCards);
    if (this.gameFinished) this.winner = 'Computer';
    return this.payerCards.find(c => c.id === id);
  }

  /**
   * Returns the best bot card from player pick
   * @param {object} playerCard 
   */
  getBotCard(playerCard) {
    this.gameFinished = this._checkGameFinished(this.botCards);
    if (this.gameFinished) this.winner = 'Player';
    if (!playerCard) return null;
    let cardToPlay = this.botCards.find(c => c.maxCP >= playerCard.maxCP && !c.isDead);
    if (!cardToPlay) {
      cardToPlay = this.botCards.find(c => c.maxCP >= playerCard.maxCP * minThreshold && !c.isDead);
    }
    return cardToPlay;
  }

  doAttack(card1, card2) {

  }

  _checkGameFinished(cards) {
    if (cards.length === 0) return false;
    return !cards.find(card => card.HP > 0);
  }

  /**
   * Return the whos the current turn
   * If true then the turn is for player
   */
  getCurrentTurn() {
    // Make a random function to start turn
    return true;
  }

  /**
   * Create a draft deck for the bot so that
   * it can be used latter for loading the 
   * bot real card
   */
  _createDraftBotDeck() {
    let draftBots = [];

    const findFn = (currentCard, playerCard) => {
      const a = !this.payerCards.find(b => b.id === currentCard.id)  
      const b = !draftBots.find(b => b.id === currentCard.id)
      const c = currentCard.maxCP > playerCard.maxCP * minThreshold;
      const d = currentCard.maxCP < playerCard.maxCP * maxThreshold;

      return a && b && c && d;
    }
    for (const card of this.payerCards) {
      const bot = this._allCards.find(c => findFn(c, card))
      if (bot) draftBots.push(bot);
    }

    return draftBots;
  }
}

const engine = new Engine();
export default engine;