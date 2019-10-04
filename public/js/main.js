'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('babel-polyfill');

require('core-js/stable');

require('regenerator-runtime/runtime');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var hamburger = document.querySelector('.menu-toggle');
  var nav = document.querySelector('nav');

  hamburger.addEventListener('click', function () {
    nav.classList.toggle('is-visible');
  });

  var modal = Array.from(document.getElementsByClassName('modal'));

  var Modal = function () {
    function Modal(images, num) {
      _classCallCheck(this, Modal);

      this.slides = Array.from(document.getElementsByClassName(images));
      this.slideIndex = 1;
      this.num = num;
    }
    // function to show images on this project


    _createClass(Modal, [{
      key: 'showDivs',
      value: function showDivs(n) {
        var j = void 0;
        var x = this.slides;
        if (n > x.length) {
          this.slideIndex = 1;
        }
        if (n < 1) {
          this.slideIndex = x.length;
        }
        for (j = 0; j < x.length; j++) {
          x[j].style.display = "none";
        }
        x[this.slideIndex - 1].style.display = "block";
      }
      // method for showing next image on this project

    }, {
      key: 'navigateDivs',
      value: function navigateDivs(n) {
        this.showDivs(this.slideIndex += n);
      }
    }, {
      key: 'openModal',
      value: function openModal() {
        modal[this.num].classList.add('show');
      }
    }, {
      key: 'closeModal',
      value: function closeModal() {
        var _this = this;

        // change ONLY opacity first, that way this transitions
        modal[this.num].style.opacity = 0;
        setTimeout(function () {
          modal[_this.num].classList.remove('show');
          // then remove the inline-opacity styles applied with JS so that next time we click "Learn More", applying show will transition properly
          modal[_this.num].style.removeProperty('opacity');
        }, 1000);
      }
    }]);

    return Modal;
  }();

  var Beckley = new Modal('mySlides1', 0);
  Beckley.showDivs(1);

  var Mills = new Modal('mySlides2', 1);
  Mills.showDivs(1);

  var SweetwaterCakes = new Modal('mySlides3', 2);
  SweetwaterCakes.showDivs(1);

  var ISBA = new Modal('mySlides4', 3);
  ISBA.showDivs(1);

  var AJAX = new Modal('mySlides5', 4);
  AJAX.showDivs(1);

  // event listeners on the document is more performant than having a bunch of event listerners on individual items: https://gomakethings.com/why-event-delegation-is-a-better-way-to-listen-for-events-in-vanilla-js/

  document.addEventListener('click', function (event) {
    if (event.target.matches('#beckley')) {
      Beckley.openModal();
    }
    if (event.target.matches('#mills')) {
      Mills.openModal();
    }
    if (event.target.matches('#swc')) {
      SweetwaterCakes.openModal();
    }
    if (event.target.matches('#isba')) {
      ISBA.openModal();
    }
    if (event.target.matches('#ajax')) {
      AJAX.openModal();
    }
    if (event.target.matches('#closeOne')) {
      Beckley.closeModal();
    }
    if (event.target.matches('#closeTwo')) {
      Mills.closeModal();
    }
    if (event.target.matches('#closeThree')) {
      SweetwaterCakes.closeModal();
    }
    if (event.target.matches('#closeFour')) {
      ISBA.closeModal();
    }
    if (event.target.matches('#closeFive')) {
      AJAX.closeModal();
    }
    if (event.target.matches('#forward')) {
      Beckley.navigateDivs(1);
    }
    if (event.target.matches('#backward')) {
      //plusDivs(-1);
      Beckley.navigateDivs(-1);
    }
    if (event.target.matches('#forward2')) {
      Mills.navigateDivs(1);
    }
    if (event.target.matches('#backward2')) {
      Mills.navigateDivs(-1);
    }
    if (event.target.matches('#forward3')) {
      SweetwaterCakes.navigateDivs(1);
    }
    if (event.target.matches('#backward3')) {
      SweetwaterCakes.navigateDivs(-1);
    }
    if (event.target.matches('#forward4')) {
      ISBA.navigateDivs(1);
    }
    if (event.target.matches('#backward4')) {
      ISBA.navigateDivs(-1);
    }
    if (event.target.matches('#forward5')) {
      AJAX.navigateDivs(1);
    }
    if (event.target.matches('#backward5')) {
      AJAX.navigateDivs(-1);
    }
  }, false);

  // basic function for showing hidden elements
  function showElement(currentClass, classToAdd) {
    var currentElementClass = document.querySelectorAll(currentClass);
    for (var i = 0; i < currentElementClass.length; i++) {
      var introPos = currentElementClass[i].getBoundingClientRect().top;
      var screenPos = window.innerHeight / 1.2;
      if (introPos < screenPos) {
        currentElementClass[i].classList.add(classToAdd);
      }
    }
  }

  window.addEventListener('scroll', function () {
    showElement('.faded', 'fade-in');
    showElement('.moved-left', 'moved-center');
    showElement('.moved-right', 'moved-center');
  });
})();