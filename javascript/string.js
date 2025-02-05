// JavaScript Strings
// Strings are for storing text /// Stringlar matnni saqlash uchun mo'ljallangan

////The length property returns the length of a string.
// let text = "kfbshbdfhjvsdfvwgfvwgefvwe"
// document.getElementById('ethan').innerHTML = text.length

/////////////////////////////////
// let text = "We are the so-called \"Vikings\" from the north.";
// console.log(text);

// document.getElementById("demo").innerHTML = text; ///We are the so-called "Vikings" from the north. kabi chiqadi
/////////////////////////////////
// let text = 'It\'s alright.';
// document.getElementById("demo").innerHTML = text; //It's alright.
////////////////////////////////
// let text = "The character \\ is called backslash.";
// document.getElementById("demo").innerHTML = text; //The character \ is called backslash.
////////////////////////////////
// But strings can also be defined as objects with the keyword new//
//  Ammo satrlarni new kalit so'zi bilan ob'ektlar sifatida ham aniqlash mumkin

// // x is a string
// let x = "John"
// // y is an object
// let y = new String("John")

// document.getElementById('ethan').innerHTML = typeof x + "<br>" + typeof y // x = string /y = object
// document.getElementById('ethan1').innerHTML = (x == y);// true
// document.getElementById('ethan2').innerHTML = (x===y);// false
////////////////////
// object objectga teng bolmadi chunki uni reference boshqa boshqa boladi
// let x = new String("John");  // x is an object
// let y = new String("John");  // y is an object
// document.getElementById("ethan").innerHTML = (x==y); // false

///////////////////////////////////////
// The at() method returns an indexed character from a string.// - minuslik oladi
// The at() method returns the same as []

// let text = "jdiuwydfgsdf"
// const objRes = text.at(2)// same way
// console.log(objRes);

// const arrayRes = text[2] // same way
// document.getElementById("ethan").innerHTML = objRes;
// document.getElementById("ethan1").innerHTML = arrayRes;

// console.log(res);
/////////////////////////////////////
// String charAt() /at() bn bir hil lekin - minus ni olmeydi

// let text = 'Hello World'
// let letter = text.charAt(2)//l
// document.getElementById("ethan1").innerHTML = letter;// l 

///////////////////////////////////////
// The concat() method joins two or more strings.// concat() usuli ikki yoki undan ortiq satrlarni birlashtiradi.
// string.concat(string1, string2, ..., stringX) kabi yozsekham boladikan
// let text1 = "Hurshidbek",
// text2 = "Arapov"

// const plusString = text1.concat(text2) // HurshidbekArapov
// const plusString1 = text1.concat(" ",text2) // Hurshidbek Arapov

// console.log(plusString);
//  document.getElementById('ethan').innerHTML = plusString //HurshidbekArapov
/////////////////////////////////////////
// The constructor property returns the function that created the String prototype.
// let text = "Hello World"

// let result = text.constructor
// console.log(result); // ƒ String() { [native code] }
/////////////////////////////////////////
// The endsWith() method returns true if a string ends with a specified string.
// let text = "Hello World"
// const result = text.endsWith("World")
// console.log(result);
// document.getElementById('ethan').innerHTML = result //true
/////////////////////////////////////////
// The includes() method returns true if a string contains a specified string
// ichida  bormi yo yoqmi boolean qaytaradi
// let text = "Hello world, welcome to the universe.";
// document.getElementById("ethan").innerHTML = text.includes("world") // true
//////
// string.includes(searchvalue, start)
// let text = "Hello world, welcome to the universe.";
// document.getElementById("ethan").innerHTML =text.includes("world",7)// false/ 5,6larda true boladikan

///////////////////////////////////////
// let text = "Hello world, welcome to the universe.";
// document.getElementById('ethan').innerHTML = text.indexOf("welcom") // 13 indexda degan mano
//////
// let text = "Hello world, welcome to the universe.";
// document.getElementById("demo").innerHTML = text.indexOf("e");//1


////////////////////////////////////////////////////
// The localeCompare()  2 ta stringni solishtiradi
// let text1 = "ab";
// let text2 = "cd";
// document.getElementById("ethan").innerHTML = text1.localeCompare(text2) // -1 ni chiqardi false 

//////////////////////
//A search for "ain" using a string:
// The match() method returns an array of matches.
// let text = "The rain in SPAIN stays mainly in the plain";
// const res = text.match("ain") // taqoslash includesga oxshagan  array kabi xar birini korib chiqadi
// document.getElementById("ethan").innerHTML = res// aini izlab ozini agar ain bolmasa null chiqadi

///////////////////////////////////////////////////////////
// The padEnd() method pads a string at the end.//usul oxirida satrni joylashtiradi.
// let number = "5"
// const result = number.padEnd(5, "1")
// document.getElementById("ethan").innerHTML = result // 51111 -> 5ta index ohiriga 1 larni qoshib ber degani
///////
// let numberString = "5"
// const result = numberString.padEnd(3, "x")
// console.log(result);
// document.getElementById("ethan").innerHTML = result  // 5xx 

//////////////////////////////

// let number = 5
// const result=number.toString().padEnd(4, "y") //4yyy chiqadi
// document.getElementById("ethan").innerHTML = result  

//////////////////////
// The padStart() method pads a string from the start.
// let text = "3"
// const result = text.padStart(4, "x")
// document.getElementById('ethan').innerHTML = result // xxx3

/////
// let number = 6;
// const result = number.toString().padStart(3,"0")
// console.log(result);
// document.getElementById('ethan').innerHTML = result // 006

////////////////////////////////////
// JavaScript String prototype
// Use the prototype property to add a new property to all objects of a given type:
//Berilgan turdagi barcha ob'ektlarga yangi xususiyat qo'shish uchun prototip xususiyatidan foydalaning:

///////////////////////////
// String repeat()  string bir nechta barobariga copy qilib beradi 
// let text = "Hello world!";
// const result = text.repeat(3)//Hello world! 3 marta chiqadi
// document.getElementById('ethan').innerHTML = result

////////////////
// The replace() method returns a new string with the value(s) replaced. textni qayta ozgarirolamiz 
// let fullName = "Arapov Hurshidbek"
// const result = fullName.replace("Hurshidbek", "Ethan")
// document.getElementById('ethan').innerHTML = result // Arapov Ethan chiqadi 

///////////////////////////
// let text = "Mr Blue has a blue house and a blue car."
// const result = text.replace(/blue|house|car/gi, function (x) {
//     return x.toUpperCase()
// })
// document.getElementById('ethan').innerHTML = result 
//////////////////////////////////////////
// The replaceAll() method returns a new string with all values replaced.

// let text = "I love cats. Cats are very easy to love. Cats are very popular."
// const result = text.replaceAll("Cats", "Dogs")
// document.getElementById('ethan').innerHTML = result  // xamma Cats larni Dogsga ozgartirib berdi
/////////////////////////
// let text = "Mr Blue has a blue house and a blue car."
// const result = text.replaceAll(/blue|house|car/gi, function (x) {
//     return x.toUpperCase()
// })
// console.log(result);
// //Mr BLUE has a BLUE HOUSE and a BLUE CAR.
// document.getElementById('ethan').innerHTML = result 

////////////////////////////////////
// let text = "Mr. Blue has a blue house"
// let position = text.search("blue");
// console.log(position);


// document.getElementById("ethan").innerHTML = position;

//////////////////////
// The slice() method extracts a part of a string. // bir qismini kesvoradi 
// let text = "Hello Tshkent"
// const result = text.slice(0, 3) // 0 chi indexdan 3 ta indexni olsin yani 3 ta xarif bolsin  
// console.log(result);
// document.getElementById("ethan").innerHTML = result;// Hel
/////////////////////
// let text = "Hello world!"; 
// const result = text.slice(3)// 3 chi indexdan boshlab olsin
// console.log(result);

// document.getElementById("ethan").innerHTML = result /// lo world!

/////////////////////////////////////////
// The split() method splits a string into an array of substrings.
// The split() method returns the new array.
// array qilib bolib beradi 
// let text = "How are you doing today?";
// const myArray = text.split(" ");
// console.log(myArray);// ['How', 'are', 'you', 'doing', 'today?']

// document.getElementById("ethan").innerHTML = myArray; // ['How', 'are', 'you', 'doing', 'today?']
// ------------------
// let text = "How are you doing today?"
// const result = text.split("")// ['H', 'o', 'w', ' ', 'a', 'r', 'e', ' ', 'y', 'o', 'u', ' ', 'd'
// // , 'o', 'i', 'n', 'g', ' ', 't', 'o', 'd', 'a', 'y', '?'] // kabi
// console.log(result);

// document.getElementById("ethan").innerHTML = result
// console.log(result[3]);// doing
// ---------------------
// let text = "How are you doing today?";
// const result = text.split(" ", 3)// 3 ta indexni olibn ber dedik 
// console.log(result);//['How', 'are', 'you']
// document.getElementById("ethan").innerHTML = result

///////////////////////////////////////////////

// let text = "How are you doing today?";
// const myArray = text.split();
// console.log(myArray);// ['How are you doing today?']

// document.getElementById("ethan").innerHTML = myArray;

///////////////////////////////////////////////////

// let text = "Hello world!";
// let result = text.substring(1, 4);
// console.log(result);// ell

// document.getElementById("ethan").innerHTML = result;//ell

///////////////
// toLocaleLowerCase() usuli joriy til yordamida satrni kichik harflarga aylantiradi.
// let text = "Hello World!";
// const result = text.toLocaleLowerCase()
// console.log(result);//hello world!

//////////////////
// toLocaleUpperCase() usuli joriy til yordamida satrni katta harflarga aylantiradi.
// let text = "Hello World!";
// const result = text.toLocaleUpperCase()
// console.log(result);//HELLO WORLD!
////////////////
// toLowerCase() usuli qatorni kichik harflarga aylantiradi
// let text = "HELLO World!";
// const result = text.toLowerCase()
// console.log(result);//hello world!
//////////////////////////////
// toUpperCase() usuli qatorni katta harflarga aylantiradi
// let text = "hello World!";
// const result = text.toUpperCase()
// console.log(result);//HELLO WORLD!
////////////////////////////////////

