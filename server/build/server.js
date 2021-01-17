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
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Header */ "../client/src/components/Header/index.js");

 // import Search from './components/Search';
// import Pokedex from './components/Pokedex';
// import PokemonModal from './components/PokemonModal';
// import Board from './components/Board';

var App = function App() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], null));
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
/* harmony import */ var _StartButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../StartButton */ "../client/src/components/StartButton/index.js");

 // import Image from '../Image';

 // import logo from '../../static/Pokemon-Logo.png';

var Header = function Header() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_StartButton__WEBPACK_IMPORTED_MODULE_2__["default"], null));
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

  var classList = ['modal'];

  if (show) {
    document.body.classList.add('scroll-off');
    classList.push('modal--open');
  } else {
    document.body.classList.remove('scroll-off');
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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





 // import { useSelector, useDispatch } from 'react-redux';
// import { doStartGame } from '../../actions'
// import Engine from '../../Engine';

var Header = function Header() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      showCloseGameModal = _useState2[0],
      setShowCloseGameModal = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showNoCardsWarning = _useState4[0],
      setShowNoCardsWarning = _useState4[1]; // const gameStarted = useSelector((state) => state.gameStarted);
  // const dispatchEvent = useDispatch();
  // const toggleStartEndGame = () => {
  //   if (Engine.payerCards.length === 0) {
  //     return showWarningOnScreen();
  //   }
  //   if (!gameStarted) {
  //     return dispatchEvent(doStartGame());
  //   } else {
  //     setShowCloseGameModal(true);
  //   }
  // }
  // const closeEndGameModal = () => {
  //   setShowCloseGameModal(false)
  // }
  // const showWarningOnScreen = () => {
  //   setShowNoCardsWarning(true);
  //   setTimeout(() => {
  //     setShowNoCardsWarning(false);
  //   }, 1500);
  // }


  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    addClass: ['header__btn'],
    onClick: toggleStartEndGame
  }, showCloseGameModal ? /*#__PURE__*/React.createElement("span", {
    className: "text"
  }, "End Game") : /*#__PURE__*/React.createElement("span", {
    className: "text"
  }, "Start Game")), /*#__PURE__*/React.createElement(_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    show: showNoCardsWarning,
    addClass: ['modal__warr']
  }, /*#__PURE__*/React.createElement("span", {
    className: "modal__warr__text"
  }, "Please select at least one pokemon")));
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client/react/ssr */ "@apollo/client/react/ssr");
/* harmony import */ var _apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _client_src_App__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../client/src/App */ "../client/src/App.js");
/* harmony import */ var _components_Html__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Html */ "./src/components/Html.js");
/* harmony import */ var _client_src_reducers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../client/src/reducers */ "../client/src/reducers/index.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


 // import path from 'path';








 // import App from '../../client/src/App';


var app = express__WEBPACK_IMPORTED_MODULE_1___default()();
var basePort = 3000; // const appMarkup = ReactDOMServer.renderToString(
//   <App />
// );

app.get('*', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var client, store, App, reduxState;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            client = new _apollo_client__WEBPACK_IMPORTED_MODULE_4__["ApolloClient"]({
              ssrMode: true,
              link: Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__["createHttpLink"])({
                uri: 'http://localhost:3010',
                credentials: 'same-origin',
                headers: {
                  cookie: req.header('Cookie')
                }
              }),
              cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_4__["InMemoryCache"]()
            });
            store = Object(redux__WEBPACK_IMPORTED_MODULE_5__["createStore"])(_client_src_reducers__WEBPACK_IMPORTED_MODULE_10__["default"]);
            App = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_apollo_client__WEBPACK_IMPORTED_MODULE_4__["ApolloProvider"], {
              client: client
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_6__["Provider"], {
              store: store
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_client_src_App__WEBPACK_IMPORTED_MODULE_8__["default"], null)));
            reduxState = store.getState();
            Object(_apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_7__["getDataFromTree"])(App).then(function (content) {
              var initialState = client.extract();
              var html = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Html__WEBPACK_IMPORTED_MODULE_9__["default"], {
                content: content,
                state: initialState,
                reduxState: reduxState
              });
              res.status(200);
              res.send("<!doctype html>\n".concat(react_dom_server__WEBPACK_IMPORTED_MODULE_3___default.a.renderToStaticMarkup(html)));
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