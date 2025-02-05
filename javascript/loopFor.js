// Loops can execute a block of code a number of times.
// Looplar kod blokini bir necha marta bajarishi mumkin.

// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// let text = "";
// for (let i = 0; i < cars.length; i++) {
//   text += cars[i] + "<br>";
// }

// document.getElementById("ethan").innerHTML = text;

////////////
// Different Kinds of Loops
// for - loops through a block of code a number of times
// ---> for - kod blokini bir necha marta aylantiradi

// for/in - loops through the properties of an object
// ----> for/in - ob'ektning xossalari bo'ylab aylanish

// for/of - loops through the values of an iterable object
// ----> for/of - takrorlanadigan ob'ektning qiymatlari bo'ylab aylanish

// while - loops through a block of code while a specified condition is true
//---> belgilangan shart rost bo'lganda kod bloki bo'ylab aylanadi
  
// do/while - also loops through a block of code while a specified condition is true
// ---> do/while - belgilangan shart to'g'ri bo'lganda ham kod bloki orqali aylanadi
//////////////////////////////

// let text = "";
// for (let i = 0; i < 5; i++){
//     text += "The number is" + i + "<br>"
// }
// document.getElementById("ethan").innerHTML = text;
// console.log(text);
/////////////////////////////
// JavaScript For In
// The JavaScript for in statement loops through the properties of an Object:
// JavaScript for in bayonoti ob'ektning xususiyatlari bo'ylab aylanadi:
//////
// const person = { fname: "John", lname: "Doe", age: 25 }; 
// let text = "";
// for (let x in person) {
//     text += person[x] + "<br>"
// }
// document.getElementById('ethan').innerHTML  = text
////////////////////////

// const numbers = [45, 4, 9, 16, 25];
// let text="";
// for (let i in numbers) {
//     text +=numbers[i] + "<br>"
// }
// document.getElementById('ethan').innerHTML  = text

/////////// Do not use for in over an Array if the index order is important.
///////////The index order is implementation-dependent, and array values may not be accessed in the order you expect.
///////////It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.
// const numbers = [45, 4, 9, 16, 25];
// let text = "";
// numbers.forEach(myFunction)
// document.getElementById('ethan').innerHTML  = text

// function myFunction(value,index,array) {
//     return text += value + "<br>"
// }
/////////////////////////////
// JavaScript For Of
// The JavaScript for of statement loops through the values of an iterable object.
// JavaScript for bayonoti takrorlanadigan ob'ektning qiymatlari orqali aylanadi.
////
// in arrayda indexlarini olib beradi
// of arrayda propertylarini olib beradi

// const cars = ["BMW", "Volvo", "Mini"];
// let text = "";
// for (let i of cars) {
//     text += i + "<br>"
// }
// document.getElementById('ethan').innerHTML  = text
/////////////////////////////////////


