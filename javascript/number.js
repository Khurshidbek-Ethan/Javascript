// The constructor property returns the function that created the Number prototype.
// let number = 45
// const result = number.constructor
// console.log(result);
// document.getElementById("ethan").innerHTML = result;
///////////////
// isFinite()  number ligini tekshiradi boolean qaytaradi
// let num = 23123234
// const res = Number.isFinite(num)
// console.log(res);// true

////
// let numString = "324324"
// const res = Number.isFinite(numString)
// console.log(res); // false

/////////////////////////////////////

// Number.isInteger() usuli, agar qiymat Number ma'lumotlar turining butun soni bo'lsa, true qiymatini qaytaradi
// let numButun = 23232,
//     numQoldiq = 1.566

// const resButun  = Number.isInteger(numButun)//true
// console.log(resButun);/// true

// const resQoldiq = Number.isInteger(numQoldiq)// false
// console.log(resQoldiq);// false

//////////////////////////////////////////
// Number.parseFloat() method parses a value as a string and returns the first number
// Number.parseFloat() usuli qiymatni satr sifatida tahlil qiladi va birinchi raqamni qaytaradi.
// document.getElementById("ethan").innerHTML =
// Number.parseFloat(10) + "<br>" + //10
// Number.parseFloat("10") + "<br>" + //10
// Number.parseFloat("10.33") + "<br>" + //10.33
// Number.parseFloat("34 45 66") + "<br>" +  //34
// Number.parseFloat("40 years") + "<br>" +  //40
// Number.parseFloat("40H") + "<br>" +  // 40
// Number.parseFloat("How are 40") // NaN

///////////////////////////////////////////
// Number.parseInt()  usuli qiymatni satr sifatida tahlil qiladi va birinchi butun sonni qaytaradi.
// document.getElementById("ethan").innerHTML =
// Number.parseInt("10") + "<br>" +   // 10
// Number.parseInt("10.45") + "<br>" + //10
// Number.parseInt("34 45 66") + "<br>" + //34
// Number.parseInt("  60  ") + "<br>" + // 60
// Number.parseInt("40years") + "<br>" + //40
// Number.parseInt("He was 40") //NaN

///////////////////////////////////////////////
// prototype allows you to add new properties and methods to numbers.
// Number.prototype.myMthod = function () {
//     return this.valueOf() / 2
// }

// let n = 50
// console.log(n.myMthod()); // 25
///////////////////////////////////////////////
// toFixed()    numberni stringga ozgartirib beradi
// let n = 5.5545

// const res = n.toFixed()
// console.log(res) // 6

// console.log(typeof res) //
/////////////////////////////////////////
// toLocaleString() mahalliy til formatidan foydalangan holda raqamni qator sifatida qaytaradi.
// let num = 10000
// const res = num.toLocaleString()
// const res1 = num.toString()
// console.log(typeof res);
// console.log(typeof  res1);

////////////////////////////////////////////////////////
// let num = 500
// const obj = {
//     style: "currency",
//     currency:"EUR"
// }
// const res = num.toLocaleString('en-GB', obj)
// console.log(res) //€500.00 string xolatda
////////////////////////////////////////////////////////
// The toString() returns a number as a string
// let num = 14
// const res = num.toString()
// console.log(typeof res);// string

/////////////////////////////////
// valueOf() usuli raqamning ibtidoiy qiymatini qaytaradi.valularini olibberadi
// let num = 15
// const res = num.valueOf()
// console.log(res)

///////////////

// let x = 9999999999999999
// let y = BigInt('9999999999999999')
// console.log(typeof y)
