import Engine from './index';

const MOCK_POKEMONS = [
  {
    "id": "UG9rZW1vbjowMDE=",
    "name": "Bulbasaur",
    "image": "https://img.pokemondb.net/artwork/bulbasaur.jpg",
    "maxHP": 1071,
    "maxCP": 951,
    "attacks": {
      "fast": [
        {
          "name": "Tackle",
          "damage": 12
        },
        {
          "name": "Vine Whip",
          "damage": 7
        }
      ],
      "special": [
        {
          "name": "Power Whip",
          "damage": 70
        },
        {
          "name": "Seed Bomb",
          "damage": 40
        },
        {
          "name": "Sludge Bomb",
          "damage": 55
        }
      ]
    },
    "fleeRate": 0.1
  },
  {
    "id": "UG9rZW1vbjowMDI=",
    "name": "Ivysaur",
    "image": "https://img.pokemondb.net/artwork/ivysaur.jpg",
    "maxHP": 1632,
    "maxCP": 1483,
    "attacks": {
      "fast": [
        {
          "name": "Razor Leaf",
          "damage": 15
        },
        {
          "name": "Vine Whip",
          "damage": 7
        }
      ],
      "special": [
        {
          "name": "Power Whip",
          "damage": 70
        },
        {
          "name": "Sludge Bomb",
          "damage": 55
        },
        {
          "name": "Solar Beam",
          "damage": 120
        }
      ]
    },
    "fleeRate": 0.07
  },
  {
    "id": "UG9rZW1vbjowMDQ=",
    "name": "Charmander",
    "image": "https://img.pokemondb.net/artwork/charmander.jpg",
    "maxHP": 955,
    "maxCP": 841,
    "attacks": {
      "fast": [
        {
          "name": "Ember",
          "damage": 10
        },
        {
          "name": "Scratch",
          "damage": 6
        }
      ],
      "special": [
        {
          "name": "Flame Burst",
          "damage": 30
        },
        {
          "name": "Flame Charge",
          "damage": 25
        },
        {
          "name": "Flamethrower",
          "damage": 55
        }
      ]
    },
    "fleeRate": 0.1
  },
  {
    "id": "UG9rZW1vbjowMDc=",
    "name": "Squirtle",
    "image": "https://img.pokemondb.net/artwork/squirtle.jpg",
    "maxHP": 1008,
    "maxCP": 891,
    "attacks": {
      "fast": [
        {
          "name": "Bubble",
          "damage": 25
        },
        {
          "name": "Tackle",
          "damage": 12
        }
      ],
      "special": [
        {
          "name": "Aqua Jet",
          "damage": 25
        },
        {
          "name": "Aqua Tail",
          "damage": 45
        },
        {
          "name": "Water Pulse",
          "damage": 35
        }
      ]
    },
    "fleeRate": 0.1
  }
]

const MOCK_ATTACKS = {
  "fast": {
    "name": "Tackle",
    "damage": 12
  },
  "special": {
    "name": "Power Whip",
    "damage": 70
  }
}

afterEach(() => {
  jest.clearAllMocks();
});

it('Should start if all necesary paramenters are present', () => {
  Engine.addCards(MOCK_POKEMONS);
  Engine.addPlayerCard(MOCK_POKEMONS[0], MOCK_ATTACKS)
  Engine.startGame();
  expect(Engine.gameStarted).toBe(true);
  Engine.endGame();
  expect(Engine.gameStarted).toBe(false);
});

it('Should not start if all necesary paramenters are not present', () => {
  Engine.startGame();
  expect(Engine.gameStarted).toBe(false);
});

it('Should add a player card to the player desk', () => {
  Engine.addPlayerCard(MOCK_POKEMONS[0], MOCK_ATTACKS);
  expect(Engine.payerCards.length > 0).toBe(true);
  Engine.endGame();
});

it('Should not add a player card to the player desk in no attacks', () => {
  Engine.addPlayerCard(MOCK_POKEMONS[0], null);
  expect(Engine.payerCards.length > 0).toBe(false);
  Engine.endGame();
});

it('Should remove a card from the player deck', () => {
  Engine.addPlayerCard(MOCK_POKEMONS[0], MOCK_ATTACKS);
  Engine.removePlayerCard('UG9rZW1vbjowMDE=');
  expect(Engine.payerCards.length === 0).toBe(true);
  Engine.endGame();
});

it('Should add a new bot card to deck', () => {
  Engine.addBotCard(MOCK_POKEMONS[0]);
  expect(Engine.botCards.length > 0).toBe(true);
  Engine.endGame();
})

it('Should not add a new bot card to deck if is the same card', () => {
  Engine.addBotCard(MOCK_POKEMONS[0]);
  Engine.addBotCard(MOCK_POKEMONS[0]);
  expect(Engine.botCards.length === 1).toBe(true);
  Engine.endGame();
})

it('Should return the correct card for player by id', () => {
  Engine.addPlayerCard(MOCK_POKEMONS[0], MOCK_ATTACKS);
  const card = Engine.getPlayerCardById('UG9rZW1vbjowMDE=');
  expect(card.id).toEqual('UG9rZW1vbjowMDE=');
  Engine.endGame();
})

it('Should return a card for bot from player choosed card', () => {
  Engine.addPlayerCard(MOCK_POKEMONS[0], MOCK_ATTACKS);
  const card = Engine.getPlayerCardById('UG9rZW1vbjowMDE=');
  const botCard = Engine.getBotCard(card);
  expect(botCard.id).not.toEqual(null);
  Engine.endGame();
})