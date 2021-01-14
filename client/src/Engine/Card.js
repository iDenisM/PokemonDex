export default class Card {
  constructor(data, attacks) {
    this.id = data.id;
    this.name = data.name;
    this.HP = data.maxHP;
    this.attacks = {
      fast: attacks?.fast,
      special: attacks?.special
    }
  }

  get isDead() {
    return this.HP <=  0;
  }
}