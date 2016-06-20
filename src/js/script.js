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

//How many images would you like to produce to choose from?
var numImgs = 50;

//How many actual images are available?
var numImgsAvail = 6;
var numImgsAvailCounter = 1;

//Array of Cat Names. I constantly add to this everytime I edit the JavaScript File
var catNames = [
  'Whiskers',
  'Buttons',
  'Mr. Wilkinson',
  'James Bond',
  'Ms. Patterson',
  'Kronk',
  'Titan'
];
var catNameCounter = 0;

//Shuffle the Order of cat names. So that they  aren't always the same
shuffle(catNames);

//Create a container to hold all the Cat Instances of the cats
var iDisCon = document.createElement('div');
iDisCon.id = 'image-container';
iDisCon.innerHTML = '';

//Create a container for the menu item of each Cat Instance
var mDisCon = document.createElement('div');
mDisCon.id = 'menu-container';
document.getElementById('menu').innerHTML = '';

var mTitle = document.createElement('h2');
mTitle.id = 'menu-title';
mTitle.innerHTML = 'MENU';

mDisCon.appendChild(mTitle);

//Creates all the Cat Instances and puts them into the iDisCon
for (var i = 0; i < numImgs; i++) {

  //CREATE CAT INSTANCE
  var v = i+1;
  var clicks = 0;
  var imgBox = document.createElement('div');
  var img = document.createElement('img');
  var label = document.createElement('h4');
  var counter = document.createElement('h3');
  var imgsrc = 'images/image-' + numImgsAvailCounter + '.jpg';

  //Add needed ID & Class to the Cat Instance container
  imgBox.className = 'imgBox';
  imgBox.id = 'imgBox' + v;

  //Sets up the Cat Image
  img.className = 'clicker-image';
  img.setAttribute('alt', ('Clicker Image ' + v + ', Hong Kong Web developer'));
  img.setAttribute('src', imgsrc);

  //Creates a Name for the Cat Instance
  label.className = 'image-label';
  label.textContent = catNames[catNameCounter];

  //Creates the counter for the Cat Instance
  counter.id = 'img' + v;
  counter.className = 'imgCounter';
  counter.innerHTML = 0;

  //Puts the image, label, and counter into its specific Cat Instance Container
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
      if (document.getElementById(countID).parentElement.classList.contains('active'))
        document.getElementById(countID).innerHTML ++;
    }
  })(counter.id));

  //CREATE MENU ITEM
  var menuItem = document.createElement('div');
  var menuImg = document.createElement('img');

  //Setup img element for the menu button
  menuImg.className = 'menu-item-image';
  menuImg.setAttribute('alt', ('Menu Item Image ' + v + ', Hong Kong Web developer'));
  menuImg.setAttribute('src', imgsrc);

  menuItem.appendChild(menuImg);



  //Clicking A Menu Item will show the corresponding Cat Instance
  menuItem.addEventListener('click', (function (countID) {
    return function () {
      if (!document.getElementById(countID).parentElement.classList.contains('active')) {
        //Hide the currently active Instance
        document.getElementsByClassName('active')[0].classList.toggle('active');
        //Show the selected Instance
        document.getElementById(countID).parentElement.classList.toggle('active');
      }
    };
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
  mDisCon.appendChild(menuItem);
  iDisCon.appendChild(imgBox);
}

iDisCon.firstChild.classList.toggle('active');
document.getElementById('menu').appendChild(mDisCon);
document.getElementById('display-container').appendChild(iDisCon);






















