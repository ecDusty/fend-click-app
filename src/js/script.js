"use strict";
//How many images would you like to produce on the screen?
var numImgs = 5;

//How many actual images are available?
var numImgsAvail = 5;
var numImgsAvailCounter = 1;

var counterBox = document.getElementById('counter');
var imgCon = document.getElementById('image-container');

imgCon.innerHTML = '';

for (var i = 0; i < numImgs; i++) {
  var v = i+1;
  var clicks = 0;
  var imgBox = document.createElement('div');
  var img = document.createElement('img');
  var label = document.createElement('h4');
  var counter = document.createElement('h3');
  var imgsrc = 'images/image-' + numImgsAvailCounter + '.jpg';

  imgBox.className = 'imgBox';
  imgBox.id = 'imgBox' + v;

  img.className = 'clicker-image';
  img.setAttribute('alt', ('Clicker Image ' + v + ', Hong Kong Web developer'));
  img.setAttribute('src', imgsrc);

  label.className = 'image-label';
  label.textContent = 'Image ' + v;

  counter.id = 'img' + v;
  counter.className = 'imgCounter';
  var counterID = 'img' + v;
  counter.innerHTML = 0;

  imgBox.appendChild(img);
  imgBox.appendChild(label);
  imgBox.appendChild(counter);

  imgBox.addEventListener('click', (function (numClicks, countID) {
    return function () {
      numClicks ++;
      document.getElementById(countID).innerHTML = numClicks;
    }
  })(clicks, counterID));

  if (numImgsAvailCounter < numImgsAvail) {
    numImgsAvailCounter++;
  } else {
    numImgsAvailCounter = 1;
  }

  imgCon.appendChild(imgBox);
}

