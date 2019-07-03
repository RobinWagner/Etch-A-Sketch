let dimensions = 16;
let container = document.querySelector('#container');

for (let squareRow = 0; squareRow < dimensions; squareRow++) {
  for (let squareColumn = 0; squareColumn < dimensions; squareColumn++) {
    let div = document.createElement('div');
    div.setAttribute('id', 'square');
    container.appendChild(div);
  }
}

container.addEventListener('mouseover', (event) => {
  if (event.target.id == 'square') {
    event.target.setAttribute('class', 'hover');
  }
});