import Card from './Card';

export default class Engine {
  allCards = [];
  botCards = [];
  _playerCards = [];

  constructor() {
    console.log('ENGINE LOADED');
  }

  addCards(cards) {
    this.allCards = cards;
  }

  start(playerCards) {
    console.log('START GAME');
    // Create Player Deck
    // this._createPlayerDeck(playerCards);
  }

  reset() {
    console.log('RESET GAME');
  }

  end() {
    console.log('END GAME');
  }

  _createCard(d) {

  }

  _createPlayerDeck(playerCards) {

  }

  /**
   * Create the deck for the bot
   */
  _createBotDeck() {
    if (this.allCards.length === 0) return this.botCards;
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

    if (this.botCards.length != 0) {
      while (this.botCards.find(c => c.id === card.id)) {
        card = this._getyCardFromCards(pCard);
      }
    }

    return this.botCards.push(card);
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
