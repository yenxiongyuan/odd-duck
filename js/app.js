'use strict';

console.log('working');

// ! Globals

let duckArray = [];

// ! Dom References

// ! Helper/Utilty Functions

// ! Event Handlers

// ! Odd Duct Constructor

function Duck(name, fileExtension = '.jpg') {
  this.name = name;
  this.imagePath = `img/assets/${name}.${fileExtension}`;
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
let penSweep = new Duck('pen-sweep');
let scissors = new Duck('scissors');
let shark = new Duck('shark');
let sweep = new Duck('sweep', '.png');
let tauntaun = new Duck('tauntaun');
let unicorn = new Duck('unicorn');
let waterCan = new Duck('water-can');
let wineGlass = new Duck('wine-glass');



duckArray.push(bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, penSweep, scissors, shark, sweep, tauntaun, unicorn, waterCan, wineGlass);