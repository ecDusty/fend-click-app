"use strict";


/*==================

     The MODEL

===================*/

var model = {
  currentCat: null,
  cats: [
    {
      clickCntr: 0,
      name: '',
      imgSrc: 'image-1',
      imgAttribution: 'https://www.flickr.com/photos/poplinre/625069434/in/photostream/'
    },
    {
      clickCntr: 0,
      name: '',
      imgSrc: 'image-2',
      imgAttribution: 'https://www.flickr.com/photos/chewie/2290467335'
    },
    {
      clickCntr: 0,
      name: '',
      imgSrc: 'image-3',
      imgAttribution: 'https://www.flickr.com/photos/dmzhuk1/13336297525/'
    },
    {
      clickCntr: 0,
      name: '',
      imgSrc: 'image-4',
      imgAttribution: 'https://www.flickr.com/photos/haituoi/12174748174/'
    },
    {
      clickCntr: 0,
      name: '',
      imgSrc: 'image-5',
      imgAttribution: 'https://www.flickr.com/photos/crerwin/1090235720/in/photolist-fpoqBx-2EkK6A-jd89Zh-oXYAc3-rbR7a7-eQyQ9s-pNfUb3-f8Lzve-7wUUmJ-neyNMh-fF1SNo-guvpL7-djzdoC-rRUeFg-dwECB4-byETEf-96GXNo-nD8t86-i3Px3A-eSjzEX-e8hn6f-u4ANKb-aj5nzB-bCywUs-7CnHSG-amRMr6-gsgu54-sBnYXd-doMGnr-rjNQrb-7xQDb4-e5tZLn-swMbdu-aVfJNM-bwJzGz-f3mWZv-qAudKg-76Vzfm-kb2n93-4BignY-96GXk5-hoYTLY-pLcapW-r6ud1t-qd3RjQ-4rPruQ-nF4Ynj-9oXBFj-5hJtCy-fJ6ud6'
    },
    {
      clickCntr: 0,
      name: '',
      imgSrc: 'image-6',
      imgAttribution: 'https://www.flickr.com/photos/jetske'
    },
    {
      clickCntr: 0,
      name: '',
      imgSrc: 'image-7',
      imgAttribution: 'https://www.flickr.com/photos/8494589@N06/2177097057'
    },
    {
      clickCntr: 0,
      name: '',
      imgSrc: 'image-8',
      imgAttribution: 'https://www.flickr.com/photos/deerwooduk/579761138'
    }
  ],

  catNames: [
    'Whiskers',
    'Buttons',
    'Mr. Wilkinson',
    'James Bond',
    'Ms. Patterson',
    'Kronk',
    'Titan',
    'Tims Pennyworth'
  ],

  catImgs: [
    'image-1',
    'image-2',
    'image-3',
    'image-4',
    'image-5',
    'image-6',
    'image-7',
    'image-8'
  ],

  //Bringing in the Fisher-Yates Array Shuffle Method. A great explanation and examples can be found here: https://bost.ocks.org/mike/shuffle/
  arrayShuffle: function (array) {
    var arrayLength = array.length,
        arToRandomize, randomPoint;
    while (arrayLength) {
      randomPoint = Math.floor(Math.random() * arrayLength--);
      arToRandomize = array[arrayLength];
      array[arrayLength] = array[randomPoint];
      array[randomPoint] = arToRandomize;
    }
  }
};

/*==================

      OCTOPUS

===================*/


var octopus = {

  init: function() {
    // set our current cat to the first one in the list
    model.currentCat = model.cats[0];

    model.arrayShuffle(model.catNames);
    model.arrayShuffle(model.catImgs);
    for (var i = 0; i < model.cats.length;i++) {
      model.cats[i].name = model.catNames[i];
      model.cats[i].imgSrc = model.catImgs[i];
    }
    // tell our views to initialize
    catListView.init();
    catView.init();
    adminView.init();
  },

  getCurrentCat: function() {
    return model.currentCat;
  },

  getCats: function() {
    return model.cats;
  },

  // set the currently-selected cat to the object passed in
  setCurrentCat: function(cat) {
    model.currentCat = cat;
  },

  // increments the counter for the currently-selected cat
  incrementCounter: function() {
    model.currentCat.clickCntr++;
    catView.render();
  },

  setCatCounter: function(cat, num) {
    cat.clickCntr = num;
  },

  getImageList: function() {
    return model.catImgs;
  }
};



/*==================

      THE VIEW

===================*/

var catView = {

  init: function() {
      // store pointers to our DOM elements for easy access later
      this.catElem = document.getElementById('cat');
      this.catNameElem = document.getElementById('cat-name');
      this.catImageElem = document.getElementById('cat-img');
      this.countElem = document.getElementById('cat-count');

      // on click, increment the current cat's counter
      this.catImageElem.addEventListener('click', function(){
          octopus.incrementCounter();
      });

      // render this view (update the DOM elements with the right values)
      this.render();
  },

  render: function() {
      // update the DOM elements with values from the current cat
      var currentCat = octopus.getCurrentCat();
      this.countElem.textContent = currentCat.clickCntr;
      this.catNameElem.textContent = currentCat.name;
      this.catImageElem.src = '/images/' + currentCat.imgSrc + '.jpg';
  }
};

var catListView = {

  init: function() {
      // store the DOM element for easy access later
      this.catListElem = document.getElementById('menu');

      // render this view (update the DOM elements with the right values)
      this.render();
  },

  render: function() {
    var cat, elem, img, i;
    // get the cats we'll be rendering from the octopus
    var cats = octopus.getCats();

    // empty the cat list
    this.catListElem.innerHTML = '';

    // Create a Title for the Menu
    var mTitle = document.createElement('h2');
    mTitle.id = 'menu-title';
    mTitle.innerHTML = 'MENU';

    this.catListElem.appendChild(mTitle);

    // Create container for menu items
    var mCon = document.createElement('div');
    mCon.id = 'menu-container';

    // Loop over the cats, and add to menu items
    for (i = 0; i < cats.length; i++) {
        // this is the cat we're currently looping over
      cat = cats[i];

      // make a new cat list item and set its Image
      elem = document.createElement('div');
      elem.className = 'menu-item';

      img = document.createElement('img');
      img.className = 'menu-item-image';
      img.setAttribute('src', '/images/' + cat.imgSrc + '.jpg');
      img.setAttribute('alt', 'Menu Item Image ' + i + ', Hong Kong Web developer');

      elem.appendChild(img);
      // on click, setCurrentCat and render the catView
      // (this uses our closure-in-a-loop trick to connect the value
      //  of the cat variable to the click event function)
      elem.addEventListener('click', (function(catCopy) {
        return function() {
          octopus.setCurrentCat(catCopy);
          catView.render();
        };
      })(cat));

      // finally, add the element to the list
      this.catListElem.appendChild(elem);
    }
  }
};

var adminView = {
  init: function() {
    // Grab the settings element and button to open it
    this.adminElem = document.getElementById('settings');
    this.adminBtn = document.getElementById('admin-btn');

    // Grab Elements inside Settings Form
    this.newName = document.getElementById('newCatName');
    this.newImg = document.getElementById('newImgSrc');
    this.availImgList = document.getElementById('imgsAvail');
    this.newCount = document.getElementById('newCatCount');
    this.cancelBtn = document.getElementById('Cancel');
    this.confirmBtn = document.getElementById('Confirm');

    // Render this view (update the DOM elements with the right values)
    this.render();
  },

  render: function() {
    // Add event listener which will see it any of the buttons in the settings panel were clicked
    this.adminElem.addEventListener('click', function (e) {

      // Add nice transition to adminElem
      this.setAttribute('style','transition: all 0.5s linear;');

      var cTarget = e.target,
          curCat = octopus.getCurrentCat();

      // Check to make sure the image inputed is available
      var catImgs = octopus.getImageList(),
          imgAvail = false;

      // Toggle if Settings should show

      if (cTarget == adminView.adminBtn || cTarget == adminView.cancelBtn || cTarget == adminView.confirmBtn) {
        adminView.showForm();
      }

      // What happens when confirm button is clicked
      if (cTarget == adminView.confirmBtn) {
        adminView.newImg.value = adminView.newImg.value.toLowerCase();
        for (var i = 0; i < catImgs.length; i++) {
          if (catImgs[i] == adminView.newImg.value)
            imgAvail = true;
        }

        // If the image is available, set it, if not give user an alert
        if (imgAvail == true) {
          curCat.imgSrc = adminView.newImg.value;
        } else {
          alert('Please make sure to use an image that is available!');
          adminView.showForm();
        }

        // Check and make sure a number has been used with the counter
        if (!isNaN(adminView.newCount.value)) {
          curCat.clickCntr = adminView.newCount.value;
        } else {
          alert('Please make sure to use a number for the click counter!');
          adminView.showForm();
        }

        // Check there is actually a new name for your cat
        if(adminView.newName.value != '') {
        curCat.name = adminView.newName.value;
        } else {
          alert('Please make sure to use a Name for your cat!');
          adminView.showForm();
        }

        // Render the image again with the new values.
        catView.render();

      } else if (cTarget == adminView.adminBtn && adminView.adminElem.classList.contains('open')) {
        // Populate form
        adminView.popForm(curCat,catImgs);
      }
    });
  },

  popForm: function(cat,imgs) {
    // Used to populate the form with information
    this.newImg.value = cat.imgSrc;
    this.newName.value = cat.name;
    this.newCount.value = cat.clickCntr;

    var imgValues = '';

    for (var i = 0; i < imgs.length; i++) {
      if (i == (imgs.length-1)){
        imgValues = imgValues + imgs[i];
      } else {
        imgValues = imgValues + imgs[i] + ', ';
      }
    }

    this.availImgList.innerHTML = imgValues;
  },

  showForm: function() {
    this.adminElem.classList.toggle('open');
  }
};

// Lets run our Octopus (And App)!
octopus.init();






/*==================

    ! OLD CODE !

===================*/

//function shuffle(array) {
//  var m = array.length, t, i;
//  while (m) {
//    i = Math.floor(Math.random() * m--);
//    t = array[m];
//    array[m] = array[i];
//    array[i] = t;
//  }
//}
//
////How many images would you like to produce to choose from?
//var numImgs = 7;
//
////How many actual images are available?
//var numImgsAvail = 6;
//var numImgsAvailCounter = 1;
//
////Array of Cat Names. I constantly add to this everytime I edit the JavaScript File
//var catNames = [
//  'Whiskers',
//  'Buttons',
//  'Mr. Wilkinson',
//  'James Bond',
//  'Ms. Patterson',
//  'Kronk',
//  'Titan'
//];
//var catNameCounter = 0;
//
////Shuffle the Order of cat names. So that they  aren't always the same
//shuffle(catNames);
//
////Create a container to hold all the Cat Instances of the cats
//var iDisCon = document.createElement('div');
//iDisCon.id = 'image-container';
//iDisCon.innerHTML = '';
//
////Create a container for the menu item of each Cat Instance
//var mDisCon = document.createElement('div');
//mDisCon.id = 'menu-container';
//document.getElementById('menu').innerHTML = '';
//
//var mTitle = document.createElement('h2');
//mTitle.id = 'menu-title';
//mTitle.innerHTML = 'MENU';
//
//mDisCon.appendChild(mTitle);
//
////Creates all the Cat Instances and puts them into the iDisCon
//for (var i = 0; i < numImgs; i++) {
//
//  //CREATE CAT INSTANCE
//  var v = i+1;
//  var clicks = 0;
//  var imgBox = document.createElement('div');
//  var img = document.createElement('img');
//  var label = document.createElement('h4');
//  var counter = document.createElement('h3');
//  var imgsrc = 'images/image-' + numImgsAvailCounter + '.jpg';
//
//  //Add needed ID & Class to the Cat Instance container
//  imgBox.className = 'imgBox';
//  imgBox.id = 'imgBox' + v;
//
//  //Sets up the Cat Image
//  img.className = 'clicker-image';
//  img.setAttribute('alt', ('Clicker Image ' + v + ', Hong Kong Web developer'));
//  img.setAttribute('src', imgsrc);
//
//  //Creates a Name for the Cat Instance
//  label.className = 'image-label';
//  label.textContent = catNames[catNameCounter];
//
//  //Creates the counter for the Cat Instance
//  counter.id = 'img' + v;
//  counter.className = 'imgCounter';
//  counter.innerHTML = 0;
//
//  //Puts the image, label, and counter into its specific Cat Instance Container
//  imgBox.appendChild(img);
//  imgBox.appendChild(label);
//  imgBox.appendChild(counter);
//
//  //Mouse interaction. Everytime an image is clicked, the counter goes up
//  imgBox.addEventListener('click', (function (countID) {
//    return function () {
//      document.getElementById(countID).innerHTML ++;
//    }
//  })(counter.id));
//
//  //Keyboard interaction. Everytime a keyboard key is hit, the active image counter goes up
//  window.addEventListener('keydown', (function (countID) {
//    return function () {
//      if (document.getElementById(countID).parentElement.classList.contains('active'))
//        document.getElementById(countID).innerHTML ++;
//    }
//  })(counter.id));
//
//  //CREATE MENU ITEM
//  var menuItem = document.createElement('div');
//  var menuImg = document.createElement('img');
//
//  //Setup img element for the menu button
//  menuImg.className = 'menu-item-image';
//  menuImg.setAttribute('alt', ('Menu Item Image ' + v + ', Hong Kong Web developer'));
//  menuImg.setAttribute('src', imgsrc);
//
//  menuItem.appendChild(menuImg);
//
//
//
//  //Clicking A Menu Item will show the corresponding Cat Instance
//  menuItem.addEventListener('click', (function (countID) {
//    return function () {
//      if (!document.getElementById(countID).parentElement.classList.contains('active')) {
//        //Hide the currently active Instance
//        document.getElementsByClassName('active')[0].classList.toggle('active');
//        //Show the selected Instance
//        document.getElementById(countID).parentElement.classList.toggle('active');
//      }
//    };
//  })(counter.id));
//
//  //If there are more Cat instances than cat images available. Start from the beginning of the image counter.
//  if (numImgsAvailCounter < numImgsAvail) {
//    numImgsAvailCounter++;
//  } else {
//    numImgsAvailCounter = 1;
//  }
//
//  //If there are more Cat instances than cat Names available. Reshuffle the Cat Names array and start from the beginning of the list
//  if (catNameCounter < catNames.length-1) {
//    catNameCounter++;
//  } else {
//    catNameCounter = 0;
//    shuffle(catNames);
//  }
//  mDisCon.appendChild(menuItem);
//  iDisCon.appendChild(imgBox);
//}
//
//iDisCon.firstChild.classList.toggle('active');
//document.getElementById('menu').appendChild(mDisCon);
//document.getElementById('display-container').appendChild(iDisCon);
//
//
//
//
//
//
//
//
//
//
//
//
//
//








