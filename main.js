
let hamburger = document.querySelector('.menu-toggle');
let nav = document.querySelector('nav');


hamburger.addEventListener('click', () => {
  if (nav.classList.contains('is-visible')) {
    nav.classList.remove('is-visible');
  } else {
   nav.classList.add('is-visible');
  }
});

const modal = Array.from(document.getElementsByClassName('modal'));

// making an arrays of all the slides (not used as of yet)
const beckley = Array.from(document.getElementsByClassName('mySlides1'));
const mills = Array.from(document.getElementsByClassName('mySlides2'));
const sweetwater = Array.from(document.getElementsByClassName('mySlides3'));
const isba = Array.from(document.getElementsByClassName('mySlides4'));

const masterArray = [beckley, mills, sweetwater, isba];

// Event handling

// Function for Beckley Law
let slideIndex = 1; // first picture/div
showDivs(slideIndex); // call to function to display said first image
function showDivs(n) {
  let j;
  var x = masterArray[0];
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (j = 0; j < x.length; j++) {
    x[j].style.display = "none";
    }
    x[slideIndex-1].style.display = "block"; // on first run, displays first image because x is an array of mySlides, and we are getting the first one (index of 0) since 1 - 1 = 0.
  }
function plusDivs(n) {
  showDivs(slideIndex += n);
}

// Function for Mills
let slideIndex2 = 1; // first picture/div
showDivs2(slideIndex2); // call to function to display said first image
function showDivs2(n) {
  let j;
  var x = masterArray[1];
  if (n > x.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = x.length}
  for (j = 0; j < x.length; j++) {
    x[j].style.display = "none";
    }
    x[slideIndex2-1].style.display = "block"; // on first run, displays first image because x is an array of mySlides, and we are getting the first one (index of 0) since 1 - 1 = 0.
  }
function plusDivs2(n) {
  showDivs2(slideIndex2 += n);
}

// Function for SWC
let slideIndex3 = 1; // first picture/div
showDivs3(slideIndex3); // call to function to display said first image
function showDivs3(n) {
  let j;
  var x = masterArray[2];
  if (n > x.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = x.length}
  for (j = 0; j < x.length; j++) {
    x[j].style.display = "none";
    }
    x[slideIndex3-1].style.display = "block"; // on first run, displays first image because x is an array of mySlides, and we are getting the first one (index of 0) since 1 - 1 = 0.
  }
function plusDivs3(n) {
  showDivs3(slideIndex3 += n);
}

// Function for ISBA
let slideIndex4 = 1; // first picture/div
showDivs4(slideIndex4); // call to function to display said first image
function showDivs4(n) {
  let j;
  var x = masterArray[3];
  if (n > x.length) {slideIndex4 = 1}
  if (n < 1) {slideIndex4 = x.length}
  for (j = 0; j < x.length; j++) {
    x[j].style.display = "none";
    }
    x[slideIndex4-1].style.display = "block"; // on first run, displays first image because x is an array of mySlides, and we are getting the first one (index of 0) since 1 - 1 = 0.
  }
function plusDivs4(n) {
  showDivs4(slideIndex4 += n);
}

document.addEventListener('click', function (event) {
  if (event.target.matches('#beckley')) {
    modal[0].style.display = "block";
  }
  if (event.target.matches('#mills')) {
    modal[1].style.display = "block";
	}
  if (event.target.matches('#swc')) {
    modal[2].style.display = "block";
	}
  if (event.target.matches('#isba')) {
    modal[3].style.display = "block";
	}
	if (event.target.matches('#closeOne')) {
		modal[0].style.display = "none";
	}
  if (event.target.matches('#closeTwo')) {
		modal[1].style.display = "none";
	}
  if (event.target.matches('#closeThree')) {
		modal[2].style.display = "none";
	}
  if (event.target.matches('#closeFour')) {
		modal[3].style.display = "none";
	}
  if (event.target.matches('.forward')) {
    plusDivs(1);
  }
  if (event.target.matches('.backward')) {
    plusDivs(-1);
  }
  if (event.target.matches('.forward2')) {
    plusDivs2(1);
  }
  if (event.target.matches('.backward2')) {
    plusDivs2(-1);
  }
  if (event.target.matches('.forward3')) {
    plusDivs3(1);
  }
  if (event.target.matches('.backward3')) {
    plusDivs3(-1);
  }
  if (event.target.matches('.forward4')) {
    plusDivs4(1);
  }
  if (event.target.matches('.backward4')) {
    plusDivs4(-1);
  }

}, false);

// animations for fading in and resizing:

  var animateHTML = function() {
    var elems;
    var windowHeight;
    function init() {
      elems = document.querySelectorAll('.hidden');
      windowHeight = window.innerHeight;
      addEventHandlers();
      checkPosition();
    }
    function addEventHandlers() {
      window.addEventListener('scroll', checkPosition);
      window.addEventListener('resize', init);
    }
    function checkPosition() {
      for (var i = 0; i < elems.length; i++) {
        var positionFromTop = elems[i].getBoundingClientRect().top;
        if (positionFromTop - windowHeight <= 0) {
          elems[i].className = elems[i].className.replace(
            'hidden',
            'fade-in-element'
          );
        }
      }
    }
    return {
      init: init
    };
  };
  animateHTML().init();

// for animating sliding text

  var slideHTML = function() {
    var elems;
    var windowHeight;
    function init() {
      elems = document.querySelectorAll('.moved');
      windowHeight = window.innerHeight;
      addEventHandlers();
      checkPosition();
    }
    function addEventHandlers() {
      window.addEventListener('scroll', checkPosition);
      window.addEventListener('resize', init);
    }
    function checkPosition() {

      var moveSubText = () => {
      var moveRight = document.querySelectorAll('.moved-right')[0];
      moveRight.className = moveRight.className.replace(
        'moved-right',
        'move-in-element-right'
      );
      }

      for (var i = 0; i < elems.length; i++) {
        var positionFromTop = elems[i].getBoundingClientRect().top;
        if (positionFromTop - windowHeight <= 0) {
          elems[i].className = elems[i].className.replace(
            'moved',
            'move-in-element'
          );
          setTimeout(moveSubText(), 4000);
        }
      }
    }
    return {
      init: init
    };
  };

  slideHTML().init();
