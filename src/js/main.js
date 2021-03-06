import 'core-js';
import 'regenerator-runtime/runtime';
import '../css/portfolio.scss';

(function() {

  let hamburger = document.querySelector('.menu-toggle');
  let nav = document.querySelector('nav');
  let header = document.getElementById('header');
  let x = document.getElementById('x');

  hamburger.addEventListener('click', () => {
    header.classList.toggle('noHeader');
    nav.classList.toggle('is-visible');
  });

  x.addEventListener('click', () => {
    header.classList.toggle('noHeader');
    nav.classList.toggle('is-visible');
  });


  let navOptions = document.querySelectorAll('li');

  function closeNavOnMobileClick() {
    if (window.innerWidth < 900) {
      nav.classList.toggle('is-visible');
      header.classList.toggle('noHeader');
    }
  }

  for (let i = 0; i < navOptions.length; i++) {
    navOptions[i].addEventListener('click', () => {
      closeNavOnMobileClick();
    });
  }

  const ua = window.navigator.userAgent;
  const msie = ua.indexOf("MSIE ");
  if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
    header.style.display = 'none';
  }

  const modal = Array.from(document.getElementsByClassName('modal'));

  class Modal {
    constructor(images, num) {
      this.slides = Array.from(document.getElementsByClassName(images));
      this.slideIndex = 1;
      this.num = num;
    }
    // function to show images on this project
    showDivs(n) {
      let j;
      var x = this.slides;
      if (n > x.length) {this.slideIndex = 1}
      if (n < 1) {this.slideIndex = x.length}
      for (j = 0; j < x.length; j++) {
        x[j].style.display = "none";
        }
        x[this.slideIndex-1].style.display = "block";
    }
    // method for showing next image on this project
    navigateDivs(n) {
      this.showDivs(this.slideIndex += n);
    }
    openModal() {
      modal[this.num].classList.add('show');
    }
    closeModal() {
      console.log('closing')
      // change ONLY opacity first, that way this transitions
      modal[this.num].style.opacity = 0;
      setTimeout(() => {
        modal[this.num].classList.remove('show');
        // then remove the inline-opacity styles applied with JS so that next time we click "Learn More", applying show will transition properly
        modal[this.num].style.removeProperty('opacity');
      }, 1000);
    }
  }

  const Beckley = new Modal('mySlides1', 0);
  Beckley.showDivs(1);

  const Mills = new Modal('mySlides2', 1);
  Mills.showDivs(1);

  const WeatherApp = new Modal('mySlides3', 2);
  WeatherApp.showDivs(1);

  const ISBA = new Modal('mySlides4', 3);
  ISBA.showDivs(1);

  const MealPickerApp = new Modal('mySlides5', 4);
  MealPickerApp.showDivs(1);

  const THREEBEERSDEEP = new Modal('mySlides6', 5);
  THREEBEERSDEEP.showDivs(1);

  const REACT_WEIGHT_TRACKER = new Modal('mySlides7', 6);
  REACT_WEIGHT_TRACKER.showDivs(1);

  const VIRTUAL_COOKBOOK = new Modal('mySlides8', 7);
  VIRTUAL_COOKBOOK.showDivs(1);

  // event listeners on the document is more performant than having a bunch of event listerners on individual items: https://gomakethings.com/why-event-delegation-is-a-better-way-to-listen-for-events-in-vanilla-js/

  document.addEventListener('click', function (event) {
    if (event.target.matches('#beckley')) {
      Beckley.openModal();
    }
    if (event.target.matches('#mills')) {
      Mills.openModal();
  	}
    if (event.target.matches('#weatherApp')) {
      WeatherApp.openModal();
  	}
    if (event.target.matches('#isba')) {
      ISBA.openModal();
  	}
    if (event.target.matches('#mealPickerApp')) {
      MealPickerApp.openModal();
  	}
    if (event.target.matches('#threeBD')) {
      THREEBEERSDEEP.openModal();
  	}
    if (event.target.matches('#react_weight_tracker')) {
      REACT_WEIGHT_TRACKER.openModal();
  	}
    if (event.target.matches('#virtualCookbook')) {
      VIRTUAL_COOKBOOK.openModal();
  	}
  	if (event.target.matches('#closeOne')) {
      Beckley.closeModal();
  	}
    if (event.target.matches('#closeTwo')) {
  		Mills.closeModal();
  	}
    if (event.target.matches('#closeThree')) {
  		WeatherApp.closeModal();
  	}
    if (event.target.matches('#closeFour')) {
  		ISBA.closeModal();
  	}
    if (event.target.matches('#closeFive')) {
  		MealPickerApp.closeModal();
  	}
    if (event.target.matches('#closeSix')) {
  		THREEBEERSDEEP.closeModal();
  	}
    if (event.target.matches('#closeSeven')) {
  		REACT_WEIGHT_TRACKER.closeModal();
  	}
    if (event.target.matches('#closeEight')) {
  		VIRTUAL_COOKBOOK.closeModal();
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
      WeatherApp.navigateDivs(1);
    }
    if (event.target.matches('#backward3')) {
      WeatherApp.navigateDivs(-1);
    }
    if (event.target.matches('#forward4')) {
      ISBA.navigateDivs(1);
    }
    if (event.target.matches('#backward4')) {
      ISBA.navigateDivs(-1);
    }
    if (event.target.matches('#forward5')) {
      MealPickerApp.navigateDivs(1);
    }
    if (event.target.matches('#backward5')) {
      MealPickerApp.navigateDivs(-1);
    }
    if (event.target.matches('#forward6')) {
      THREEBEERSDEEP.navigateDivs(1);
    }
    if (event.target.matches('#backward6')) {
      THREEBEERSDEEP.navigateDivs(-1);
    }
    if (event.target.matches('#forward7')) {
      REACT_WEIGHT_TRACKER.navigateDivs(1);
    }
    if (event.target.matches('#backward7')) {
      REACT_WEIGHT_TRACKER.navigateDivs(-1);
    }
    if (event.target.matches('#forward8')) {
      VIRTUAL_COOKBOOK.navigateDivs(1);
    }
    if (event.target.matches('#backward8')) {
      VIRTUAL_COOKBOOK.navigateDivs(-1);
    }

  }, false);

  // function for whitening navbar on scrolling
  const whitenNav = () => {
    const nav = document.getElementById("header");
    let scrolled = window.pageYOffset;
    header.style.backgroundColor = 'rgba(255, 255, 255, ' + (scrolled/400)+')';
  }

  // function for darkening footer on scroll up
  const fadeFooter = () => {
    const footer = document.querySelector('footer>div');
    let scrolled = window.pageYOffset;
    footer.style.backgroundColor = 'rgba(0, 0, 0, ' + (document.body.offsetHeight-(window.innerHeight+window.pageYOffset))/500 + ')';
  }


  // basic function for showing hidden elements
  function showElement(currentClass, classToAdd) {
    const currentElementClass = document.querySelectorAll(currentClass);
    for (let i = 0; i < currentElementClass.length; i++) {
      let introPos = currentElementClass[i].getBoundingClientRect().top;
      let screenPos = window.innerHeight/1.2;
      if (introPos < screenPos ) {
        currentElementClass[i].classList.add(classToAdd);
      }
    }
  }

  window.addEventListener('scroll', () => {
    showElement('.faded', 'fade-in');
    showElement('.moved-left', 'moved-center');
    showElement('.moved-right', 'moved-center');
    whitenNav();
    fadeFooter();
  });

  $('form').submit(function(event){
  event.preventDefault();
  console.log('ajax function firing');
    $.ajax({
      type: 'POST',
      url: 'process.php',
      data: $('form').serialize(),
      success: function () {
        console.log('email sent');
         document.querySelector('.confirmation').setAttribute("id", "showSubmitResult");
      },
      error: function() {
        document.querySelector('.error').setAttribute("id", "showSubmitResult");
      }
    });

  });
}());
