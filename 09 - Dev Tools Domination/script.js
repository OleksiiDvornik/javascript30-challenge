const dogs = [
  { name: 'Snickers', age: 2 }, 
  { name: 'hugo', age: 8 }
];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Styled
console.log('%c I am some styled text in cosole log', 'color: red');

// Warning
console.warn('Oh nooo');

// Error
console.error('Shit!');

// Info
console.info('Just some info');

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong!');

// Clearing
console.clear();

// Viewing DOM Elements
console.dir(p);

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`); 
  console.log(`${dog.name} is ${dog.age * 7} dog years old`); 
  console.groupEnd(`${dog.name}`);
})

// Counting
console.count('Wes');
console.count('Wes');
console.count('Wes');
console.count('Wes');
console.count('Wes');

// Timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  })

// Table

console.table(dogs);
