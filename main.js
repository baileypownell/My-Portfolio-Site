// Navigation Menu

// Function to close and open menu on mobile
function toggleNav() {
  $('nav').slideToggle(500);
};


// making an array of modal windows to later use to define "i":
const modalWindows = document.querySelectorAll('.modal');
const modalArray = Array.from(modalWindows);

// loop to automatically know which button is used, and which modal to open:
for ( i = 0; i < modalArray.length; i++){

  // select the right modal element
  let modal = modalArray[i];

  // select the right "open modal" button
  const learnMore = Array.from(document.querySelectorAll('.modalBtn'));
  let openButton = learnMore[i];
  // select the right "close button"
  const closeButtonArray = Array.from(document.querySelectorAll('.closeBtn'));
  let closeButton = closeButtonArray[i];

  // Listen for open click on modalBtn
  openButton.addEventListener('click', openModal);

  // Listen for close click on modalBtn
  closeButton.addEventListener('click', closeModal);

  // Listen outside click to close modal
  window.addEventListener('click', clickOutside);

  //function to open modal
  function openModal(){
    $(modal).fadeIn()
    // modal.style.display = 'block';
  }

  //function to close modal
  function closeModal(){
    $(modal).fadeOut()
    // modal.style.display = 'none';
  }

  //function to close outside of x checkbox
  function clickOutside(e) {
    if (e.target == modal) {
      $(modal).fadeOut()
      // modal.style.display= 'none';
    }
  }
}

// FUNCTION FOR SLIDING IMAGES INSIDE A MODAL

// making an arrays of all the slides (not used as of yet)
const beckley = Array.from(document.getElementsByClassName('mySlides1'));
const mills = Array.from(document.getElementsByClassName('mySlides2'));
const sweetwater = Array.from(document.getElementsByClassName('mySlides3'));
const isba = Array.from(document.getElementsByClassName('mySlides4'));

const masterArray = [beckley, mills, sweetwater, isba];

let slideIndex = 1; // first picture/div
 showDivs(slideIndex); // call to function to display said first image

// this function called by the button; it subtracts one or  adds one to the slideIndex
function plusDivs(n) {
  showDivs(slideIndex += n);
}

// Function for Beckley Law


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


// Mills Function

showDivs2(slideIndex);

function plusDivs2(n) {
  showDivs2(slideIndex += n);
}

  function showDivs2(n) {
    let j;
    var x = masterArray[1];
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (j = 0; j < x.length; j++) {
      x[j].style.display = "none";
    }
    x[slideIndex-1].style.display = "block"; // on first run, displays first image because x is an array of mySlides, and we are getting the first one (index of 0) since 1 - 1 = 0.
  }

// Sweetwater Cakes Function

showDivs3(slideIndex);

function plusDivs3(n) {
  showDivs3(slideIndex += n);
}

  function showDivs3(n) {
    let j;
    var x = masterArray[2];
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (j = 0; j < x.length; j++) {
      x[j].style.display = "none";
    }
    x[slideIndex-1].style.display = "block"; // on first run, displays first image because x is an array of mySlides, and we are getting the first one (index of 0) since 1 - 1 = 0.
  }

// ISBA Function

showDivs4(slideIndex);

function plusDivs4(n) {
  showDivs4(slideIndex += n);
}

  function showDivs4(n) {
    let j;
    var x = masterArray[3];
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (j = 0; j < x.length; j++) {
      x[j].style.display = "none";
    }
    x[slideIndex-1].style.display = "block"; // on first run, displays first image because x is an array of mySlides, and we are getting the first one (index of 0) since 1 - 1 = 0.
  }



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
