'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TextResolve = function () {
  function TextResolve(id, config) {
    _classCallCheck(this, TextResolve);

    this.config = {
      characterPool: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'x', '#', '%', '&', '-', '+', '_', '?', '/', '\\', '='],
      delay: 1000,
      loop: true,
      targetLoop: 3,
      resolveDelay: 50
    };

    if (config.characterPool !== undefined) {
      this.config.characterPool = config.characterPool;
    }
    if (config.delay !== undefined) {
      this.config.delay = config.delay;
    }
    if (config.loop !== undefined) {
      this.config.loop = config.loop;
    }
    if (config.targetLoop !== undefined) {
      this.config.targetLoop = config.targetLoop;
    }
    if (config.resolveDelay !== undefined) {
      this.config.resolveDelay = config.resolveDelay;
    }
    this.config.text = config.text;
    this.dom = document.getElementById(id);
    this.currentLoop = 0;
    this.currentDisplay = "";
    this.switchTo(0);
  }

  _createClass(TextResolve, [{
    key: 'resolve',
    value: function resolve() {
      var self = this;
      this.resolveInterval = setInterval(function () {
        self.currentLoop++;
        // Replace the last character with random
        var randomChar = self.getRandomCharacter();
        self.currentDisplay = self.currentDisplay.substr(0, self.currentDisplay.length - 1) + randomChar;
        if (self.currentLoop >= self.config.targetLoop) {
          self.currentLoop = 0;
          self.showNextChar();
        }
        self.dom.innerHTML = self.currentDisplay;
      }, this.config.resolveDelay);
    }
  }, {
    key: 'showNextChar',
    value: function showNextChar() {
      var target = this.config.text[this.currentTarget];
      if (this.currentDisplay.length === target.length) {
        clearInterval(this.resolveInterval);
        this.dom.innerHTML = target;
        var self = this;
        setTimeout(function () {
          self.switchTo(self.currentTarget + 1);
        }, this.config.delay);
      }
      console.log(target, this.dom.innerHTML);
      this.currentDisplay = target.substr(0, this.currentDisplay.length + 1);
    }
  }, {
    key: 'switchTo',
    value: function switchTo(id) {
      if (id > this.config.text.length - 1) {
        if (this.config.loop) {
          this.switchTo(0);
        }
        return;
      }
      this.currentTarget = id;
      this.currentDisplay = this.config.text[id][0];
      this.resolve();
    }
  }, {
    key: 'getRandomCharacter',
    value: function getRandomCharacter() {
      var index = this.getRandomInt(0, this.config.characterPool.length - 1);
      return this.config.characterPool[index];
    }
  }, {
    key: 'getRandomInt',
    value: function getRandomInt(min, max) {
      return Math.floor(Math.random() * max + min);
    }
  }]);

  return TextResolve;
}();
