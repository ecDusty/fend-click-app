"use strict";
//Bringing in the Fisher-Yates Array Shuffle Method. A great explanation and examples can be found here: https://bost.ocks.org/mike/shuffle/
function shuffle(array) {
  var m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
}

//How many images would you like to produce on the screen?
var numImgs = 5;

//How many actual images are available?
var numImgsAvail = 5;
var numImgsAvailCounter = 1;

//Array of Cat Names
var catNames = [
  'Whiskers',
  'Buttons',
  'Mr. Wilkinson',
  'Bond James'
];
var catNameCounter = 0;

//Shuffle the Order of cat names. So that they  aren't always the same
shuffle(catNames);

//Create a container to hold all the Cat Instances of the cats
var imgDisCon = document.createElement('div');
imgDisCon.id = 'image-container';
imgDisCon.innerHTML = '';

//Creates all the Cat Instances and puts them into the imgDisCon
for (var i = 0; i < numImgs; i++) {
  var v = i+1;
  var clicks = 0;
  var imgBox = document.createElement('div');
  var img = document.createElement('img');
  var label = document.createElement('h4');
  var counter = document.createElement('h3');
  var imgsrc = 'images/image-' + numImgsAvailCounter + '.jpg';

  imgBox.className = 'imgBox hidden';
  imgBox.id = 'imgBox' + v;

  img.className = 'clicker-image';
  img.setAttribute('alt', ('Clicker Image ' + v + ', Hong Kong Web developer'));
  img.setAttribute('src', imgsrc);

  label.className = 'image-label';
  label.textContent = catNames[catNameCounter];

  counter.id = 'img' + v;
  counter.className = 'imgCounter';
  counter.innerHTML = 0;

  imgBox.appendChild(img);
  imgBox.appendChild(label);
  imgBox.appendChild(counter);

  //Mouse interaction. Everytime an image is clicked, the counter goes up
  imgBox.addEventListener('click', (function (countID) {
    return function () {
      document.getElementById(countID).innerHTML ++;
    }
  })(counter.id));

  //Keyboard interaction. Everytime a keyboard key is hit, the active image counter goes up
  window.addEventListener('keydown', (function (countID) {
    return function () {
      if (document.getElementById(countID).parentElement.classList.contains('active')) {
        console.log('Key has been hit' + countID);
        document.getElementById(countID).innerHTML ++;
      }
    }
  })(counter.id));

  //If there are more Cat instances than cat images available. Start from the beginning of the image counter.
  if (numImgsAvailCounter < numImgsAvail) {
    numImgsAvailCounter++;
  } else {
    numImgsAvailCounter = 1;
  }

  //If there are more Cat instances than cat Names available. Reshuffle the Cat Names array and start from the beginning of the list
  if (catNameCounter < catNames.length-1) {
    catNameCounter++;
  } else {
    catNameCounter = 0;
    shuffle(catNames);
  }

  imgDisCon.appendChild(imgBox);
}

imgDisCon.firstChild.classList.toggle('active');
imgDisCon.firstChild.classList.toggle('hidden');
document.getElementById('display-container').appendChild(imgDisCon);
