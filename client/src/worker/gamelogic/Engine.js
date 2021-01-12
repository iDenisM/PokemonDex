export default class Engine {
  cards = [];
  botCards = [];
  _playerCards = [];

  constructor() {
    console.log('ENGINE LOADED');
  }

  /**
   * Get the player cards
   */
  get playerCards() {
    return this._playerCards;
  }

  /**
   * Set the player cards and the create 
   * deck for the bot
   */
  set playerCards(playerCards) {
    this._playerCards = playerCards;
    this._createBotDeck();
  }

  addCards(cards) {
    this.cards = cards;
  }

  start(playerCards) {
    console.log('START GAME');
    // Get player pokemons
    // this.playerCards = playerCards;
  }

  reset() {
    console.log('RESET GAME');
  }

  end() {
    console.log('END GAME');
  }

  /**
   * Create the deck for the bot
   */
  _createBotDeck() {
    if (this.cards.length === 0) return this.botCards;
    for (const pCard of this.playerCards) {
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

    if (this.botCards.length != 0) {
      while (this.botCards.find(c => c.id === card.id)) {
        card = this._getyCardFromCards(pCard);
      }
    }

    return this.botCards.push(card);
  }

  /**
   * Get a random card from the cards
   * list with the CP > 90% and < 110% 
   * of player's card CP
   * @param {object} pCard 
   */
  _getyCardFromCards(pCard) {
    return this.cards.find(c => c.maxCP < pCard.maxCP * 1.1 && c.maxCP > pCard.maxCP * 0.9 && c.id != card.id);
  }
}
