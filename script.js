let dimensions = 16;
let container = document.querySelector('#container');
let clearButton = document.querySelector('#clear');
let defaultColorButton = document.querySelector('#defaultColor');
let randomColorButton = document.querySelector('#randomColor');

let colorSelected = false;

function createGrid(dimensions) {
  // Remove existing grid
  if (document.querySelector('#square')) {
    while (container.hasChildNodes()) {
      container.removeChild(container.firstChild);
    }
  }

  // Create new grid
  for (let squareRow = 0; squareRow < dimensions; squareRow++) {
    for (let squareColumn = 0; squareColumn < dimensions; squareColumn++) {
      let div = document.createElement('div');
      div.setAttribute('id', 'square');
      let gridSize = 960 / dimensions;
      div.setAttribute('style', 'width: ' + gridSize + 'px; height: ' + gridSize + 'px;');
      container.appendChild(div);
    }
  }
}

function randomColor() {
  let rgbColor = '#';
  for (let i = 0; i < 6; i++) {
    let rgbValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    let randomRgbValue = rgbValues[Math.floor(Math.random() * rgbValues.length)];
    rgbColor += randomRgbValue;
  }
  return rgbColor;
}

container.addEventListener('mouseover', (event) => {
  if (event.target.id == 'square') {
    if (event.target.style.backgroundColor) {
      if (colorSelected) {
        // 10% more black
      let stringValue = String(event.target.style.filter);
      let brightnessValue = stringValue.substring(stringValue.indexOf('(')+1, stringValue.indexOf('%'));
      console.log(brightnessValue);
      event.target.style.filter = 'brightness('+(brightnessValue - 10)+'%)';
      } else {
        event.target.style.backgroundColor = 'black';
      }  
    } else {
      event.target.style.filter = 'brightness(100%)';
      if (colorSelected) {
        event.target.style.backgroundColor = randomColor();
      } else {
        event.target.style.backgroundColor = 'black';
      }
    }
  }
});

clearButton.addEventListener('click', () => {
  let divs = document.querySelectorAll('#square');
  let divArray = Array.from(divs);
  for (let i = 0; i < divArray.length; i++) {
    divArray[i].classList.remove('hover');
  }
  createNewGrid();
});

defaultColorButton.addEventListener('click', () => {
  colorSelected = false;
})

randomColorButton.addEventListener('click', () => {
  colorSelected = true;
});

function createNewGrid() {
  dimensions = prompt('Enter value:');
  createGrid(dimensions);
}

createGrid(dimensions);