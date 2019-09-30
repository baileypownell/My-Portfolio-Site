(function() {
  let hamburger = document.querySelector('.menu-toggle');
  let nav = document.querySelector('nav');

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('is-visible');
  });

  const modal = Array.from(document.getElementsByClassName('modal'));

  class Modal {
    constructor(images) {
      this.slides = Array.from(document.getElementsByClassName(images));
      this.slideIndex = 1;
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
      modal[0].classList.add('show');
    }
    closeModal() {
      // change ONLY opacity first, that way this transitions
      modal[0].style.opacity = 0;
      setTimeout(function(){
        modal[0].classList.remove('show');
        // then remove the inline-opacity styles applied with JS so that next time we click "Learn More", applying show will transition properly
        modal[0].style.removeProperty('opacity');
      }, 1000);
    }
  }

  const Beckley = new Modal('mySlides1');
  Beckley.showDivs(1);

  const Mills = new Modal('mySlides2');
  Mills.showDivs(1);

  const SweetwaterCakes = new Modal('mySlides3');
  SweetwaterCakes.showDivs(1);

  const ISBA = new Modal('mySlides4');
  ISBA.showDivs(1);

  const AJAX = new Modal('mySlides5');
  AJAX.showDivs(1);

  // event listeners on the document is more performant than having a bunch of event listerners on individual items: https://gomakethings.com/why-event-delegation-is-a-better-way-to-listen-for-events-in-vanilla-js/

  document.addEventListener('click', function (event) {
    if (event.target.matches('#beckley')) {
      //openModal(0);
      Beckley.openModal();
    }
    if (event.target.matches('#mills')) {
      Mills.openModal(1);
  	}
    if (event.target.matches('#swc')) {
      SweetwaterCakes.openModal(2);
  	}
    if (event.target.matches('#isba')) {
      ISBA.openModal(3);
  	}
    if (event.target.matches('#ajax')) {
      AJAX.openModal(4);
  	}
  	if (event.target.matches('#closeOne')) {
      Beckley.closeModal();
  	}
    if (event.target.matches('#closeTwo')) {
  		Mills.closeModal(1);
  	}
    if (event.target.matches('#closeThree')) {
  		SweetwaterCakes.closeModal(2);
  	}
    if (event.target.matches('#closeFour')) {
  		ISBA.closeModal(3);
  	}
    if (event.target.matches('#closeFive')) {
  		AJAX.closeModal(4);
  	}
    if (event.target.matches('#forward')) {
      Beckley.navigateDivs(1);
    }
    if (event.target.matches('#backward')) {
      //plusDivs(-1);
      Beckley.navigateDivs(-1);
    }
    if (event.target.matches('#forward2')) {
      Mills.plusDivs2(1);
    }
    if (event.target.matches('#backward2')) {
      Mills.plusDivs2(-1);
    }
    if (event.target.matches('#forward3')) {
      SweetwaterCakes.plusDivs3(1);
    }
    if (event.target.matches('#backward3')) {
      SweetwaterCakes.plusDivs3(-1);
    }
    if (event.target.matches('#forward4')) {
      ISBA.plusDivs4(1);
    }
    if (event.target.matches('#backward4')) {
      ISBA.plusDivs4(-1);
    }
    if (event.target.matches('#forward5')) {
      AJAX.plusDivs5(1);
    }
    if (event.target.matches('#backward5')) {
      AJAX.plusDivs5(-1);
    }

  }, false);

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
  });
}());
