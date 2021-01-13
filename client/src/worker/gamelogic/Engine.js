import Card from './Card';

export default class Engine {
  _gameStarted = false;
  allCards = [];
  _botCards = [];
  _playerCards = [];

  constructor() {
    console.log('ENGINE LOADED');
  }

  get startGame() {
    return this._gameStarted;
  }

  set startGame(start) {
    this._gameStarted = start
    if (start) {
      // DO THINGS IF GAME STARTED
    } else {
      // DO THINGS IF GAME ENDTED
    }
  }

  addCards(cards) {
    this.allCards = cards;
  }

  addPlayerCards(playerCards) {
    this._playerCards = playerCards && playerCards.length > 0 ? playerCards : [];
    // Create Player Deck
    // this._createPlayerDeck(playerCards);
  }

  start() {
    console.log('----TRYING TO STAR GAME----');
    this.startGame = 
      !this.startGame &&
      this.allCards?.length > 0 &&
      this._playerCards?.length > 0 && 
      this._botCards?.length > 0;
    console.log('----STARING GAME----', this.startGame);
    return this.startGame;
  }

  reset() {
    console.log('RESET GAME');
  }

  end() {
    console.log('END GAME');
    this.startGame = false;
  }

  _createCard(d) {

  }

  _createPlayerDeck(playerCards) {

  }

  /**
   * Create the deck for the bot
   */
  _createBotDeck() {
    if (this.allCards.length === 0) return this._botCards;
    for (const pCard of this.playerDeck) {
      this._addCardToBotDeck(pCard);
    }
    // TODO: Think of adding a check if bot's deck
    // is of the same length as player's one
  }

  /**
   * Add a card the the bot's deck
   * checking for duplicates in the
   * existing bot's deck
   * @param {object} pCard 
   */
  _addCardToBotDeck(pCard) {
    let card = this._getyCardFromCards(pCard);

    if (this._botCards.length != 0) {
      while (this._botCards.find(c => c.id === card.id)) {
        card = this._getyCardFromCards(pCard);
      }
    }

    return this._botCards.push(card);
  }

  /**
   * Get a random card from the cards
   * list with the CP > 80% and < 120% 
   * of player's card CP
   * @param {object} pCard 
   */
  _getyCardFromCards(pCard) {
    return this.allCards.find(c => c.maxCP < pCard.maxCP * 1.2 && c.maxCP > pCard.maxCP * 0.8 && c.id != card.id);
  }
}
