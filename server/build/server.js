/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../client/src/App.css":
/*!*****************************!*\
  !*** ../client/src/App.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../client/src/App.js":
/*!****************************!*\
  !*** ../client/src/App.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.css */ "../client/src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Header */ "../client/src/components/Header/index.js");
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Search */ "../client/src/components/Search/index.js");
/* harmony import */ var _components_Pokedex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Pokedex */ "../client/src/components/Pokedex/index.js");
/* harmony import */ var _components_PokemonModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/PokemonModal */ "../client/src/components/PokemonModal/index.js");
/* harmony import */ var _components_Board__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Board */ "../client/src/components/Board/index.js");








var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Search__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Pokedex__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PokemonModal__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Board__WEBPACK_IMPORTED_MODULE_6__["default"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "../client/src/Engine/Card.js":
/*!************************************!*\
  !*** ../client/src/Engine/Card.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Card = /*#__PURE__*/function () {
  function Card(data, attacks) {
    _classCallCheck(this, Card);

    this.id = data.id;
    this.name = data.name;
    this.HP = data.maxHP;
    this.maxCP = data.maxCP;
    this.image = data.image;
    this.attacks = {
      fast: attacks === null || attacks === void 0 ? void 0 : attacks.fast,
      special: attacks === null || attacks === void 0 ? void 0 : attacks.special
    };
  }

  _createClass(Card, [{
    key: "isDead",
    get: function get() {
      return this.HP <= 0;
    }
  }]);

  return Card;
}();



/***/ }),

/***/ "../client/src/Engine/index.js":
/*!*************************************!*\
  !*** ../client/src/Engine/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card */ "../client/src/Engine/Card.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var minThreshold = 0.8;
var maxThreshold = 1.2;

var Engine = /*#__PURE__*/function () {
  function Engine() {
    _classCallCheck(this, Engine);

    _defineProperty(this, "botDraftCards", []);

    _defineProperty(this, "winner", null);

    _defineProperty(this, "payerCards", []);

    _defineProperty(this, "botCards", []);

    _defineProperty(this, "_gameStarted", false);

    _defineProperty(this, "_currentTurn", false);

    _defineProperty(this, "_gameFinished", false);

    _defineProperty(this, "__cloneBotCards", []);

    if (!Engine.instance) {
      Engine.instance = this;
    }

    return Engine.instance;
  }
  /**
   * Returns if game is started state
   */


  _createClass(Engine, [{
    key: "startGame",

    /**
     * Start the game
     */
    value: function startGame() {
      this.gameStarted = true;

      if (this.gameStarted) {
        this.__clonePlayerCards = _toConsumableArray(this.payerCards);
      }
    }
    /**
     * End the game
     */

  }, {
    key: "endGame",
    value: function endGame() {
      this._resetValues();

      this.gameStarted = false;
    }
    /**
     * Restart the current game
     */

  }, {
    key: "resetGame",
    value: function resetGame() {
      this._resetValues();

      this.payerCards = _objectSpread({}, this.__clonePlayerCards);
      this.botCards = _objectSpread({}, this.__cloneBotCards);
    }
  }, {
    key: "_resetValues",
    value: function _resetValues() {
      this.gameFinished = false;
      this.winner = null;
      this.payerCards = [];
    }
    /**
     * Add the full list of available cards
     * In this case every single card has a
     * simpler api use other methods to get
     * the full data of card
     * @param {[object]} cards 
     */

  }, {
    key: "addCards",
    value: function addCards(cards) {
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

  }, {
    key: "addPlayerCard",
    value: function addPlayerCard(card, attacks) {
      if (!attacks) return false;

      if (card && attacks.fast && attacks.special) {
        var playerCard = new _Card__WEBPACK_IMPORTED_MODULE_0__["default"](card, attacks);
        this.payerCards.push(playerCard);
      }
    }
    /**
     * Removes the card from the players deck
     * @param {number} cardId 
     */

  }, {
    key: "removePlayerCard",
    value: function removePlayerCard(cardId) {
      var index = this.payerCards.findIndex(function (c) {
        return c.id === cardId;
      });
      if (index !== -1) this.payerCards.splice(index, 1);
    }
    /**
     * Adds to the bots deck a new card
     * @param {object} card 
     */

  }, {
    key: "addBotCard",
    value: function addBotCard(card) {
      if (!card) return false;
      var index = this.botCards.findIndex(function (c) {
        return c.id === card.id;
      });
      if (index !== -1) return this.botCards[index];

      var attacks = this._getBotAttacks(card);

      var botCard = new _Card__WEBPACK_IMPORTED_MODULE_0__["default"](card, attacks);
      this.botCards.push(botCard);

      this.__cloneBotCards.push(botCard);
    }
    /**
     * Returns best attacks from card api
     * @param {object} card 
     */

  }, {
    key: "_getBotAttacks",
    value: function _getBotAttacks(card) {
      var fast = this._getBestAttck(card.attacks.fast);

      var special = this._getBestAttck(card.attacks.special);

      return {
        fast: fast,
        special: special
      };
    }
    /**
     * Returns best attack from list
     * @param {array} attacks 
     */

  }, {
    key: "_getBestAttck",
    value: function _getBestAttck(attacks) {
      var bestAttack = {
        damage: 0
      };

      var _iterator = _createForOfIteratorHelper(attacks),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var attack = _step.value;

          if (attack.damage > bestAttack.damage) {
            bestAttack = attack;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return bestAttack;
    }
    /**
     * Returns the updated card data of 
     * the player by id
     * @param {number} id 
     */

  }, {
    key: "getPlayerCardById",
    value: function getPlayerCardById(id) {
      if (this.gameFinished || !id) return null;
      this.gameFinished = this._checkGameFinished(this.payerCards);
      if (this.gameFinished) this.winner = 'Computer';
      return this.payerCards.find(function (c) {
        return c.id === id;
      });
    }
    /**
     * Returns the best bot card from player pick
     * @param {object} playerCard 
     */

  }, {
    key: "getBotCard",
    value: function getBotCard(playerCard) {
      if (this.gameFinished) return null;
      this.gameFinished = this._checkGameFinished(this.botCards);
      if (this.gameFinished) this.winner = 'Player';
      if (!playerCard) return null;
      var hasCards = this.botCards.find(function (c) {
        return c.isDead !== true;
      });
      var cardToPlay = this.botCards.find(function (c) {
        return c.maxCP >= playerCard.maxCP && !c.isDead;
      });

      if (!cardToPlay && hasCards) {
        cardToPlay = this.botCards.find(function (c) {
          return !c.isDead;
        });
      }

      return cardToPlay;
    }
    /**
     * Does damage to the defending card
     * @param {string} attckType fast | special
     * @param {object} attackingCard 
     * @param {object} defendingCard 
     */

  }, {
    key: "doAttack",
    value: function doAttack(attckType, attackingCard, defendingCard) {
      defendingCard.HP -= attckType === 'fast' ? attackingCard.attacks.fast.damage : attackingCard.attacks.special.damage;
    }
  }, {
    key: "botDoAttack",
    value: function botDoAttack(attackingCard, defendingCard) {
      var botAttacks = attackingCard.attacks;
      var attackType = botAttacks.fast > botAttacks.special ? botAttacks.fast : botAttacks.special;
      defendingCard.HP -= attackType.damage;
    }
    /**
     * Makes a check if the game is finished
     * @param {object} cards 
     */

  }, {
    key: "_checkGameFinished",
    value: function _checkGameFinished(cards) {
      if (cards.length === 0) return false;
      return !cards.find(function (card) {
        return card.HP > 0;
      });
    }
    /**
     * Create a draft deck for the bot so that
     * it can be used latter for loading the 
     * bot real card
     */

  }, {
    key: "_createDraftBotDeck",
    value: function _createDraftBotDeck() {
      var _this = this;

      var draftBots = [];

      var findFn = function findFn(currentCard, playerCard) {
        var a = !_this.payerCards.find(function (b) {
          return b.id === currentCard.id;
        });
        var b = !draftBots.find(function (b) {
          return b.id === currentCard.id;
        });
        var c = currentCard.maxCP > playerCard.maxCP * minThreshold;
        var d = currentCard.maxCP < playerCard.maxCP * maxThreshold;
        return a && b && c && d;
      };

      var _iterator2 = _createForOfIteratorHelper(this.payerCards),
          _step2;

      try {
        var _loop = function _loop() {
          var card = _step2.value;

          var bot = _this._allCards.find(function (c) {
            return findFn(c, card);
          });

          if (bot) draftBots.push(bot);
        };

        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return draftBots;
    }
  }, {
    key: "gameStarted",
    get: function get() {
      return this._gameStarted;
    }
    /**
     * Sets the gameStarted value based
     * on conditions if one not true
     * then the game will not be started
     */
    ,
    set: function set(start) {
      if (start) {
        var _this$_allCards, _this$payerCards, _this$botDraftCards;

        this.botDraftCards = this._createDraftBotDeck();
        this._gameStarted = !this.gameStarted && ((_this$_allCards = this._allCards) === null || _this$_allCards === void 0 ? void 0 : _this$_allCards.length) > 0 && ((_this$payerCards = this.payerCards) === null || _this$payerCards === void 0 ? void 0 : _this$payerCards.length) > 0 && ((_this$botDraftCards = this.botDraftCards) === null || _this$botDraftCards === void 0 ? void 0 : _this$botDraftCards.length) > 0;
      } else {
        this._gameStarted = false;
        this.botDraftCards = [];
      }
    }
  }, {
    key: "gameFinished",
    get: function get() {
      return this._gameFinished;
    },
    set: function set(value) {
      this._gameFinished = value;
    }
  }]);

  return Engine;
}();

var engine = new Engine();
/* harmony default export */ __webpack_exports__["default"] = (engine);

/***/ }),

/***/ "../client/src/actions/index.js":
/*!**************************************!*\
  !*** ../client/src/actions/index.js ***!
  \**************************************/
/*! exports provided: searchKeyDown, selectPokemonClick, addPokemonToList, removePokemonFromList, restPokemonList, doStartGame, doEndGame, addBots, removeBots, playerPickedCard, playerTrun, askedToEndGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchKeyDown", function() { return searchKeyDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPokemonClick", function() { return selectPokemonClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPokemonToList", function() { return addPokemonToList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removePokemonFromList", function() { return removePokemonFromList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restPokemonList", function() { return restPokemonList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doStartGame", function() { return doStartGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doEndGame", function() { return doEndGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addBots", function() { return addBots; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeBots", function() { return removeBots; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerPickedCard", function() { return playerPickedCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerTrun", function() { return playerTrun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "askedToEndGame", function() { return askedToEndGame; });
var searchKeyDown = function searchKeyDown(value) {
  return {
    type: 'SEARCHING',
    payload: value
  };
};
var selectPokemonClick = function selectPokemonClick(value) {
  return {
    type: 'SELECTING',
    payload: value
  };
};
var addPokemonToList = function addPokemonToList(value) {
  return {
    type: 'ADDING',
    payload: value
  };
};
var removePokemonFromList = function removePokemonFromList(value) {
  return {
    type: 'REMOVING',
    payload: value
  };
};
var restPokemonList = function restPokemonList() {
  return {
    type: 'RESETECARDS'
  };
};
var doStartGame = function doStartGame() {
  return {
    type: 'STARTGAME'
  };
};
var doEndGame = function doEndGame() {
  return {
    type: 'ENDGAME'
  };
};
var addBots = function addBots(value) {
  return {
    type: 'ADDINGBOTS',
    payload: value
  };
};
var removeBots = function removeBots() {
  return {
    type: 'REMOVEINGBOTS'
  };
};
var playerPickedCard = function playerPickedCard(value) {
  return {
    type: 'PLAYERPICK',
    payload: value
  };
};
var playerTrun = function playerTrun(value) {
  return {
    type: 'PLAYERTURN',
    payload: value
  };
};
var askedToEndGame = function askedToEndGame(value) {
  return {
    type: 'ASKENDGAME',
    payload: value
  };
};

/***/ }),

/***/ "../client/src/components/Board/Board.css":
/*!************************************************!*\
  !*** ../client/src/components/Board/Board.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../client/src/components/Board/Board.js":
/*!***********************************************!*\
  !*** ../client/src/components/Board/Board.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Board_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board.css */ "../client/src/components/Board/Board.css");
/* harmony import */ var _Board_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Board_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PlayerDeck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PlayerDeck */ "../client/src/components/PlayerDeck/index.js");
/* harmony import */ var _BotDeck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BotDeck */ "../client/src/components/BotDeck/index.js");
/* harmony import */ var _Engine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Engine */ "../client/src/Engine/index.js");
/* harmony import */ var _BoardCard_BoardCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../BoardCard/BoardCard */ "../client/src/components/BoardCard/BoardCard.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Card */ "../client/src/components/Card/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _CloseGameModal_CloseGameModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../CloseGameModal/CloseGameModal */ "../client/src/components/CloseGameModal/CloseGameModal.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../actions */ "../client/src/actions/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var Board = function Board() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpened = _useState2[0],
      setIsOpened = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showCloseGameModal = _useState4[0],
      setShowCloseGameModal = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState6 = _slicedToArray(_useState5, 2),
      isPlayersCurrentTurn = _useState6[0],
      setIsPlayersCurrentTurn = _useState6[1];

  var gameStarted = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.gameStarted;
  });
  var playerAction = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.playerAction;
  });
  var dispatchEvent = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();
  var playerCard = _Engine__WEBPACK_IMPORTED_MODULE_4__["default"].getPlayerCardById(playerAction.pickedCardId);
  var botCard = _Engine__WEBPACK_IMPORTED_MODULE_4__["default"].getBotCard(playerCard);

  if (gameStarted && !_Engine__WEBPACK_IMPORTED_MODULE_4__["default"].gameStarted) {
    _Engine__WEBPACK_IMPORTED_MODULE_4__["default"].startGame();
  }

  if (!gameStarted && _Engine__WEBPACK_IMPORTED_MODULE_4__["default"].gameStarted) {
    _Engine__WEBPACK_IMPORTED_MODULE_4__["default"].endGame();
    setTimeout(function () {
      dispatchEvent(Object(_actions__WEBPACK_IMPORTED_MODULE_9__["restPokemonList"])());
    }, 1000);
  }

  if (_Engine__WEBPACK_IMPORTED_MODULE_4__["default"].gameFinished && !showCloseGameModal && _Engine__WEBPACK_IMPORTED_MODULE_4__["default"].gameStarted) {
    setShowCloseGameModal(true);
  }

  var toggleBoard = function toggleBoard() {
    setIsOpened(!isOpened);
  };

  var hideCloseGameModal = function hideCloseGameModal() {
    setShowCloseGameModal(false);
  };

  var boardClassList = ['board'];
  if (gameStarted && !isOpened) toggleBoard();
  if (!gameStarted && isOpened) toggleBoard();
  if (isOpened) boardClassList.push('board--open');

  if (!isPlayersCurrentTurn) {// bot attacks
  }

  var playerFastAttack = function playerFastAttack() {
    // if (!isPlayersCurrentTurn) return false;
    concludeAttack('fast');
  };

  var playerSpecialAttack = function playerSpecialAttack() {
    // if (!isPlayersCurrentTurn) return false;
    concludeAttack('special');
  };

  var concludeAttack = function concludeAttack(type) {
    if (playerCard.isDead) return false;
    _Engine__WEBPACK_IMPORTED_MODULE_4__["default"].doAttack(type, playerCard, botCard);
    _Engine__WEBPACK_IMPORTED_MODULE_4__["default"].botDoAttack(botCard, playerCard);
    setIsPlayersCurrentTurn(function (state) {
      return !state;
    });
  };

  if (playerAction.playerTurn) {
    if (playerAction.pickedCardId) _Engine__WEBPACK_IMPORTED_MODULE_4__["default"].getBotCard(playerCard);
  } else {}

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BotDeck__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: boardClassList.join(' ')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BoardCard_BoardCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    card: botCard,
    addClass: ['board__card--bot']
  }, botCard && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
    card: botCard
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BoardCard_BoardCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    card: playerCard,
    addClass: ['board__card--player'],
    hasLockButton: true,
    attack1Click: playerFastAttack,
    attack2Click: playerSpecialAttack
  }, playerCard && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
    card: playerCard
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PlayerDeck__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CloseGameModal_CloseGameModal__WEBPACK_IMPORTED_MODULE_8__["default"], {
    show: showCloseGameModal,
    onClose: hideCloseGameModal
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Board);

/***/ }),

/***/ "../client/src/components/Board/index.js":
/*!***********************************************!*\
  !*** ../client/src/components/Board/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board */ "../client/src/components/Board/Board.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Board__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../client/src/components/BoardCard/BoardCard.css":
/*!********************************************************!*\
  !*** ../client/src/components/BoardCard/BoardCard.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../client/src/components/BoardCard/BoardCard.js":
/*!*******************************************************!*\
  !*** ../client/src/components/BoardCard/BoardCard.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BoardCard_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BoardCard.css */ "../client/src/components/BoardCard/BoardCard.css");
/* harmony import */ var _BoardCard_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_BoardCard_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Button */ "../client/src/components/Button/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






var BoardCard = function BoardCard(_ref) {
  var card = _ref.card,
      children = _ref.children,
      addClass = _ref.addClass,
      attack1Click = _ref.attack1Click,
      attack2Click = _ref.attack2Click;

  var _ref2 = card || {
    name: null,
    attacks: {
      fast: null,
      special: null
    },
    HP: null
  },
      name = _ref2.name,
      attacks = _ref2.attacks,
      HP = _ref2.HP;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: ['board__card'].concat(_toConsumableArray(addClass)).join(' ')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    addClass: ['board__card__attack'],
    onClick: attack1Click
  }, attacks.fast ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "name"
  }, attacks.fast.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "damage"
  }, attacks.fast.damage)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "text"
  }, "Attack fast")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "board__card__holder"
  }, children, HP !== null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "board__card__health"
  }, "Health: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "text"
  }, HP))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    addClass: ['board__card__attack'],
    onClick: attack2Click
  }, attacks.special ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "name"
  }, attacks.special.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "damage"
  }, attacks.special.damage)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "text"
  }, "Attack special")), name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "board__card__name"
  }, name));
};

BoardCard.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,
  addClass: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  attack1Click: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  attack2Click: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  card: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
BoardCard.defaultProps = {
  addClass: [],
  attack1Click: undefined,
  attack2Click: undefined,
  card: null
};
/* harmony default export */ __webpack_exports__["default"] = (BoardCard);

/***/ }),

/***/ "../client/src/components/BotDeck/BotDeck.css":
/*!****************************************************!*\
  !*** ../client/src/components/BotDeck/BotDeck.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../client/src/components/BotDeck/BotDeck.js":
/*!***************************************************!*\
  !*** ../client/src/components/BotDeck/BotDeck.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BotDeck_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BotDeck.css */ "../client/src/components/BotDeck/BotDeck.css");
/* harmony import */ var _BotDeck_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_BotDeck_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Deck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Deck */ "../client/src/components/Deck/index.js");
/* harmony import */ var _GetCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../GetCard */ "../client/src/components/GetCard/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Engine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Engine */ "../client/src/Engine/index.js");







var BotDeck = function BotDeck() {
  var gameStarted = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.gameStarted;
  });
  var botCards = gameStarted ? _Engine__WEBPACK_IMPORTED_MODULE_5__["default"].botDraftCards : [];
  var classList = ['deck__bot', 'card__close--hide'];
  if (botCards.length) classList.push('deck--open');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Deck__WEBPACK_IMPORTED_MODULE_2__["default"], {
    addClass: classList
  }, botCards && botCards.length > 0 && botCards.map(function (c) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_GetCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: c.id,
      id: c.id,
      name: c.name
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BotDeck);

/***/ }),

/***/ "../client/src/components/BotDeck/index.js":
/*!*************************************************!*\
  !*** ../client/src/components/BotDeck/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BotDeck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BotDeck */ "../client/src/components/BotDeck/BotDeck.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _BotDeck__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../client/src/components/Button/Button.css":
/*!**************************************************!*\
  !*** ../client/src/components/Button/Button.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../client/src/components/Button/Button.js":
/*!*************************************************!*\
  !*** ../client/src/components/Button/Button.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button.css */ "../client/src/components/Button/Button.css");
/* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Button_css__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var Button = function Button(_ref) {
  var children = _ref.children,
      addClass = _ref.addClass,
      porps = _objectWithoutProperties(_ref, ["children", "addClass"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", _extends({
    className: ['btn'].concat(_toConsumableArray(addClass)).join(' ')
  }, porps), children);
};

Button.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  addClass: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
Button.defaultProps = {
  addClass: [],
  onClick: undefined
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "../client/src/components/Button/index.js":
/*!************************************************!*\
  !*** ../client/src/components/Button/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "../client/src/components/Button/Button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Button__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../client/src/components/Card/Card.css":
/*!**********************************************!*\
  !*** ../client/src/components/Card/Card.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../client/src/components/Card/Card.js":
/*!*********************************************!*\
  !*** ../client/src/components/Card/Card.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Card_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card.css */ "../client/src/components/Card/Card.css");
/* harmony import */ var _Card_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Card_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Image */ "../client/src/components/Image/index.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button */ "../client/src/components/Button/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }







var Card = function Card(_ref) {
  var card = _ref.card,
      addClass = _ref.addClass,
      onCloseClick = _ref.onCloseClick,
      onClick = _ref.onClick;
  var image = card.image,
      name = card.name,
      HP = card.HP;

  var classList = _toConsumableArray(addClass);

  if (HP < 0) classList.push('dead');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: ['card', classList].join(' '),
    onClick: onClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_3__["default"], {
    addClass: ['card__img'],
    src: image,
    alt: name,
    width: 20,
    height: 20
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    addClass: ['card__close'],
    onClick: onCloseClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "ico"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "is-vHidden"
  }, "Remove")));
};

Card.propTypes = {
  card: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  addClass: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
Card.defaultProps = {
  addClass: [],
  onClick: null
};
/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "../client/src/components/Card/index.js":
/*!**********************************************!*\
  !*** ../client/src/components/Card/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card */ "../client/src/components/Card/Card.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Card__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../client/src/components/CloseGameModal/CloseGameModal.js":
/*!*****************************************************************!*\
  !*** ../client/src/components/CloseGameModal/CloseGameModal.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CloseGameModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CloseGameModal */ "../client/src/components/CloseGameModal/CloseGameModal.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Engine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Engine */ "../client/src/Engine/index.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button */ "../client/src/components/Button/index.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Modal */ "../client/src/components/Modal/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions */ "../client/src/actions/index.js");









var CloseGameModal = function CloseGameModal(_ref) {
  var show = _ref.show,
      onClose = _ref.onClose;
  var dispatchEvent = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();

  var endGame = function endGame() {
    dispatchEvent(Object(_actions__WEBPACK_IMPORTED_MODULE_7__["removeBots"])());
    dispatchEvent(Object(_actions__WEBPACK_IMPORTED_MODULE_7__["playerPickedCard"])(null));
    dispatchEvent(Object(_actions__WEBPACK_IMPORTED_MODULE_7__["doEndGame"])());
    onClose();
  };

  var resetGame = function resetGame() {// Engine.reset();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    show: show,
    addClass: ['modal__start', _Engine__WEBPACK_IMPORTED_MODULE_3__["default"].gameFinished ? 'winner' : ''],
    onClose: onClose
  }, _Engine__WEBPACK_IMPORTED_MODULE_3__["default"].gameFinished && show && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "winner"
  }, "And the winner is ", "".concat(_Engine__WEBPACK_IMPORTED_MODULE_3__["default"].winner)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    addClass: ['modal__start__restart'],
    onClick: resetGame
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "text"
  }, "Restart Game")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    addClass: ['modal__start__close'],
    onClick: endGame
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "text"
  }, "End Game")));
};

_Button__WEBPACK_IMPORTED_MODULE_4__["default"].propTypes = {
  show: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
_Button__WEBPACK_IMPORTED_MODULE_4__["default"].defaultProps = {
  onClose: undefined
};
/* harmony default export */ __webpack_exports__["default"] = (CloseGameModal);

/***/ }),

/***/ "../client/src/components/Deck/Deck.css":
/*!**********************************************!*\
  !*** ../client/src/components/Deck/Deck.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../client/src/components/Deck/Deck.js":
/*!*********************************************!*\
  !*** ../client/src/components/Deck/Deck.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Deck_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Deck.css */ "../client/src/components/Deck/Deck.css");
/* harmony import */ var _Deck_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Deck_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Card */ "../client/src/components/Card/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions */ "../client/src/actions/index.js");
/* harmony import */ var _Engine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Engine */ "../client/src/Engine/index.js");
var _this = undefined;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }









var Deck = function Deck(_ref) {
  var cards = _ref.cards,
      children = _ref.children,
      addClass = _ref.addClass,
      onCardClick = _ref.onCardClick;
  var dispatchRemove = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var removeCard = function removeCard(id) {
    _Engine__WEBPACK_IMPORTED_MODULE_6__["default"].removePlayerCard(id);
    dispatchRemove(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["removePokemonFromList"])({
      id: id
    }));
  };

  var clickCard = function clickCard(id) {
    onCardClick(id);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: ['deck'].concat(_toConsumableArray(addClass)).join(' ')
  }, cards && cards.length > 0 && cards.map(function (card) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: card.id,
      card: card,
      onCloseClick: function onCloseClick() {
        removeCard(card.id);
      },
      onClick: clickCard.bind(_this, card.id)
    });
  }), children);
};

Deck.propTypes = {
  cards: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  addClass: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
};
Deck.defaultProps = {
  addClass: []
};
/* harmony default export */ __webpack_exports__["default"] = (Deck);

/***/ }),

/***/ "../client/src/components/Deck/index.js":
/*!**********************************************!*\
  !*** ../client/src/components/Deck/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Deck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Deck */ "../client/src/components/Deck/Deck.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Deck__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../client/src/components/GetCard/GetCard.js":
/*!***************************************************!*\
  !*** ../client/src/components/GetCard/GetCard.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Card */ "../client/src/components/Card/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../queries */ "../client/src/queries/index.js");
/* harmony import */ var _Engine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Engine */ "../client/src/Engine/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var GetCard = function GetCard(_ref) {
  var id = _ref.id,
      name = _ref.name;

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(Object(_queries__WEBPACK_IMPORTED_MODULE_3__["GET_POKEMON"])(id, name)),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "...Loading");
  if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Something went wrong");

  var botCard = _objectSpread({}, data.pokemon);

  _Engine__WEBPACK_IMPORTED_MODULE_4__["default"].addBotCard(botCard);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: botCard.id,
    card: botCard
  });
};

/* harmony default export */ __webpack_exports__["default"] = (GetCard);

/***/ }),

/***/ "../client/src/components/GetCard/index.js":
/*!*************************************************!*\
  !*** ../client/src/components/GetCard/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GetCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GetCard */ "../client/src/components/GetCard/GetCard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _GetCard__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../client/src/components/Header/Header.css":
/*!**************************************************!*\
  !*** ../client/src/components/Header/Header.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../client/src/components/Header/Header.js":
/*!*************************************************!*\
  !*** ../client/src/components/Header/Header.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.css */ "../client/src/components/Header/Header.css");
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Header_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Image */ "../client/src/components/Image/index.js");
/* harmony import */ var _StartButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../StartButton */ "../client/src/components/StartButton/index.js");
/* harmony import */ var _static_Pokemon_Logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static/Pokemon-Logo.png */ "../client/src/static/Pokemon-Logo.png");
/* harmony import */ var _static_Pokemon_Logo_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_Pokemon_Logo_png__WEBPACK_IMPORTED_MODULE_4__);






var Header = function Header() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_2__["default"], {
    addClass: ['header__logo'],
    src: _static_Pokemon_Logo_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "pokemon logo",
    width: 100,
    height: 50
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_StartButton__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "../client/src/components/Header/index.js":
/*!************************************************!*\
  !*** ../client/src/components/Header/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "../client/src/components/Header/Header.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Header__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../client/src/components/Image/Image.css":
/*!************************************************!*\
  !*** ../client/src/components/Image/Image.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../client/src/components/Image/Image.js":
/*!***********************************************!*\
  !*** ../client/src/components/Image/Image.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Image_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Image.css */ "../client/src/components/Image/Image.css");
/* harmony import */ var _Image_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Image_css__WEBPACK_IMPORTED_MODULE_2__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var Image = function Image(_ref) {
  var src = _ref.src,
      alt = _ref.alt,
      width = _ref.width,
      height = _ref.height,
      addClass = _ref.addClass;
  var aspectRatio = "".concat(height * 100 / width, "%");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: ['img'].concat(_toConsumableArray(addClass)).join(' '),
    style: {
      paddingBottom: aspectRatio
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "img__src",
    src: src,
    alt: alt,
    width: width,
    height: height
  }));
};

Image.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
  addClass: []
};
Image.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  addClass: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "../client/src/components/Image/index.js":
/*!***********************************************!*\
  !*** ../client/src/components/Image/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Image */ "../client/src/components/Image/Image.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Image__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../client/src/components/Modal/Modal.css":
/*!************************************************!*\
  !*** ../client/src/components/Modal/Modal.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../client/src/components/Modal/Modal.js":
/*!***********************************************!*\
  !*** ../client/src/components/Modal/Modal.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button */ "../client/src/components/Button/index.js");
/* harmony import */ var _Modal_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modal.css */ "../client/src/components/Modal/Modal.css");
/* harmony import */ var _Modal_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Modal_css__WEBPACK_IMPORTED_MODULE_3__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var Modal = function Modal(_ref) {
  var show = _ref.show,
      children = _ref.children,
      addClass = _ref.addClass,
      onClose = _ref.onClose,
      porps = _objectWithoutProperties(_ref, ["show", "children", "addClass", "onClose"]);

  // const document = document || {};
  var classList = ['modal'];

  if (show) {
    // document.body.classList.add('scroll-off');
    classList.push('modal--open');
  } else {// document.body.classList.remove('scroll-off');
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
    className: [].concat(classList, _toConsumableArray(addClass)).join(' ')
  }, porps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal__content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    addClass: ['modal__btn'],
    onClick: onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "ico"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text is-vHidden"
  }, "Close")), children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal__overlay",
    onClick: onClose
  }));
};

Modal.propTypes = {
  show: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  addClass: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
Modal.defaultProps = {
  show: false,
  addClass: []
};
/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "../client/src/components/Modal/index.js":
/*!***********************************************!*\
  !*** ../client/src/components/Modal/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal */ "../client/src/components/Modal/Modal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Modal__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../client/src/components/PlayerDeck/PlayerDeck.css":
/*!**********************************************************!*\
  !*** ../client/src/components/PlayerDeck/PlayerDeck.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../client/src/components/PlayerDeck/PlayerDeck.js":
/*!*********************************************************!*\
  !*** ../client/src/components/PlayerDeck/PlayerDeck.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PlayerDeck_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlayerDeck.css */ "../client/src/components/PlayerDeck/PlayerDeck.css");
/* harmony import */ var _PlayerDeck_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_PlayerDeck_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Deck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Deck */ "../client/src/components/Deck/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions */ "../client/src/actions/index.js");






var PlayerDeck = function PlayerDeck() {
  var cards = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.pokemonList;
  });
  var gameStarted = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.gameStarted;
  });
  var playerAction = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.playerAction;
  });
  var dispatchEvent = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var classList = ['deck__player'];
  if (cards.length) classList.push('deck--open');
  if (gameStarted) classList.push('card__close--hide');

  var cardClicked = function cardClicked(id) {
    if (gameStarted && playerAction.playerTurn) {
      dispatchEvent(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["playerPickedCard"])(id));
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Deck__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cards: cards,
    addClass: classList,
    onCardClick: cardClicked
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PlayerDeck);

/***/ }),

/***/ "../client/src/components/PlayerDeck/index.js":
/*!****************************************************!*\
  !*** ../client/src/components/PlayerDeck/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PlayerDeck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlayerDeck */ "../client/src/components/PlayerDeck/PlayerDeck.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _PlayerDeck__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../client/src/components/Pokedex/Pokedex.css":
/*!****************************************************!*\
  !*** ../client/src/components/Pokedex/Pokedex.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../client/src/components/Pokedex/Pokedex.js":
/*!***************************************************!*\
  !*** ../client/src/components/Pokedex/Pokedex.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pokedex_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pokedex.css */ "../client/src/components/Pokedex/Pokedex.css");
/* harmony import */ var _Pokedex_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Pokedex_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button */ "../client/src/components/Button/index.js");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Image */ "../client/src/components/Image/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions */ "../client/src/actions/index.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../queries */ "../client/src/queries/index.js");
/* harmony import */ var _Engine__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Engine */ "../client/src/Engine/index.js");










var Pokedex = function Pokedex() {
  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__["useQuery"])(Object(_queries__WEBPACK_IMPORTED_MODULE_7__["ALL_POKEMONS"])(20)),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  var dispatchClick = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();

  var selectSearchProduct = function selectSearchProduct(state) {
    return state.textSearch;
  };

  var textSearch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(selectSearchProduct);
  /** START RENDERING **/

  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Loading...");
  if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Whoops... somthing went wrong!");
  _Engine__WEBPACK_IMPORTED_MODULE_8__["default"].addCards(data.pokemons);
  var filterMap = {
    All: function All() {
      return true;
    },
    Filtered: function Filtered(pokemon) {
      return pokemon.name.toLocaleLowerCase().includes(textSearch);
    }
  };
  var task = textSearch ? 'Filtered' : 'All';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "pokemons"
  }, data.pokemons.filter(filterMap[task]).map(function (p) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "pokemon",
      key: p.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      addClass: ['pokemon__btn'],
      onClick: function onClick() {
        var value = {
          id: p.id,
          name: p.name,
          image: p.image
        };
        dispatchClick(Object(_actions__WEBPACK_IMPORTED_MODULE_6__["selectPokemonClick"])(value));
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_3__["default"], {
      addClass: ['pokemon__img'],
      src: p.image,
      alt: p.name,
      width: 170,
      height: 170
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "pokemon__name"
    }, p.name));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Pokedex);

/***/ }),

/***/ "../client/src/components/Pokedex/index.js":
/*!*************************************************!*\
  !*** ../client/src/components/Pokedex/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pokedex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pokedex */ "../client/src/components/Pokedex/Pokedex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Pokedex__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../client/src/components/Pokemon/Pokemon.css":
/*!****************************************************!*\
  !*** ../client/src/components/Pokemon/Pokemon.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../client/src/components/Pokemon/Pokemon.js":
/*!***************************************************!*\
  !*** ../client/src/components/Pokemon/Pokemon.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pokemon_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pokemon.css */ "../client/src/components/Pokemon/Pokemon.css");
/* harmony import */ var _Pokemon_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Pokemon_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Image */ "../client/src/components/Image/index.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button */ "../client/src/components/Button/index.js");
/* harmony import */ var _RadioInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../RadioInput */ "../client/src/components/RadioInput/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../actions */ "../client/src/actions/index.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../queries */ "../client/src/queries/index.js");
/* harmony import */ var _Engine__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Engine */ "../client/src/Engine/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













var Pokemon = function Pokemon(pokemonBase) {
  var _attacks$fast, _attacks$special;

  var _pokemonBase$pokemonB = pokemonBase.pokemonBase,
      id = _pokemonBase$pokemonB.id,
      name = _pokemonBase$pokemonB.name,
      image = _pokemonBase$pokemonB.image;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      fastAttack = _useState2[0],
      setFastAttack = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      specialAttack = _useState4[0],
      setSpecialAttack = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      warningSlection = _useState6[0],
      setWarningSlection = _useState6[1];

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__["useQuery"])(Object(_queries__WEBPACK_IMPORTED_MODULE_9__["GET_POKEMON"])(id, name)),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  var mode = loading ? 'loading' : '';
  var fastGrpId = 'fast-grp';
  var specialGrpId = 'special-grp';
  var dispatchEvent = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();
  var pokemonData = {
    id: id,
    name: name,
    image: image
  };
  if (data) pokemonData = _objectSpread({}, data.pokemon);
  if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Whoops... somthing went wrong!");
  var _pokemonData = pokemonData,
      weight = _pokemonData.weight,
      classification = _pokemonData.classification,
      types = _pokemonData.types,
      height = _pokemonData.height,
      attacks = _pokemonData.attacks;

  var selectPokemon = function selectPokemon() {
    if (fastAttack && specialAttack) {
      var fast = pokemonData.attacks.fast.find(function (e) {
        return e.name === fastAttack;
      });
      var special = pokemonData.attacks.special.find(function (e) {
        return e.name === specialAttack;
      });
      _Engine__WEBPACK_IMPORTED_MODULE_10__["default"].addPlayerCard(pokemonData, {
        fast: fast,
        special: special
      });
      dispatchEvent(Object(_actions__WEBPACK_IMPORTED_MODULE_8__["addPokemonToList"])(pokemonData));
      dispatchEvent(Object(_actions__WEBPACK_IMPORTED_MODULE_8__["selectPokemonClick"])(null));
      return true;
    }

    setWarningSlection(true);
    setTimeout(function () {
      setWarningSlection(false);
    }, 1500);
  };

  var attackChanged = function attackChanged(attackName, attackType) {
    if (attackType === 'fast') {
      return setFastAttack(attackName);
    }

    return setSpecialAttack(attackName);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
    className: "pk"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: "pk__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "pk__name"
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "pk__img"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: image,
    alt: name,
    width: 200,
    height: 200
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    className: "pk__desc"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "pk__desc__header"
  }, "Characteristics"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "pk__content pk__class"
  }, classification), (types === null || types === void 0 ? void 0 : types.length) > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "pk__content pk__types"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Types:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "[", types.join(', '), "]")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: ['pk__content', 'pk__weight', mode].join(' ')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "pk__content__header"
  }, "Weight:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: ['pk__weight--min', mode].join(' ')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "name"
  }, "Min"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "value"
  }, weight === null || weight === void 0 ? void 0 : weight.minimum)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: ['pk__weight--max', mode].join(' ')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "name"
  }, "Max"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "value"
  }, weight === null || weight === void 0 ? void 0 : weight.maximum))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: ['pk__content', 'pk__height', mode].join(' ')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "pk__content__header"
  }, "Height:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: ['pk__height--min', mode].join(' ')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "name"
  }, "Min"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "value"
  }, height === null || height === void 0 ? void 0 : height.minimum)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: ['pk__height--max', mode].join(' ')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "name"
  }, "Max"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "value"
  }, height === null || height === void 0 ? void 0 : height.maximum))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    className: "pk__attack"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("legend", {
    className: "is-vHidden"
  }, "Choose your attack"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "pk__attack__header"
  }, "Attacks:"), (attacks === null || attacks === void 0 ? void 0 : (_attacks$fast = attacks.fast) === null || _attacks$fast === void 0 ? void 0 : _attacks$fast.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
    className: "pk__attack__type"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("legend", {
    className: "is-vHidden"
  }, "Fast attack"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "pk__attack__name"
  }, "Fast"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: fastGrpId,
    className: "pk__attack__group"
  }, attacks.fast.map(function (_ref, i) {
    var name = _ref.name,
        type = _ref.type,
        damage = _ref.damage;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_RadioInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: i,
      id: "".concat(fastGrpId, "-").concat(i),
      value: name,
      group: fastGrpId,
      addClass: ['pk__attack__variant'],
      onChange: function onChange() {
        attackChanged(name, 'fast');
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "name"
    }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "type"
    }, type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "damage"
    }, "Dmg: ", damage));
  }))), (attacks === null || attacks === void 0 ? void 0 : (_attacks$special = attacks.special) === null || _attacks$special === void 0 ? void 0 : _attacks$special.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
    className: "pk__attack__type"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("legend", {
    className: "is-vHidden"
  }, "Special attack"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "pk__attack__name"
  }, "Special"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: specialGrpId,
    className: "pk__attack__group"
  }, attacks.special.map(function (_ref2, i) {
    var name = _ref2.name,
        type = _ref2.type,
        damage = _ref2.damage;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_RadioInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: i,
      id: "".concat(specialGrpId, "-").concat(i),
      value: name,
      group: specialGrpId,
      addClass: ['pk__attack__variant'],
      onChange: function onChange() {
        attackChanged(name, 'special');
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "name"
    }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "type"
    }, type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "damage"
    }, "Dmg: ", damage));
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", {
    className: "pk__footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: ['pk__warning', warningSlection ? 'pk__warning--open' : ''].join(' ')
  }, "Please select one Fast and one Special attacksf"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    addClass: ['pk__select'],
    onClick: selectPokemon
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "text"
  }, "Pick this pokemon"))));
};

Pokemon.propTypes = {
  pokemonBase: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
Pokemon.defaultProps = {
  pokemonBase: null
};
/* harmony default export */ __webpack_exports__["default"] = (Pokemon);

/***/ }),

/***/ "../client/src/components/Pokemon/index.js":
/*!*************************************************!*\
  !*** ../client/src/components/Pokemon/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pokemon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pokemon */ "../client/src/components/Pokemon/Pokemon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Pokemon__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../client/src/components/PokemonModal/PokemonModal.css":
/*!**************************************************************!*\
  !*** ../client/src/components/PokemonModal/PokemonModal.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../client/src/components/PokemonModal/PokemonModal.js":
/*!*************************************************************!*\
  !*** ../client/src/components/PokemonModal/PokemonModal.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Pokemon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Pokemon */ "../client/src/components/Pokemon/index.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Modal */ "../client/src/components/Modal/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions */ "../client/src/actions/index.js");
/* harmony import */ var _PokemonModal_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PokemonModal.css */ "../client/src/components/PokemonModal/PokemonModal.css");
/* harmony import */ var _PokemonModal_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_PokemonModal_css__WEBPACK_IMPORTED_MODULE_5__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var PokemonLayer = function PokemonLayer() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpened = _useState2[0],
      setIsOpened = _useState2[1];

  var pokemonData = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.select;
  });
  var dispatchClick = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var toggleModal = function toggleModal() {
    if (isOpened) dispatchClick(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["selectPokemonClick"])(null));
    setIsOpened(!isOpened);
  };

  if (pokemonData && !isOpened) toggleModal();
  if (!pokemonData && isOpened) toggleModal();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    addClass: ['modal__pokemon'],
    show: isOpened,
    onClose: toggleModal
  }, pokemonData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pokemon__WEBPACK_IMPORTED_MODULE_1__["default"], {
    pokemonBase: pokemonData
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PokemonLayer);

/***/ }),

/***/ "../client/src/components/PokemonModal/index.js":
/*!******************************************************!*\
  !*** ../client/src/components/PokemonModal/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PokemonModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PokemonModal */ "../client/src/components/PokemonModal/PokemonModal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _PokemonModal__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../client/src/components/RadioInput/RadioInput.js":
/*!*********************************************************!*\
  !*** ../client/src/components/RadioInput/RadioInput.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var RadioInput = function RadioInput(_ref) {
  var id = _ref.id,
      value = _ref.value,
      group = _ref.group,
      children = _ref.children,
      addClass = _ref.addClass,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      props = _objectWithoutProperties(_ref, ["id", "value", "group", "children", "addClass", "onChange", "onBlur"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
    className: _toConsumableArray(addClass).join(' ')
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: id,
    className: "is-vHidden",
    type: "radio",
    value: value,
    name: group,
    onChange: onChange,
    onBlur: onBlur
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: id
  }, children));
};

RadioInput.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  group: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  addClass: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
RadioInput.defaultProps = {
  addClass: []
};
/* harmony default export */ __webpack_exports__["default"] = (RadioInput);

/***/ }),

/***/ "../client/src/components/RadioInput/index.js":
/*!****************************************************!*\
  !*** ../client/src/components/RadioInput/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RadioInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RadioInput */ "../client/src/components/RadioInput/RadioInput.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _RadioInput__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../client/src/components/Search/Search.css":
/*!**************************************************!*\
  !*** ../client/src/components/Search/Search.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../client/src/components/Search/Search.js":
/*!*************************************************!*\
  !*** ../client/src/components/Search/Search.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Search_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Search.css */ "../client/src/components/Search/Search.css");
/* harmony import */ var _Search_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Search_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions */ "../client/src/actions/index.js");





var Search = function Search() {
  var dispatchKeyDown = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var searchLabel = 'Search Pokemon';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "search"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "is-vHidden",
    htmlFor: "search-pokemon"
  }, searchLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    id: "search-pokemon",
    className: "search__input",
    type: "text",
    placeholder: searchLabel,
    onKeyUp: function onKeyUp(e) {
      return dispatchKeyDown(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["searchKeyDown"])(e.currentTarget.value));
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "../client/src/components/Search/index.js":
/*!************************************************!*\
  !*** ../client/src/components/Search/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Search */ "../client/src/components/Search/Search.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Search__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../client/src/components/StartButton/StartButton.css":
/*!************************************************************!*\
  !*** ../client/src/components/StartButton/StartButton.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../client/src/components/StartButton/StartButton.js":
/*!***********************************************************!*\
  !*** ../client/src/components/StartButton/StartButton.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StartButton_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StartButton.css */ "../client/src/components/StartButton/StartButton.css");
/* harmony import */ var _StartButton_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_StartButton_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button */ "../client/src/components/Button/index.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Modal */ "../client/src/components/Modal/index.js");
/* harmony import */ var _CloseGameModal_CloseGameModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CloseGameModal/CloseGameModal */ "../client/src/components/CloseGameModal/CloseGameModal.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions */ "../client/src/actions/index.js");
/* harmony import */ var _Engine__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Engine */ "../client/src/Engine/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var Header = function Header() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      showCloseGameModal = _useState2[0],
      setShowCloseGameModal = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showNoCardsWarning = _useState4[0],
      setShowNoCardsWarning = _useState4[1];

  var gameStarted = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.gameStarted;
  });
  var dispatchEvent = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();

  var toggleStartEndGame = function toggleStartEndGame() {
    if (_Engine__WEBPACK_IMPORTED_MODULE_7__["default"].payerCards.length === 0) {
      return showWarningOnScreen();
    }

    if (!gameStarted) {
      return dispatchEvent(Object(_actions__WEBPACK_IMPORTED_MODULE_6__["doStartGame"])());
    } else {
      setShowCloseGameModal(true);
    }
  };

  var closeEndGameModal = function closeEndGameModal() {
    setShowCloseGameModal(false);
  };

  var showWarningOnScreen = function showWarningOnScreen() {
    setShowNoCardsWarning(true);
    setTimeout(function () {
      setShowNoCardsWarning(false);
    }, 1500);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    addClass: ['header__btn'],
    onClick: toggleStartEndGame
  }, showCloseGameModal ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "text"
  }, "End Game") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "text"
  }, "Start Game")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    show: showNoCardsWarning,
    addClass: ['modal__warr']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "modal__warr__text"
  }, "Please select at least one pokemon")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CloseGameModal_CloseGameModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    show: showCloseGameModal,
    onClose: closeEndGameModal
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "../client/src/components/StartButton/index.js":
/*!*****************************************************!*\
  !*** ../client/src/components/StartButton/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StartButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StartButton */ "../client/src/components/StartButton/StartButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _StartButton__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../client/src/queries/index.js":
/*!**************************************!*\
  !*** ../client/src/queries/index.js ***!
  \**************************************/
/*! exports provided: ALL_POKEMONS, GET_POKEMON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_POKEMONS", function() { return ALL_POKEMONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POKEMON", function() { return GET_POKEMON; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    {\n      pokemon(id: \"", "\", name: \"", "\") {\n        id\n        name\n        weight {\n          minimum\n          maximum\n        }\n        height {\n          minimum\n          maximum\n        }\n        classification\n        types\n        resistant\n        attacks {\n          fast {\n            name\n            type\n            damage\n          }\n          special {\n            name\n            type\n            damage\n          }\n        }\n        weaknesses\n        fleeRate\n        maxCP\n        evolutions {\n          id\n          name\n        }\n        evolutionRequirements {\n          amount\n          name\n        }\n        maxHP\n        image\n      }\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  {\n    pokemons(first: ", "){\n      id\n      name\n      types\n      image\n      maxCP\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var ALL_POKEMONS = function ALL_POKEMONS(number) {
  return Object(_apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject(), number);
};
var GET_POKEMON = function GET_POKEMON(id, name) {
  return Object(_apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject2(), id, name);
};

/***/ }),

/***/ "../client/src/reducers/botPokemonList.js":
/*!************************************************!*\
  !*** ../client/src/reducers/botPokemonList.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var botPokemonListReducer = function botPokemonListReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'ADDINGBOTS':
      state = [].concat(_toConsumableArray(state), _toConsumableArray(action.payload));
      return state;

    case 'REMOVEINGBOTS':
      state = [];
      return state;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (botPokemonListReducer);

/***/ }),

/***/ "../client/src/reducers/game.js":
/*!**************************************!*\
  !*** ../client/src/reducers/game.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var gameReducer = function gameReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'STARTGAME':
      state = true;
      return state;

    case 'ENDGAME':
      state = false;
      return state;

    case 'ASKENDGAME':
      state = {
        gameEnded: true
      };
      return state;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (gameReducer);

/***/ }),

/***/ "../client/src/reducers/index.js":
/*!***************************************!*\
  !*** ../client/src/reducers/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search */ "../client/src/reducers/search.js");
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select */ "../client/src/reducers/select.js");
/* harmony import */ var _pokemonList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pokemonList */ "../client/src/reducers/pokemonList.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game */ "../client/src/reducers/game.js");
/* harmony import */ var _botPokemonList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./botPokemonList */ "../client/src/reducers/botPokemonList.js");
/* harmony import */ var _playerActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./playerActions */ "../client/src/reducers/playerActions.js");







var rootReducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  textSearch: _search__WEBPACK_IMPORTED_MODULE_1__["default"],
  select: _select__WEBPACK_IMPORTED_MODULE_2__["default"],
  pokemonList: _pokemonList__WEBPACK_IMPORTED_MODULE_3__["default"],
  botPokemonList: _botPokemonList__WEBPACK_IMPORTED_MODULE_5__["default"],
  gameStarted: _game__WEBPACK_IMPORTED_MODULE_4__["default"],
  playerAction: _playerActions__WEBPACK_IMPORTED_MODULE_6__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducers);

/***/ }),

/***/ "../client/src/reducers/playerActions.js":
/*!***********************************************!*\
  !*** ../client/src/reducers/playerActions.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var stateDef = {
  pickedCardId: null,
  playerTurn: true
};

var playerActions = function playerActions() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : stateDef;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'PLAYERPICK':
      state = _objectSpread(_objectSpread({}, state), {}, {
        pickedCardId: action.payload
      });
      return state;

    case 'PLAYERTURN':
      state = _objectSpread(_objectSpread({}, state), {}, {
        playerTurn: action.payload
      });
      return state;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (playerActions);

/***/ }),

/***/ "../client/src/reducers/pokemonList.js":
/*!*********************************************!*\
  !*** ../client/src/reducers/pokemonList.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var pokemonListReducer = function pokemonListReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'ADDING':
      if (state.length === 4) return state;
      var addIndex = state.findIndex(function (e) {
        return e.id === action.payload.id;
      });

      if (addIndex !== -1) {
        state[addIndex] = action.payload;
      } else {
        state = [].concat(_toConsumableArray(state), [action.payload]);
      }

      return state;

    case 'REMOVING':
      var removeIndex = state.findIndex(function (e) {
        return e.id === action.payload.id;
      });

      if (removeIndex !== -1) {
        state.splice(removeIndex, 1);
      }

      state = _toConsumableArray(state);
      return state;

    case 'RESETECARDS':
      state = [];
      return state;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (pokemonListReducer);

/***/ }),

/***/ "../client/src/reducers/search.js":
/*!****************************************!*\
  !*** ../client/src/reducers/search.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var searcherReducer = function searcherReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SEARCHING':
      return action.payload;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (searcherReducer);

/***/ }),

/***/ "../client/src/reducers/select.js":
/*!****************************************!*\
  !*** ../client/src/reducers/select.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var selectorReducer = function selectorReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SELECTING':
      state = action.payload;
      return state;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (selectorReducer);

/***/ }),

/***/ "../client/src/static/Pokemon-Logo.png":
/*!*********************************************!*\
  !*** ../client/src/static/Pokemon-Logo.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/Html.js":
/*!********************************!*\
  !*** ./src/components/Html.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Html = function Html(_ref) {
  var content = _ref.content,
      state = _ref.state,
      reduxState = _ref.reduxState;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "root",
    dangerouslySetInnerHTML: {
      __html: content
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    dangerouslySetInnerHTML: _defineProperty({
      __html: "window.__APOLLO_STATE__=".concat(JSON.stringify(state).replace(/</g, "\\u003c"), ";")
    }, "__html", "window.__PRELOADED_STATE__=".concat(JSON.stringify(reduxState).replace(/</g, "\\u003c"), ";"))
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Html);

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cross_fetch_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cross-fetch/polyfill */ "cross-fetch/polyfill");
/* harmony import */ var cross_fetch_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cross_fetch_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/client/react/ssr */ "@apollo/client/react/ssr");
/* harmony import */ var _apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _client_src_App__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../client/src/App */ "../client/src/App.js");
/* harmony import */ var _components_Html__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Html */ "./src/components/Html.js");
/* harmony import */ var _client_src_reducers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../client/src/reducers */ "../client/src/reducers/index.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }











 // import App from '../../client/src/App';


var app = express__WEBPACK_IMPORTED_MODULE_1___default()();
var basePort = 3002;
app.use(express__WEBPACK_IMPORTED_MODULE_1___default.a["static"](path__WEBPACK_IMPORTED_MODULE_2___default.a.join(__dirname, '..', '..', 'client', 'build')));
app.get('*', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var client, store, App, reduxState;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            client = new _apollo_client__WEBPACK_IMPORTED_MODULE_5__["ApolloClient"]({
              ssrMode: true,
              link: Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__["createHttpLink"])({
                uri: 'http://localhost:3010',
                credentials: 'same-origin',
                headers: {
                  cookie: req.header('Cookie')
                }
              }),
              cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_5__["InMemoryCache"]()
            });
            store = Object(redux__WEBPACK_IMPORTED_MODULE_6__["createStore"])(_client_src_reducers__WEBPACK_IMPORTED_MODULE_11__["default"]);
            App = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_apollo_client__WEBPACK_IMPORTED_MODULE_5__["ApolloProvider"], {
              client: client
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_7__["Provider"], {
              store: store
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_client_src_App__WEBPACK_IMPORTED_MODULE_9__["default"], null)));
            reduxState = store.getState();
            Object(_apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_8__["getDataFromTree"])(App).then(function (content) {
              var initialState = client.extract();
              var html = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Html__WEBPACK_IMPORTED_MODULE_10__["default"], {
                content: content,
                state: initialState,
                reduxState: reduxState
              });
              res.status(200);
              res.send("<!doctype html>\n".concat(react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToStaticMarkup(html)));
              res.end();
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
app.listen(basePort, function () {
  return console.log("app Server is now running on http://localhost:".concat(basePort));
});

/***/ }),

/***/ 0:
/*!*********************************************!*\
  !*** multi @babel/polyfill ./src/server.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"@babel/polyfill");
module.exports = __webpack_require__(/*! F:\Work\_Web\PokemonDex\server\src\server.js */"./src/server.js");


/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ }),

/***/ "@apollo/client/react/ssr":
/*!*******************************************!*\
  !*** external "@apollo/client/react/ssr" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/client/react/ssr");

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/polyfill");

/***/ }),

/***/ "cross-fetch/polyfill":
/*!***************************************!*\
  !*** external "cross-fetch/polyfill" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cross-fetch/polyfill");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map