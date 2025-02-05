// document.getElementById('ethan').innerHTML=5+6
///////////////////////////////////////
// document.write(5 + 6)

///////////////////////////////////////

// window.alert(5+6)
// You can skip the window keyword.
// alert(5+6)

///////////////////////////////////////
// let a, b, c; stattment 1
// a = 5;       stattment 2
// b = 7;       stattment 3
// c = a + b    stattment 4
// document.getElementById('ethan').innerHTML=c
////////////////////////////////////////
// How to Define a JavaScript Object
//  * Using an Object Literal
//  * Using the new Keyword
//  * Using an Object Constructor

///////////////////////////////////////
// * Using an Object Literal
// const person = {
//     name: 'Ethan',
//     nation: "Uzb",
//     age:'32'
// }
// document.getElementById('ethan').innerHTML=`Name is ${person.name}, age is ${person.age} `

///////////////////////////////////////

// const person = {}
// person.name='Hurshidbek',
// person.age = 32

// document.getElementById('ethan').innerHTML=`Name is ${person.name}, age is ${person.age} `

///////////////////////////////////////
// * Using the new Keyword

// const person = new Object()
// person.name = 'Hurshidbek',
// person.nation = 'Uzb',
// person.age=32

// document.getElementById('ethan').innerHTML=`Name is ${person.name},nation is ${person.nation}, age is ${person.age} `

///////////////////////////////////////
// ikki hil usulda objectni property valuesini olish
// const person = {
//     name: 'Jack',
//     age:32
// }
// document.getElementById('ethan').innerHTML=`${person.name} , ${person['age']}`
//////////////////////////////////////////

// const person = {
//     name: "Jack",
//     age:32
// }
// let x = 'name',
// y='age'

// document.getElementById('ethan').innerHTML= person[x] + person[y] + "years old"

//////////////////////////////////////////
// add new properties
// const person = {
//     name: 'Jack',
//     age:32
// }

// person.nation = 'Uzbekistan'
// document.getElementById('ethan').innerHTML= person.nation + " " +person.name

//////////////////////////////////////////
// delete object's property and value
// const person = {
//     name: "Jack",
//     age:32,
//     nation:"Uzbekistan"
// }

// delete person.nation or delete person["nation"]
// console.log(person);// uzb delete boldi

// document.getElementById('ethan').innerHTML=person.name + " " + person.nation
//////////////////////////////////////////
// In JavaScript, almost "everything" is an object.

//  * Objects are objects
//  * Maths are objects
//  * Functions are objects
//  * Dates are objects
//  * Arrays are objects
//  * Maps are objects
//  * Sets are objects
// All JavaScript values, except primitives, are objects.

//////////////////////////////////////////

// const myObj = {
//     name: 'Jack',
//     age: 32,
//     childObj: {
//         car: 'BMW',
//         color:"red"
//     }
// }
// document.getElementById('ethan').innerHTML = myObj.childObj.color
//                            // or
// document.getElementById('ethan').innerHTML  = myObj.childObj['color']

/////////////////////////////////////////////

// const myObj = {
//     name: "Jack",
//     age: 32,
//     childObj: {
//         car: 'BMW',
//         color:"white"
//     }
// }

// let x = "childObj",
//     y = 'color'

// document.getElementById('ethan').innerHTML = myObj[x][y]

///////////////////////////////////////////////////
// The Object.assign() method copies properties from one or more source objects to a target object.
// // JavaScript Object.assign() // 2 objectni  bir biriga qoshib beradi

// const per1 = {
//     firstName: "Anne",
//     lastName: "Doe",
//     age: 32,
//     eyeColor:"blue"
// }

// const per2 = {
//     firstName: "Hurshidbek",
//     lastName: "Arapov",
//     car: 'Sonata',
//     carColor:"white"
// }
// Object.assign(per1, per2);
// let  text  = Object.entries(per1)
// document.getElementById('ethan').innerHTML = text
// // terminalda firstName,Hurshidbek,lastName,Arapov,age,32,eyeColor,blue,car,Sonata,carColor,white

//////////////////////////////////////////////////////////
// The constructor property returns the function that created the Object prototype.

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"

//   };
//   const res2=Object.defineProperty(person,'color',{value:'red'})
// let text = person.constructor;
// const res1=Object.defineProperty(text,'color',{value:'red'})
// // let res = text.firstName

// console.log();

// document.getElementById("ethan").innerHTML = text;

//////////////////////////////////////////////////////////
// Object.create() mavjud objectdan object yaratadi
// Create an Object:
// person mani prototypega joylashib oladi
// const person = {
//     name: "Jack",
//     age:32
// }
// const man = Object.create(person);
// man.name = "Joy"
// console.log(man);

// document.getElementById("ethan").innerHTML = person.name + " and " + man.name;

///////////////////////////////////////////////////////////////////
// The Object.defineProperties() method adds or changes object properties.methodni qoshadi  va propertlarni ozgartirishi mumkin
// usuli ob'ekt xususiyatlarini qo'shadi yoki o'zgartiradi.

// const person = {
//   firstName: "John",
//   lastName: "Doe"
// }

// Object.defineProperties(person,{car:{value:"sonata"},carColor:{value:"white"},firstName:{value:"Hurshidbek"}})

// document.getElementById('ethan').innerHTML= person.firstName  + " " + person.lastName + " " + person.car
// //displayda -> Hurshidbek Doe sonata

///////////////////////////////////////////////////////////////////
// The Object.defineProperty() method adds or changes an object property.
// methodga qoshadi va bir dona propertyni ozgartiriladi

// const person = {
//       firstName: "John",
//       lastName: "Doe"
// }
// // -------------- boshqarolmeymiz
// // "writable" personni firstNameni umuman ozgartirib bolmas qilish
// const donnotCHangeProperty = Object.defineProperty(person, 'firstName', { writable: false })

// // "configurable" personni firstNameni umuman delete qilib bolmeydigon qilib qoyadi
// const donnotDeleteProperty = Object.defineProperty(person, 'firstName', { configurable: false })

// // "enumerable" loop qila omeydigon qilib qoyadi
// const donnotLoopProperty = Object.defineProperty(person, 'firstName', { enumerable: false })

// const dontDo = Object.defineProperty(person, 'firstName', {
//     writable: false, // ozgartirolmeymiz
//     enumerable: false, // loop qila olmeymiz
//     configurable:false // delete qilolmeymiz
// })

// // ------------- boshqarolamiz
// const changeProperty = Object.defineProperty(person, 'firstName', { value: 'Hurshidbek' })
// const addProperty = Object.defineProperty(person,'car',{value:"false"})

// console.log("changeProperty", changeProperty);
// console.log("addProperty", addProperty);
// console.log("changesProperty",changesProperty);

// document.getElementById('ethan').innerHTML = Object.entries(changeProperty)
// document.getElementById('arapov').innerHTML = Object.entries(addProperty)

///////////////////////////////////////////////////////////////////

// const person = {
//     firstName: "Hurshidbek",
//     lastName: "Arapov",
//     age:32
// }

// const txt = Object.defineProperty(person, 'firstName', {
//     writable: true, // ozgartirolamiz  olamiz
//     configurable: false, // delete qila olmeymiz
//     enumerable:false  //loop qilolmeymiz
// })
// const changeObj = Object.defineProperty(person, "firstName", { value: 'Ethan' })
// document.getElementById('ethan').innerHTML = Object.entries(changeObj)

// delete txt.firstName
// console.log(txt);// delete bolmagan

// // Enumerate Properties
// const x = 'firstName'
// const td = ""
// for (let x in person) {
//     td +=person[x]  + "Hello"
// }
// console.log(tds);

////////////////////////////////////////////
// 1
// const person = {
//     firstName: "Hurshidbek",
//     lastName: "Arapov",
//     language : "NO",
// }

// Object.defineProperty(person, 'language', {
//     get: function () { return language },
//     set: function (value) {language =value.toUpperCase()}
// })

// person.language = 'english'

// document.getElementById('ethan').innerHTML = person.language

//// 2

// const animals = {
//     cat: "kate",
//     dog: "sinba",
// }

// Object.defineProperty(animals, "dog", {
//     get: function () { return dog },
//     set:function(value){dog =value.toUpperCase()}
// })
// animals.dog='yolbars'

// document.getElementById('ethan').innerHTML=animals.dog

////////////////////////////////////////////
// add new property and value
// const person = {
//     firstName: "Hurshidbek",
//     lastName: "Arapov",
//     language:"English"
// }

// Object.defineProperty(person, 'about', {
//     get:function(){return `My name is ${this.firstName} and lastName is ${this.lastName}, I know ${this.language} language`}
// })
// document.getElementById('ethan').innerHTML=person.about

////////////////////////////////////////////

// const obj = { count: 0 }

// Object.defineProperty(obj, 'reset', {
//     get: function () {this.count}
// })

// Object.defineProperty(obj, 'increment', {
//     get:function(){this.count++}
// })

// Object.defineProperty(obj, 'decrement', {
//     get:function(){this.count--}
// })

// Object.defineProperty(obj, 'add', {
//     set:function(value){this.count +=value}
// })

// Object.defineProperty(obj, "subtract", {
//     set:function(value){this.count -=value}
// })

// obj.reset;
// obj.add = 5;
// obj.subtract = 1;
// obj.increment;
// obj.decrement;
// document.getElementById('ethan').innerHTML=obj.count

////////////////////////////////////////////
// The Object.entries() method returns an array of the key/value pairs of an object.
// The Object.entries() method does not change the original object.

// The Object.entries() value pairs of an object.

// const person = {
//     firstName: "Hurshidbek",
//     lastName: "Arapov",
// }
// const getObj=Object.entries(person)
// document.getElementById('ethan').innerHTML = getObj

////////////////////////////////////////////
// The Object.entries() method returns an array of the key
// const fruits = {
//     Bananas: 300,
//     Oranges: 200,
//     Apples: 500
// }

// let txt = " "
// for (let [key, value] of Object.entries(fruits)) {
//     txt += key +':' + value +"<br>"
// }
// document.getElementById('ethan').innerHTML= txt

/////////////////////////////////////////////
// The Object.entries() with map

// const fruits = {
//     Bananas: 300,
//     Oranges: 200,
//     Apples: 500
// }

// const createMap = new Map(Object.entries(fruits))
// console.log(createMap);
// terminalda
// 0: {"Bananas" => 300}
// 1: {"Oranges" => 200}
// 2: {"Apples" => 500}

// document.getElementById('ethan').innerHTML =createMap

/////////////////////////////////////////////
// The Object.freeze() method prevents any changes to an object.

// const person = {
//     firstName: "Hurshidbek",
//     lastName: 'Arapov',
//     age:32
// }
// Object.freeze(person)
// person.age = 35 // can't change property of value
// delete person.firstName  // can't delete property and value
// document.getElementById('ethan').innerHTML=Object.entries(person)

// ////////////////////////////////////////////
// The Object.freeze() method will fail silently in non-strict mode.

// The Object.freeze() method will throw a TypeError in strict mode.

// "use strict"
// const person = {
//     firstName: "Hurshidbek",
//     lastName: 'Arapov',
//     age:32
// }

// Object.freeze(person)

// let txt;
// try {
//     person.age = 52;
//     const changeAge = Object.values(person)
// } catch(err) {
//     txt =err // err boladi
// }
// console.log(txt);
// document.getElementById('ethan').innerHTML=txt

///////////////////////////////////
// The fromEntries() method creates an object from a list of key/value pairs.
// arraydan object yaratadi

// const fruits = [
//     ["apples", 300],
//     ["pears", 900],
//     ["bananas", 500]
// ];
// console.log(fruits);

// const myObj = Object.fromEntries(fruits);
// document.getElementById("ethan").innerHTML = myObj.pears;
//     console.log(result);

//////////////////////////
// Object.getOwnPropertyDescriptor()
// bir dona propertini tekshirib beradi writable,
// const person = {
//     firstName: 'Hurshidbek',
//     lastName: "Arapov",
//     age:32
// }

// const result = Object.getOwnPropertyDescriptor(person, 'age')
// document.getElementById('ethan').innerHTML = result.value + " " + result.writable
// // terminalda 32 true chiqadi writable xaqida malumotni olib beraladi
// console.log(result);
//////////////////////////
// Object.getOwnPropertyDescriptors()
//butun bir objectni writable , configurable , enumerable ni korsatib beradi
// const person = {
//     firstName: 'Hurshidbek',
//     lastName: "Arapov",
//     age:32
// }

// const descriptors = Object.getOwnPropertyDescriptors(person)
// document.getElementById('ethan').innerHTML = descriptors.lastName.enumerable

/////////////////////////////////////////////////

// Object.getOwnPropertyNames()  method returns an array with the properties of an object.
// Objectni array qilib uni faqat propertysini chaqirishimiz mumkin

// const person = {
//     firstName: 'Hurshidbek',
//     lastName: "Arapov",
//     age:32
// }

// let props = Object.getOwnPropertyNames(person)
// console.log(props);

// document.getElementById("ethan").innerHTML = props[0];// array qilib propertylarini ololamiz

/////////////////////////////////////////////////
// The Object.groupBy() method groups elements of an object according to string values returned from a callback function.
// method ob'ekt elementlarini qayta qo'ng'iroq qilish funktsiyasidan qaytarilgan satr qiymatlariga ko'ra guruhlaydi.

// Asl va qaytarilgan ob'ektdagi elementlar bir xil.O'zgarishlar asl nusxada ham, qaytarilgan ob'ektda ham aks etadi
// arrayni ichidagi objectlarni gruhlab olish
// const fruits = [
//     { name: "apples", quantity: 300 },
//     { name: "bannas", quantity: 500 },
//     { name: "oranges", quantity: 200 },
//     {name: "kiwi", quantity: 150 }
// ]

// function myCallback({ quantity }) {
//     return quantity > 200 ? "ok" : "low";
//   }

// // Group by ok and low
// const result = Object.groupBy(fruits, myCallback);

// // Display Results
// let text ="These fruits are Ok: <br>";
// for (let [x,y] of result.ok.entries()) {
//   text += y.name + " " + y.quantity + "<br>";
// }

// text += "<br>These fruits are low: <br>";
// for (let [x,y] of result.low.entries()) {
//   text += y.name + " " + y.quantity + "<br>";
// }

// document.getElementById("ethan").innerHTML = text;

///////////////////////////////////////////////////////////

// JavaScript Object.isExtensible()  objectni kengaytirsa boladimi yo yomi boolean qayatardi
// Object.preventExtensions() objectni ozgartirishga ruxsat beradi lekin add qilolmeymiz lekin delete qilolamiz
//object
// const person = {
//     firstName: "Hurshidbek",
//     lastName:"Arapov"
// }
// Object.preventExtensions(person)
// delete person.firstName
// console.log(person);

// let result = Object.isExtensible(person)

// document.getElementById('ethan').innerHTML = result

// array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// Object.preventExtensions(fruits)

// const result = Object.isExtensible(fruits)
// document.getElementById('ethan').innerHTML = result

/////////////////////////////////////////////////////////////////
// The Object.isFrozen() returns true if an object is frozen.  muzlatilganligini tekshiradi boolean qaytaradi
//object
// const person = {
//     firstName: "Hurshidbek",
//     lastName:"Arapov"
// }

// Object.freeze(person)
// const result = Object.isFrozen(person)
// document.getElementById('ethan').innerHTML = result

// array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Object.freeze(fruits);

// const result = Object.isFrozen(fruits)
// document.getElementById('ethan').innerHTML = result
/////////////////////////////////////////////////////////////////
// JavaScript Object.isSealed() // muhirlanganini tekshiradi true or false returns
// Object.seal() muhirleydi //allows modifications, but prevents additions and deletions of properties.
//Object.seal()  o'zgartirishga ruxsat beradi, lekin xususiyatlarni qo'shish va o'chirishni oldini oladi.
//obj
// const person = { firstName: "John", lastName: "Doe" };

// Object.seal(person)

// const result = Object.isSealed(person)
// document.getElementById('ethan').innerHTML = result

// Create Array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Object.seal(fruits)
// const result = Object.isSealed(fruits)
// document.getElementById('ethan').innerHTML = result
/////////////////////////////////////////////////////////////////////////////////
// The Object.keys() method returns an array with the keys of an object.//Object.keys() returns the keys (properties) of any object type.
// objectni array qilib faqat keylarini ololamiz ekan //

// // Create an Object
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
// };

// const keys = Object.keys(person)
// console.log(keys);
// document.getElementById('ethan').innerHTML = keys

// example
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };
// Object.defineProperty(person, "age", { enumerable: false })
// const result = Object.keys(person)
// document.getElementById('ethan').innerHTML = result
// // terminalda age chiqmaganini korolamiz

// axample
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const result = Object.keys(fruits)
// console.log(result);
// document.getElementById('ethan').innerHTML = result   // returns an enumerable array of the keys of an object:// lenhthni qaytaradikan
// 0: "0"
// 1: "1"
// 2:"2"
// 3:"3"

//axample

// const fruit = 'Bannan'
// const keys = Object.keys(fruit)
// console.log(fruit);

// document.getElementById("ethan").innerHTML = keys;// Banan 6 ta xarifdan iborat bolgani un 6 ta arrayni qaytaradi  0,1,2,3,4,5

/////////////////////////////////////////////
// JavaScript Object.preventExtensions()  method prevents adding properties to an object.
//usul ob'ektga xususiyatlar qo'shishni oldini oladi.
//obj
// const person = {
//     firstName: "Hurshidbek",
//     last:'Arapov'
// }

// Object.preventExtensions(person)
// person.firstName = "Ethan"
//   console.log(person);//ozgartilolamiz ,delete qilolamiz lekin qosholmeymiz ekan

// let text = "";
// try {
//   person.nationality = "English";
// }
// catch (err) {
//   text = err;
// }
// console.log(text);

// document.getElementById("ethan").innerHTML = text

//array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Object.preventExtensions(fruits)

// text = "";
// try {
//     fruits.push('Olcha')
// } catch (err) {
//     text = err
// }

// document.getElementById("ethan").innerHTML = text;// add qilolmaganligiminni korolamiz

///////////////////////////////////////////////////////
// The prototype is a global property available with all JavaScript objects.
// The prototype property allows you to add new properties and methods to objects.
// Prototip xususiyati ob'ektlarga yangi xususiyatlar va usullarni qo'shish imkonini beradi.
// object
// const person = {
//     firstName: "Hurshidbek",
//     last:'Arapov'
// }
// Object.prototype.age = 32
// document.getElementById('ethan').innerHTML = person.age

//// function
// function addNewObject(firstName,lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// Object.prototype.age = 32
// const obj = new addNewObject('Hurshidbek', 'arapov')
// document.getElementById("ethan").innerHTML = obj.age;

///////////////////////////////////////////////////

// Object.seal() muhirleydi //allows modifications, but prevents additions and deletions of properties.
//Object.seal()  o'zgartirishga ruxsat beradi, lekin xususiyatlarni qo'shish va o'chirishni oldini oladi.
// "use strict"
// // Create Object
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue"
// };

// Object.seal(person)
// delete person.age // deletegaham  ruxsat bermeydi
// console.log(person);

// let text = "";
// try {
//     person.nation= "Uzb"
// } catch (err) {
//     text = err
// }

// document.getElementById('ethan').innerHTML = text // add va ochirishga ruxsat bermeydi

/////////////////////////////
// JavaScript Object toString() method returns an object as a string.usuli ob'ektni satr sifatida qaytaradi.
// The toString() method returns "[object Object]" if it cannot return a string.
//array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);

// const result = fruits.toString()
// console.log(result);

//obj
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };
// const keys = person.toString()
// console.log(keys);

//   document.getElementById('ethan').innerHTML = keys.firstName// [object Object]

// function
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
// };
// const result = Object.toString(person)
// console.log(result);

//   document.getElementById('ethan').innerHTML = result //function Object() { [native code] }

////////
// valueOf() returns the object itself
// If the object has no primitive value, valueOf() returns the object itself.
// The valueOf() method returns the primitive value of an object.
// faqat valuelarni olib beradikan
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// Object.valueOf(fruits)
// console.log(fruits);

// document.getElementById('ethan').innerHTML = fruits

/////////////////////////////
// Object.values() returns an array of the values of an object
// const person = {
//     firstName : "John",
//     lastName : "Doe",
//     age : 50,
//     eyeColor : "blue"
//   };

// const result = Object.values(person)
// console.log(result);

//   document.getElementById('ethan').innerHTML=result

/////////////////////////////////////////////////////////
// JavaScript Object Methods

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     fullName: function () {
//         return this.firstName + " " + this.lastName
//     }
// }
// person.fullName()
// document.getElementById('ethan').innerHTML = person.fullName()

//////////////
// Adding a Method to an Object
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//   };

// person.fullName = function () {
//       return this.firstName + ""+ this.lastName
//   }
// document.getElementById('ethan').innerHTML = "My father is " + person.fullName()

///////////////////////////////////
// This example uses the JavaScript toUpperCase() method to convert a text to uppercase:

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
// };

// person.fullName = function () {
//     return (this.firstName + " " + this.lastName).toUpperCase()
// }
// person.fullName()
// document.getElementById('ethan').innerHTML = "My father is " + person.fullName()

//////////////////////////////////////////////////////////

// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// let text = " ";
// for (let x in person) {
//     text +=person[x]+ " "
// }
// console.log(text);//John 30 New York

// document.getElementById('ethan').innerHTML = text

////////////////////////////////////////////////////////////////////
// Object.values() creates an array from the property values:// objectni array qilib valuelarini olib beradi
// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
//   };
// const result = Object.values(person)
// console.log(result);

//////////////////////////////////////////////////////////

// const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };
// let text = "";
// for (let [key, value] of Object.entries(fruits)) {
//     text += key + ": " + value +  "<br>";
// }

// document.getElementById('ethan').innerHTML = text
//////////////////////////////////////////////
// Using JSON.stringify() JSON farmatga ozgartirib beradi

// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };
// const changeJson = JSON.stringify(person)
// document.getElementById('ethan').innerHTML = changeJson // jsonga ozgargani korishimiz mumkin
///////////////////////////////////////////////
// JavaScript Object Constructors
// Sometimes we need to create many objects of the same type.//ba'zan biz bir xil turdagi ko'plab ob'ektlarni yaratishimiz kerak.
// To create an object type we use an object constructor function.//Ob'ekt turini yaratish uchun biz ob'ekt konstruktor funksiyasidan foydalanamiz.
// It is considered good practice to name constructor functions with an upper-case first letter.//Konstruktor funksiyalarini bosh harf bilan nomlash yaxshi amaliyot hisoblanadi.

// Constructor Function for Person objects

// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
// }
//   const myFather = new Person("Rasuljon","Arapov",60,"blue")

// document.getElementById('ethan').innerHTML = "My father is " + myFather.age + "."
////
// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//   }
//  const myFather = new Person("Rasuljon","Arapov",60,"blue")
//  const myMother = new Person("Iqbolhon","Arapova",59,"blue")
// document.getElementById('ethan').innerHTML = "My father is " + myFather.age + "."
// document.getElementById('ethan1').innerHTML = "My mother is " + myMother.age + "."
//////
//  adding
// Constructor function for Person Objects
// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//   }
//    const myFather = new Person("Rasuljon","Arapov",60,"blue")
// const myMother = new Person("Iqbolhon", "Arapova", 59, "blue")
// // Will Not Work
// Person.nationality = "Uzbekistan" // but
// // will work
// Person.prototype.nationality = "Uzbekistan"

// document.getElementById('ethan').innerHTML = "My father is " + myFather.nationality + "."

//////////////////////////////////////
// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//     this.fullName = function() {
//       return this.firstName + " " + this.lastName
//     };
// }
// const obj = new Person("John", "Doe", 50, "blue")

// document.getElementById('ethan').innerHTML = "My freind is " + obj.fullName()
////////////////
// Adding a Method to an Object

// Constructor function for Person Objects
// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//   }

//   // Create 2 Person objects
//   const myFather = new Person("John", "Doe", 50, "blue");
//   const myMother = new Person("Sally", "Rally", 48, "green");

//   // Add a Name Method
//   myMother.changeName = function (name) {
//     this.lastName = name;
//   }

//   // Change Name
//   myMother.changeName("Doe");

//   // Display fullName
//   document.getElementById("demo").innerHTML =
//   "My mother's last name is " + myMother.lastName;

/////////////////////
// Constructor Function for Person Objects
// function Person(firstName,lastName,age,eyeColor) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.eyeColor = eyeColor;
//   }

//   // Create a Person Object
//   const myMother = new Person("Sally","Rally",48,"green");

//   Person.prototype.changeName = function (name) {
//     this.lastName = name;
//   }

//   // Change Name
//   myMother.changeName("Doe");

//   // Display Name
//   document.getElementById("demo").innerHTML =
//   "My mother's last name is " + myMother.lastName;

/////////////////////////////////////////////////////////////////////////////////////////////

// JavaScript Events

// function displayDate() {
//     document.getElementById("demo").innerHTML = Date();
//   }
