'use strict';

console.log('working');

// ! Globals

let duckArray = [];

// ! Dom References
let imageContainer = document.getElementById('img-container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');

// ! Helper/Utilty Functions

function randomDuck() {
  return Math.floor(Math.random() * duckArray.length)
}

function renderImages() {
  let imgOneRandom = randomDuck();
  let imgTwoRandom = randomDuck();
  let imgThreeRandom = randomDuck();

  while (imgOneRandom === imgTwoRandom === imgThreeRandom) {
    imgTwoRandom = randomDuck();
  }

  imgOne.src = duckArray[imgOneRandom].imagePath;
  imgTwo.src = duckArray[imgTwoRandom].imagePath;
  imgThree.src = duckArray[imgThreeRandom].imagePath;

  imgOne.alt = duckArray[imgOneRandom].name;
  imgTwo.alt = duckArray[imgTwoRandom].name;
  imgThree.alt = duckArray[imgThreeRandom].name;

  duckArray[imgOneRandom].views++;
  duckArray[imgTwoRandom].views++;
  duckArray[imgThreeRandom].views++;
}

// ! Event Handlers

function handleImageClick(event) {
  console.dir(event.target);

  let duckClicked = event.target.alt;

  console.log('image clicked >>>', duckClicked);
  
  for (let i = 0; i < duckArray.length; i++) {
    if (duckArray[i].name === duckClicked) {
      duckArray[i].clicks++;
    }
  }
}

// ! Odd Duct Constructor

function Duck(name, fileExtension = '.jpg') {
  this.name = name;
  this.imagePath = `img/assets/${name}${fileExtension}`;
  this.clicks = 0;
  this.views = 0;
}



// ! Executable

let bag = new Duck('bag');
let banana = new Duck('banana');
let bathroom = new Duck('bathroom');
let boots = new Duck('boots');
let breakfast = new Duck('breakfast');
let bubblegum = new Duck('bubblegum');
let chair = new Duck('chair');
let cthulhu = new Duck('cthulhu');
let dogDuck = new Duck('dog-duck');
let dragon = new Duck('dragon');
let pen = new Duck('pen');
let petSweep = new Duck('pet-sweep');
let scissors = new Duck('scissors');
let shark = new Duck('shark');
let sweep = new Duck('sweep', '.png');
let tauntaun = new Duck('tauntaun');
let unicorn = new Duck('unicorn');
let waterCan = new Duck('water-can');
let wineGlass = new Duck('wine-glass');



duckArray.push(bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, waterCan, wineGlass);

renderImages();

imageContainer.addEventListener('click', handleImageClick);