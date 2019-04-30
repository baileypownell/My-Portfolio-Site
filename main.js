
let hamburger = document.querySelector('.menu-toggle');
let nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('is-visible');
});

const modal = Array.from(document.getElementsByClassName('modal'));

// making an arrays of all the slides
const beckley = Array.from(document.getElementsByClassName('mySlides1'));
const mills = Array.from(document.getElementsByClassName('mySlides2'));
const sweetwater = Array.from(document.getElementsByClassName('mySlides3'));
const isba = Array.from(document.getElementsByClassName('mySlides4'));
const ajax = Array.from(document.getElementsByClassName('mySlides5'));

const masterArray = [beckley, mills, sweetwater, isba, ajax];

// FUNCTIONS FOR EACH MODAL
// This code could be a lot shorter and cleaner; I think using objects with methods and properties for each modal, instead of functions, would be best and I intend to improve this at some point.

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
    x[slideIndex-1].style.display = "block";
    // on first run, displays first image because x is an array of mySlides, and we are getting the first one (index of 0) since 1 - 1 = 0.
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

// Function for AJAX
let slideIndex5 = 1; // first picture/div
showDivs5(slideIndex5); // call to function to display said first image
function showDivs5(n) {
  let j;
  var x = masterArray[4];
  if (n > x.length) {slideIndex5 = 1}
  if (n < 1) {slideIndex4 = x.length}
  for (j = 0; j < x.length; j++) {
    x[j].style.display = "none";
    }
    x[slideIndex5-1].style.display = "block"; // on first run, displays first image because x is an array of mySlides, and we are getting the first one (index of 0) since 1 - 1 = 0.
  }
function plusDivs5(n) {
  showDivs5(slideIndex5 += n);
}

// FUNCTION TO OPEN AND CLOSE MODAL WINDOWS

function openModal(num) {
  modal[num].classList.add('show');
}

function closeModal(num) {
  // change ONLY opacity first, that way this transitions
  modal[num].style.opacity = 0;
  setTimeout(function(){
    modal[num].classList.remove('show');
    // then remove the inline-opacity styles applied with JS so that next time we click "Learn More", applying show will transition properly
    modal[num].style.removeProperty('opacity');
  }, 1000);
}

// event listeners

document.addEventListener('click', function (event) {
  if (event.target.matches('#beckley')) {
    openModal(0);
  }
  if (event.target.matches('#mills')) {
    openModal(1);
	}
  if (event.target.matches('#swc')) {
    openModal(2);
	}
  if (event.target.matches('#isba')) {
    openModal(3);
	}
  if (event.target.matches('#ajax')) {
    openModal(4);
	}
	if (event.target.matches('#closeOne')) {
    closeModal(0);
	}
  if (event.target.matches('#closeTwo')) {
		closeModal(1);
	}
  if (event.target.matches('#closeThree')) {
		closeModal(2);
	}
  if (event.target.matches('#closeFour')) {
		closeModal(3);
	}
  if (event.target.matches('#closeFive')) {
		closeModal(4);
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
  if (event.target.matches('.forward5')) {
    plusDivs5(1);
  }
  if (event.target.matches('.backward5')) {
    plusDivs5(-1);
  }

}, false);

// animation for fading in major page sections:

  const faded = document.querySelectorAll('.faded');
  function scrollAppear() {
    for (let i = 0; i < faded.length; i++) {
      let introPos = faded[i].getBoundingClientRect().top;
      let screenPos = window.innerHeight/1.2;
      if (introPos < screenPos ) {
        faded[i].classList.add('fade-in');
      }
    }
  }

  window.addEventListener('scroll', scrollAppear);

// animation for animating sliding text from the left

const movedLeft = document.querySelectorAll('.moved-left');
function scrollAppearSlideLeft() {
  for (let i = 0; i < movedLeft.length; i++) {
    let introPos = movedLeft[i].getBoundingClientRect().top;
    let screenPos = window.innerHeight/1.2;
    if (introPos < screenPos ) {
      movedLeft[i].classList.add('moved-center');
    }
  }
}

// animation for animating sliding text from the right

const movedRight = document.querySelectorAll('.moved-right');
function scrollAppearSlideRight() {
  for (let i = 0; i < movedRight.length; i++) {
    let introPos = movedRight[i].getBoundingClientRect().top;
    let screenPos = window.innerHeight/1.2;
    if (introPos < screenPos ) {
      setTimeout(function(){ movedRight[i].classList.add('moved-center');}, 1000);
    }
  }
}

window.addEventListener('scroll', scrollAppearSlideLeft);
window.addEventListener('scroll', scrollAppearSlideRight);
