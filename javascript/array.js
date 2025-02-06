// The JavaScript Array Object

// add new array value
// const array = []
// array[0] = 'BMW'
// array[1] = 'Mers'
// console.log(array) // ['BMW', 'Mers']
///////////////////////////////////////
// Quyidagi misol ham Massivni yaratadi va unga qiymatlarni tayinlaydi
// const cars = new Array('BMW', 'Mers', 'Audi')
// console.log(cars);// ['BMW', 'Mers', 'Audi']
//////////////////////////////////////
// const cars = ["Saab", "Volvo", "BMW"];
// document.getElementById('ethan').innerHTML = cars[0]// Saab ni olib berdi
/////////////////////////////////////
// Changing an Array Element
// const cars = ["Saab", "Volvo", "BMW"];
// cars[0] = "BMW"
// console.log(cars);//  ['BMW', 'Volvo', 'BMW']
//////////////////////////////////////
// const fruits = ['Banana', 'Orange', 'Apple', 'Mango']
// console.log('fruits ->', typeof fruits) // object
// const res = fruits.toString()
// console.log('res ->', typeof res) // string

/////////////////////////////////////////////
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// const res = fruits[fruits.length -1]
// console.log(res);// Mango
////////////////////////////////////////////
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruitsleng = fruits.length
// let t = "<ul>"
// for (let i = 0; i < fruitsleng; i++){
//     t += "<li> " + fruits[i] + "</li>"
// }
// t += "</ul>";
// document.getElementById("ethan").innerHTML = t;
// console.log(t);
////////////////////////////////////////////
// const fruits = ['Banana', 'Orange', 'Apple', 'Mango']

// let text = '<ul>'
// fruits.forEach(myFunction)
// text += '</ul>'

// document.getElementById('ethan').innerHTML = text

// function myFunction(value) {
// 	text += '<li>' + value + '</li>'
// }
//////////////////////////////

// The easiest way to add a new element to an array is using the push() method:
// const fruits = ['Banana', 'Orange', 'Apple']

// function myFunction() {
// 	fruits.push('Lemon')
// 	document.getElementById('ethan').innerHTML = fruits
// }
// myFunction()

//////

// const fruits = ['Banana', 'Orange', 'Apple']

// function myFunction() {
// 	fruits[fruits.length] = 'Lemon'
// 	document.getElementById('ethan').innerHTML = fruits
// }

////////////////////////////////
// isArray() Method  arrayligini tekshirib beradi booleanni qaytaradi
// const fruits = ["Banana", "Orange", "Apple"];
// const res = Array.isArray(fruits)
// console.log(res); // true
///////////////////////////////////
// Agar ob'ekt berilgan konstruksiya tomonidan yaratilgan bo'lsa, instanceof operatori true qiymatini qaytaradi
// const array = new Array('apples', 'bananas', 'oranges') // true
// const fruits = ['apples', 'bananas', 'oranges'] // true
// const number = 3
// const res = array instanceof Array //true
// const res = fruits instanceof Array //true
// const res = number instanceof Array // false

// console.log(res)
//////////////////////////////////////

// let x = ''
// const obj = {
// 	name: 'Ethan',
// 	age: 32,
// 	cars: [
// 		{ name: 'Ford', models: ['Fiesta', 'Focus', 'Mustang'] },
// 		{ name: 'BMW', models: ['320', 'x3', 'x5'] },
// 		{ name: 'Fiat', models: ['500', 'Panda'] },
// 	],
// }

// for (let i in obj.cars) {
// 	x += '<h2>' + obj.cars[i].name + '</h2>'
// 	for (let j in obj.cars[i].models) {
// 		x += obj.cars[i].models[j] + '<br>'
// 	}
// }
// console.log(x)

// document.getElementById('ethan').innerHTML = x

//////////////////////////////////////////////////
// add new array
// const cars = []

// cars.push('Chevrolet')
// cars.push('Dewo')
// cars.push('Volvo')
// console.log(cars);// ['Chevrolet', 'Dewo', 'Volvo']
////////////
// The new Array() constructor creates an Array object.

// const cars = new Array()
// cars.push("Volvo")
// cars.push("BMW")
// console.log(cars); //  ['Volvo', 'BMW']

////
// const cars = new Array(["Saab", "Volvo", "BMW"])
// console.log(cars);// ['Saab', 'Volvo', 'BMW']
////////////////////////
// The at() method returns an indexed element from an array
// The at() method returns the same as [].
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const res = fruits.at(2)
// let res1 = fruits.at(-1);
// console.log(res);// Apple
// console.log(res1);// Mango
////////////////////////////////////
// The concat() method concatenates (joins) two or more arrays.
// 2 ta arrayni bir biriga qoshib beradi
// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const plusArray = arr1.concat(arr2)
// console.log(plusArray); //  ['Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus']

// document.getElementById('ethan').innerHTML = plusArray
///
// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin"];
// const res  = arr1.concat(arr2,arr3)
// console.log(res); //  ['Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus', 'Robin']
//
// const arr1 = ["Cecilie", "Lone"];
// const arr2 = [1, 2, 3];
// const res = arr1.concat(arr2)
// console.log(res);// ['Cecilie', 'Lone', 1, 2, 3]
/////////////////
// const arr1 = [1, 2, [3, 4]]
// const arr2 = [[5, 6], 7, 8]
// const res = arr1.concat(arr2)
// console.log(res) // [1, 2, Array(2), Array(2), 7, 8]// Array(2) = [3,4],Array(2) = [5,6]
// document.getElementById('ethan').innerHTML = res // diplayda 1 dan 8 gacha
/////////////////////////////////
// The constructor property returns the function that created the Array prototype.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// const res = fruits.constructor
// console.log(res);// ƒ Array() { [native code] }
///////////////////////////////////
// Array copyWithin()  copyWithin() usuli massiv elementlarini massivning boshqa pozitsiyasiga nusxalaydi
// array.copyWithin(target, start, end)

// const fruits = ['Banana', 'Orange', 'Apple', 'Mango']
// const res = fruits.copyWithin(0, 2, 3) // 2 index va 3 index oraligidagi valueni 0 indexga qoyyapdi
// console.log(res)
//////////////////////////////////
// entries() method returns an Iterator object with the key/value pairs from an array:
// entries() usuli massivdagi kalit/qiymat juftlari bilan Iterator obyektini qaytaradi:
// const fruits = ['Banana', 'Orange', 'Apple', 'Mango']
// console.log(typeof fruits) // object

// const res = fruits.entries() // Array Iterator
// console.log(res) // Array Iterator object

// let x = ''
// for (let i of res) {
// 	x += i + '<br>'
// }
// document.getElementById('ethan').innerHTML = x
// ////
// const fruits = ['Banana', 'Orange', 'Apple', 'Mango']

// const res = Object.entries(fruits) // arrayni ichiga array qilib beradikan
// console.log(res)

// let x = ''
// for (let i of res) {
// 	x += i + '<br>'
// }
// console.log(x)
// document.getElementById('ethan').innerHTML = x
///////////////////////////////
// The every() method executes a function for each array element.
// usul har bir massiv elementi uchun funksiyani bajaradi.
// xar bir array elementini functionga paramentir sifatida qoyadi
// const yosh = [32, 33, 16, 40];
// function checkAge(age) {
//     return age > 18;
// }

// const res = yosh.every(checkAge)
//     console.log(res);

// document.getElementById('ethan').innerHTML = res

///////////////
// const ages = [32, 33, 12, 40];

// function inputAge(age) {
//     return age > document.getElementById('ethaniInput').value
// }

// function checkAge() {
//     document.getElementById('ethan').innerHTML = ages.every(inputAge)
// }
///////////////
// fill() ozgartiradi valularini // fill(value, start, end)
// const fruits = ['Banana', 'Orange', 'Apple', 'Mango']
// document.getElementById('ethan').innerHTML = fruits.fill('Kiwi') // Kiwi,Kiwi,Kiwi,Kiwi
///////////////////////
// The filter() method creates a new array filled with elements that pass a test provided by a function.
// usul funksiya tomonidan taqdim etilgan testdan o'tgan elementlar bilan to'ldirilgan yangi massivni yaratadi.
// const ages = [32, 33, 16, 40, 12];
//     document.getElementById('ethan').innerHTML = ages.filter(checkAge) // 32,33,40

// function checkAge(age) {
//        return age >= 18
//     }
////////////////////////////
// const ages = [32, 33, 16, 40, 12];

// function inputAge(age) {
//     return age >= document.getElementById('ethaniInput').value
// }

// function checkAge(age) {
//     return document.getElementById('ethan').innerHTML = ages.filter(inputAge)
// }
///////////////////////////
// find() usuli sinovdan o'tgan birinchi elementning qiymatini qaytaradi
// The find() method executes a function for each array element.find() usuli har bir massiv elementi uchun funksiyani bajaradi.
// const ages = [3, 11, 21, 18, 32, 33]

// document.getElementById('ethan').innerHTML = ages.find(checkAge) // birinchi testdan otgan 21 boldi oshani chiqardi

// function checkAge(age) {
// 	return age > 18
// }

// const ages = [3, 11, 21, 18];

// function inputAge(age) {
//     return age > document.getElementById('ethaniInput').value
// }

// function checkAge() {
//     document.getElementById('ethan').innerHTML = ages.find(inputAge)
// }
///////////////////////////////
// The flat() method concatenates sub-array elements.
// flat() usuli massivning pastki elementlarini birlashtiradi.
// ichki arraydan olib beradi array qilib beradi
// const myArr = [[1, 2], [3, 4], [5, 6]];
// const res = myArr.flat()
// console.log(res);// [1, 2, 3, 4, 5, 6]ichki arraydan olib beradi array qilib beradi
///
// const myArr = [1, 2, [3, [4, 5, 6], 7], 8]
// const res = myArr.flat(2) // array ichida 2 ta array bolgani un 2 ta arrayni olib beradi
// console.log(res)
///////////////////////////
// flatMap() method maps all array elements and creates a new flat array.
// xar bir array elemetini map qilib beradi
// const myArr = [1, 2, 3, 4, 5, 6];
// const newArray = myArr.flatMap(x => [x, x * 10])
// console.log(newArray);//  [1, 10, 2, 20, 3, 30, 4, 40, 5, 50, 6, 60]
/////////////////////////
// The forEach() method calls a function for each element in an array.
// xar bir element uchun funksiyani chaqiradi
//arrayni xar bir elementiga functionni call qilib beradi
// forEach() method is not executed for empty elements.
// const fruits = ["apple", "orange", "cherry"];
// let text =""
// fruits.forEach(myFunction)

// document.getElementById("ethan").innerHTML = text;

// function myFunction(item, index) {
//     text += index + ": " + item + "<br>";
//   }
/////
// const numbers = [65, 44, 12, 4];
// let text = 0;

// numbers.forEach(numFuction)

// function numFuction(item) {
//     text += item
// }
// document.getElementById("ethan").innerHTML = text;
/////////////////////////////////
// Array.from() method returns an array from any object with a length property.
// Array.from() method returns an array from any iterable object.

// let text = "ABCDEFG"
// const res = Array.from(text)
// console.log(res); // ['A', 'B', 'C', 'D', 'E', 'F', 'G']

/////////////////////////////////
// includes() method returns true if an array contains a specified value.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById('ethan').innerHTML = fruits.includes('Apple') // true
// // -----
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML = fruits.includes("Mango", 3);// true
/////////////////////////////////////////////////////////
// The indexOf() method returns the first index (position) of a specified value.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const res = fruits.indexOf("Apple")
// console.log(res); // 2 chi index // agar element bolmasa -1
// const res1 = fruits.indexOf("Cherry")
// console.log(res1); //  agar element bolmasa -1
/////////////////////////////////////////////////////
// isArray() method returns true if an object is an array, otherwise false.
// Array ligini tekshirib beradi
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const res = Array.isArray(fruits)
// console.log(res); // true
/////////////////////////////////////////////////////////
// join() method returns an array as a string.// join() usuli qatorni satr sifatida qaytaradi.
// const fruits = ['Banana', 'Orange', 'Apple', 'Mango']
// const res = fruits.join()
// console.log(typeof res)
// console.log(res)
// //////////////////////
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const res = fruits.join(" + ")
// console.log(res);/// Banana + Orange + Apple + Mango
/////////////////////////////////////////////
// The keys() method returns an Iterator object with the keys of an array.
// const fruits = ['Banana', 'Orange', 'Apple', 'Mango']
// const res = fruits.keys()
// console.log(res) //
// let x = ''
// for (let i of res) {
// 	x += i + '<br>'
// }
// document.getElementById('ethan').innerHTML = x
// console.log(x)
//////////////////////////////////
// map() creates a new array from calling a function for every array element.
// const numbers = [65, 44, 12, 4];
// const newArray = numbers.map(checkNumber)
// console.log(newArray);// [650, 440, 120, 40]

// function checkNumber(num) {
//     return num * 10
// }
// document.getElementById("ethan").innerHTML = newArray;
// ////
// const persons = [
//     {firstname : "Malcom", lastname: "Reynolds"},
//     {firstname : "Kaylee", lastname: "Frye"},
//     {firstname : "Jayne", lastname: "Cobb"}
// ];
//   console.log(persons);

// const res = persons.map(getFullName)
// console.log(res);//  ['Malcom Reynolds', 'Kaylee Frye', 'Jayne Cobb']

// function getFullName(item) {
//     return [item.firstname,item.lastname].join(" ")
// }
/////////////////////////////////
// Array.of() method creates a new array from any number of arguments.
// Array.of() method can take any type of arguments.
// Array.of(element1, element2, ... , elementN)
// const newArray = Array.of('Banana', 'Orange', 'Apple', 'Mango', 32)
// console.log(newArray) // ['Banana', 'Orange', 'Apple', 'Mango',32]
/////////////////////////////
// pop() method removes (pops) the last element of an array
// pop() method returns the removed element.

// const fruits = ["Banana", "Orange", "Apple", "Mango"]
// const res =fruits.pop()
// console.log(fruits);// ['Banana', 'Orange', 'Apple']
// console.log(res);// res returned remove element
/////////////////////////////////////////
// prototype allows you to add new properties and methods to arrays
//prototype is a property available with all JavaScript objects.

// Array.prototype.myFunction = function () {
// 	for (let i = 0; i < i.length; i++) {
// 		this[i] += this[i].toUpperCase
// 	}
// }
// const fruits = ['Banana', 'Orange', 'Apple', 'Mango']
// fruits.myFunction()
// console.log(fruits)
// document.getElementById('ethan').innerHTML = fruits
///////////////////////////////////////////
// push() method adds new items to the end of an array.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push('Olma')//['Banana', 'Orange', 'Apple', 'Mango', 'Olma']
// console.log(fruits);

// fruits.push("Kiwi", "Cherry")
// console.log(fruits);// ['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi', 'Cherry']
///////////////////////////////////////////////
// reduce() method executes a reducer function for array element.
// reduce() method returns a single value: the function's accumulated result.
// reduce() usuli bitta qiymatni qaytaradi: funktsiyaning to'plangan natijasini
// bizga sonlarni qoshib beradi
// const numbers = [150, 40, 15]
// const res = numbers.reduce(myFunction)

// function myFunction(total, num) {
// 	console.log('total', total)
// 	console.log('num', num)
// 	return total - num
// }
// console.log(res)

// document.getElementById('ethan').innerHTML = res
/////
// const numbers = [15.5, 2.3, 1.1, 4.7];

// const res = numbers.reduce(myFunction)

// function myFunction(total, item) {
//     return total + Math.round(item)
// }
// document.getElementById('ethan').innerHTML = res
// console.log(res);
///////////////////////////////////////////////
// reverse() method reverses the order of the elements in an array.
// usul massivdagi elementlarning tartibini o'zgartiradi.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.reverse()
// console.log(fruits);// ['Mango', 'Apple', 'Orange', 'Banana'] teskarisini qilib beradi
/////////////////////////////////////////
// shift() method removes the first item of an array.// method returns the shifted element.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift()
// console.log(fruits);// ['Orange', 'Apple', 'Mango']
// const res = fruits.shift()
// console.log(res);// Orange
//////////////////////////////////////////////
// slice() method returns selected elements in an array, as a new array.
// usul massivdagi tanlangan elementlarni yangi massiv sifatida qaytaradi.
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const res = fruits.slice(1, 3)
// console.log(fruits);
// console.log(res);// ['Orange', 'Lemon']
///////////////////////////////////////
// some() method checks if any array elements pass a test (provided as a callback function).
// some() usuli har qanday massiv elementlari testdan o'tganligini tekshiradi (qayta qo'ng'iroq funktsiyasi sifatida taqdim etilgan).
// usuli har bir massiv elementi uchun bir marta qayta qo'ng'iroq qilish funksiyasini bajaradi.
// returns boolean xammasi check bolgandan ekyin true or false
// const ages = [3, 10, 18, 20]
// const res = ages.some(myFunction)

// function myFunction(age) {
// 	return age > 18
// }

// console.log(res) // true
//////
// const numbers = [4, 12, 16, 20];

// function inputFunction(x) {
//     return x > document.getElementById('ethaniInput').value;
// }

// function checkAge() {
//     document.getElementById('ethan').innerHTML = numbers.some(inputFunction)
// }

////////////////////////////////////////////
// sort() method sorts the elements of an array.
// usul massiv elementlarini tartiblaydi.
// usul elementlarni alfavit va o'sish tartibida satrlar sifatida tartiblaydi.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort()
// console.log(fruits);// ['Apple', 'Banana', 'Mango', 'Orange']
// const res = fruits.sort()
// console.log(res);// ['Apple', 'Banana', 'Mango', 'Orange']
///////////////////////////////////////////
// splice() method adds and/or removes array elements.
// usuli asl massivning ustiga yozadi.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const res = fruits.splice(0, 2, "Lemon", "Kiwi", "Cherry")// 0chi indexdan qoyib 2indexdan arrayni ozidagi eleni qoyib bergin
// console.log(fruits);// ['Lemon', 'Kiwi', 'Cherry', 'Apple', 'Mango']
////
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 1) // 2 chi indexdan 1 dona elementni ochir

// console.log(fruits);// ['Banana', 'Orange', 'Mango']
////////////////////////
// toReversed() usul massivdagi elementlarning tartibini o'zgartiradi..
// method returns a new array.teskarisini qilib beradi
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById('ethan').innerHTML = fruits.toReversed()// ['Mango', 'Apple', 'Orange', 'Banana']
// const newArray = fruits.toReversed()
// console.log(newArray);// ['Mango', 'Apple', 'Orange', 'Banana']
///////////////////////////////////
// toSorted() method sorts the elements of an array in alphabetical order.
// The toSorted() method returns a new array.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const res = fruits.toSorted()
// console.log(res);// ['Apple', 'Banana', 'Mango', 'Orange']
/////////////////////////////////////////
// toString() method returns a string with array values separated by commas.
// Metod massiv qiymatlari vergul bilan ajratilgan qatorni qaytaradi.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById('ethan').innerHTML=fruits.toString()
// const res = fruits.toString()
// console.log(res);// Banana,Orange,Apple,Mango
////////////////////////////////////////////
// unshift() method adds new elements to the beginning of an array.
// The unshift() method overwrites the original array.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("Lemon", "Pineaplle")
// console.log(fruits);// ['Lemon', 'Pineaplle', 'Banana', 'Orange', 'Apple', 'Mango']
///////////////////////////////////////////////
// values() method returns an Iterator object with the values of an array.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// let text = ""
// for (let x of fruits.values()) {
//     text += x + "<br>"
// }
// document.getElementById('ethan').innerHTML = text
// console.log(text);
////////////////// Same
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// let text = ""
// for (let i of Object.values(fruits)) {
//     text += i +"<br>"
// }
// document.getElementById('ethan').innerHTML = text
///////////////////////////////////////////////////////////
// valueOf() method returns the array itself.
// const fruits = ['Banana', 'Orange', 'Apple', 'Mango']
// console.log(fruits)

// document.getElementById('ethan').innerHTML = fruits.valueOf() // valularini chiqarib beradi
////////////////////////////////////////////////
// with() method updates a specified array element.
// usul belgilangan massiv elementini yangilaydi.
// const months = ['Januar', 'Februar', 'Mar', 'April']
// document.getElementById('ethan').innerHTML = months.with(2, 'March')
// const res = months.with(2, 'March')
// console.log(res) // ['Januar', 'Februar', 'March', 'April']
