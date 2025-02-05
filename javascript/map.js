// JavaScript Map Reference
// A Map holds key-value pairs where the keys can be any datatype.
// Xarita kalit-qiymat juftligini o'z ichiga oladi, bu erda kalitlar har qanday ma'lumot turi bo'lishi mumkin.

// Creating a Map object by passing an array to the new Map() constructor:
// new Map()	Creates a new Map object

// clear()	Removes all the elements from a Map
// delete()	Removes a Map element specified by a key
// entries()	Returns an iterator object with the [key, value] pairs in a Map
// forEach()	Invokes a callback for each key/value pair in a Map
// get()	Gets the value for a key in a Map
// groupBy()	Groups object elements according to returned callback values
// has()	Returns true if a key exists in a Map
// keys()	Returns an iterator object with the keys in a Map
// set()	Sets the value for a key in a Map
// size	Returns the number of Map elements
// values()	Returns an iterator object of the values in a Map

// const fruits  = new Map ([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ])

// const getFruit = fruits.get('apples')
//   console.log(getFruit);// valuesini omaiz ekan 500
///////////////////
// Creating a new Map object and add elements with the set() method:

// const fruits = new Map();

// fruits.set('apple', 500);
// fruits.set('bananas', 300);
// fruits.set('orange', 200);

// console.log(fruits);

// let x = fruits.get("apple")
// document.getElementById("ethan").innerHTML = "The value of apples is " + x;
//////////////////////////////////
// try {
//     adddlert("Welcome guest!");
//   }
//   catch(err) {
//     document.getElementById("ethan").innerHTML = err.message;
//   }