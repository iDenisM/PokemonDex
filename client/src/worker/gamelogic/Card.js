export default class Card {
  _hp = 0;

  constructor({ id, maxHP, attacks, fleeRate}) {
    this.id = id;
    this.HP = maxHP;
    this.attack = {
      fast: attacks.fast,
      special: attacks.special,
    }
    this._fleeRate = fleeRate;
  }

  get HP() {
    return this._hp;
  }

  set HP(hp) {
    if (this.isDead) {
      this._hp = this._hp;
    } else {
      this._hp = hp;
      if (this._hp <= 0) this.isDead = true;
    }
  }
}