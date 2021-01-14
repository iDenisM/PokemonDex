export default class Card {
  constructor(data, attacks) {
    this.id = data.id;
    this.name = data.name;
    this.HP = data.maxHP;
    this.image = data.image;
    this.attacks = {
      fast: attacks?.fast,
      special: attacks?.special
    }
    this.maxCP = data.maxCP;
  }

  get isDead() {
    return this.HP <=  0;
  }
}