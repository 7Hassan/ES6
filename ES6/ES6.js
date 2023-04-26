//TODO: Functions
//? Arrow Functions
const name = name => name.toUpperCase()

//? Generator Functions
function* getEmployee() {
  console.log('the function has started');
  const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];
  for (const name of names) {
    console.log(name);
    yield; // pause a Function
    //yield name; // value of yield
  }
  console.log('the function has ended');
}
const runGetEmployee = getEmployee()
runGetEmployee.next() // Amanda
runGetEmployee.next().value // Amanda, yield value

//? Defaults and Destructuring
function createGrid([width = 5, height = 5]) { return `${width} x ${height}`; }
createGrid(); // error
createGrid([]); // 5 x 5 
createGrid([2]); // 2 x 5 
createGrid([2, 3]); // 2 x 3 
createGrid([undefined, 3]); // 5 x 3 
function createGrid([width = 5, height = 5] = []) { return `${width} x ${height}`; }
createGrid(); // 5 x 5 


//TODO: Classes
// Class is a functions in js
//? ES5 "Class" Recap
function Plane(numEngines) { this.numEngines = numEngines } // constructor
Plane.prototype.startEngines = function () { console.log('starting engines...') } // method
var objPlane = new Plane(1);
objPlane.startEngines();

//? ES6 "Class" Recap
class Plane {
  constructor(numEngines) { this.numEngines = numEngines; }
  startEngines() { console.log('starting engines…'); } // method
}
const objPlane = new Plane(1);
objPlane.startEngines();

//? "Subclasses" with ES6
// Super and Extends
class Apple { }
class GrannySmith extends Apple {
  constructor(tartnessLevel, energy) {
    this.tartnessLevel = tartnessLevel; // `this` before `super` will throw an error!
    super(energy);
  }
}

//TODO: Iterable Protocol
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const digit of digits) { console.log(digit) }

//TODO: Set
//A set is an object that has no repeating values.
const games = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']);
console.log(games); //Set {'Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart'}

//? Modifying Sets
games.size // 3
games.has('September') // false
games.values();
games.add('Banjo-Tooie');
games.add('Age of Empires');
games.delete('Super Mario Bros.');
games.clear(); // Set {}
for (const game of games) { console.log(game) } // loop

//TODO: Maps
//A map is an object that has no repeating values.
// map for object, set for array
const employees = new Map();
employees.set('james.parkes@udacity.com', {
  firstName: 'James',
  lastName: 'Parkes',
  role: 'Content Developer'
});
employees.set('julia@udacity.com', {
  firstName: 'Julia',
  lastName: 'Van Cleve',
  role: 'Content Developer'
});
employees.set('richard@udacity.com', {
  firstName: 'Richard',
  lastName: 'Kalehoff',
  role: 'Content Developer'
});
console.log(employees);

//TODO: Promises
//? Proxies
const targetObj = { status: 200 }
const proxy = new Proxy(targetObj, {
  get(target, property) {
    // target = targetObj
    // property = status
    return target[property] // targetObj.status
  },
  set(target, property, value) {
    target[property] = value
  }
})
console.log('🚀 ', proxy.status) // "get" 200
proxy.status = 400 // "set" 
console.log('🚀 ', proxy.status) // 400
