// It can extend the functionality of the browser
// Bu brauzerning funksionalligini kengaytirishi mumkin
// It can greatly simplify complex functions
// Bu murakkab funktsiyalarni sezilarli darajada soddalashtirishi mumkin
// It can provide easy syntax to complex code
// U murakkab kodga oson sintaksisni ta'minlaydi
// 
// What is Web API?
// API stands for Application Programming Interface.//API "Application Programming Interface" degan ma'noni anglatadi.




// A Web API is an application programming interface for the Web.//Web API - bu Internet uchun dasturlash interfeysi.

// A Browser API can extend the functionality of a web browser.//Brauzer API veb-brauzer funksiyalarini kengaytirishi mumkin.

// A Server API can extend the functionality of a web server.//Server API veb-serverning funksiyalarini kengaytirishi mumkin.
///////////

// Browser APIs
// All browsers have a set of built-in Web APIs to support complex operations, and to help accessing data.
//Barcha brauzerlarda murakkab operatsiyalarni qo'llab-quvvatlash va ma'lumotlarga kirishda yordam berish 
// uchun o'rnatilgan Web API-lar to'plami mavjud.
// For example, the Geolocation API can return the coordinates of where the browser is located.
// Masalan, Geolocation API brauzer joylashgan joyning koordinatalarini qaytarishi mumkin.

// for example :Get the latitude and longitude of the user's position
// for example :Foydalanuvchi joylashuvining kenglik va uzunligini oling

// const x = document.getElementById("demo");

// function getLocation() {
//     try {
//       navigator.geolocation.getCurrentPosition(showPosition);
//     } catch(err) {
//       x.innerHTML = err;
//     }
//   }


//   function showPosition(position) {
//     x.innerHTML = "Latitude: " + position.coords.latitude + 
//     "<br>Longitude: " + position.coords.longitude;
//   }
///////////////////////////////////
// JavaScript Validation API
// Constraint Validation DOM Methods// Cheklovlarni tekshirish DOM usullari

// checkValidity()	Returns true if an input element contains valid data.
// checkValidity() Agar kirish elementida toʻgʻri maʼlumotlar boʻlsa, rost qiymatini qaytaradi.

// setCustomValidity()	Sets the validationMessage property of an input element.
// setCustomValidity() Kirish elementining validationMessage xususiyatini o‘rnatadi.

// function myFunction() {
//     const x = document.getElementById('insert');
//     if (!x.checkValidity()) {
//         document.getElementById('demo').innerHTML = x.validationMessage
//     } else {
//         document.getElementById('demo').innerHTML ="That is Right"
//     }
// }
///////
// rangeOverflow()  100  past 
// function myFunction() {
//   let text;
//   if (document.getElementById("id1").validity.rangeOverflow) {
//     text = "Value too large";
//   } else {
//     text = "Input OK";
//   } 
//   document.getElementById("demo").innerHTML = text;
// }
///////
// rangeUnderflow() 100 baland
// function myFunction() {
//     let text;
//     if (document.getElementById("id1").validity.rangeUnderflow) {
//        text  = "Value too small" 
//     } else {
//         text = "Input OK"
//     }
// document.getElementById("demo").innerHTML = text;
// }

///////////////////////////////////
// The History back() Method
// The back() method loads the previous URL in the windows.history list.
// back() usuli oldingi URL manzilini windows.history roʻyxatiga yuklaydi.
//back()	Loads the previous URL in the history list
// forward()	Loads the next URL in the history list//Tarix ro'yxatidagi keyingi URLni yuklaydi
// go()	Loads a specific URL from the history list
// function myFunction() {
//     window.history.back()
// }

// function myFunction2() {
//     window.history.go(-2)
// }
////////////
// Web Storage API
// The Web Storage API is a simple syntax for storing and retrieving data in the browser. It is very easy to use:
// Web Storage API - bu brauzerda ma'lumotlarni saqlash va olish uchun oddiy sintaksis. Foydalanish juda oson:

// The localStorage.setItem() method stores a data item in a storage.
// localStorage.setItem("name", "John Doe")

// The localStorage.getItem() method retrieves a data item from the storage.
// const getProperty = localStorage.getItem('name');
// console.log(getProperty);
// sessionStorage.clear()

/////
// The sessionStorage Object
// The sessionStorage object is identical to the localStorage object.
// sessionStorage obyekti localStorage obyekti bilan bir xil
// The difference is that the sessionStorage object stores data for one session
//Farqi shundaki, sessionStorage obyekti ma’lumotlarni bir seans uchun saqlaydi
// The data is deleted when the browser is closed.
// Brauzer yopilganda ma'lumotlar o'chiriladi.

// The sessionStorage.setItem() method stores a data item in a storage.
// It takes a name and a value as parameters:
// sessionStorage.setItem("name", "Ethan Jack")

// The sessionStorage.getItem() method retrieves a data item from the storage.
// It takes a name as parameter:

// document.getElementById("demo").innerHTML = sessionStorage.getItem("name")
// key(n)	Returns the name of the nth key in the storage
// length	Returns the number of data items stored in the Storage object
// getItem(keyname)	Returns the value of the specified key name
// setItem(keyname, value)	Adds a key to the storage, or updates a key value (if it already exists)
// removeItem(keyname)	Removes that key from the storage
// clear()	Empty all key out of the storage

// window.localStorage	Allows to save key/value pairs in a web browser. Stores the data with no expiration date
// Veb-brauzerda kalit/qiymat juftlarini saqlashga imkon beradi. Yaroqlilik muddatisiz ma'lumotlarni saqlaydi

// Veb-brauzerda kalit/qiymat juftlarini saqlashga imkon beradi. Bir seans uchun ma'lumotlarni saqlaydi
// window.sessionStorage	Allows to save key/value pairs in a web browser. Stores the data for one session
//////////////////////////
// What is a Web Worker
// When executing scripts in an HTML page, the page becomes unresponsive until the script is finished.
// HTML sahifasida skriptlarni bajarayotganda, skript tugaguniga qadar sahifa javob bermaydi.

// A web worker is a JavaScript that runs in the background, independently of other scripts, without affecting 
// the performance of the page.You can continue to do whatever you want: clicking, selecting things, etc., while
//  the web worker runs in the background.

// Veb - ishchi - bu sahifaning ishlashiga ta'sir qilmasdan, boshqa skriptlardan mustaqil ravishda fonda ishlaydigan
// JavaScript.Siz xohlagan narsani qilishni davom ettirishingiz mumkin: veb - ishchi fonda ishlayotgan paytda bosish,
//     narsalarni tanlash va hokazo.

///////////////////////////////////////////////////////////
// Fetch - Documention 
// JavaScript can send network requests to the server and load new information whenever it’s needed.
// JavaScript serverga tarmoq so'rovlarini yuborishi va kerak bo'lganda yangi ma'lumotlarni yuklashi mumkin.
// For example, we can use a network request to:// Misol uchun, biz tarmoq so'rovidan foydalanishimiz mumkin:

// * Submit an order,// Buyurtma berish,
// * Load user information,//Foydalanuvchi ma'lumotlarini yuklash,
// * Receive latest updates from the server// Serverdan so'nggi yangilanishlarni oling
// Va bularning barchasi sahifani qayta yuklamasdan// Va bularning barchasi sahifani qayta yuklamasdan
// There are multiple ways to send a network request and get information from the server.
// Tarmoq so'rovini yuborish va serverdan ma'lumot olishning bir necha yo'li mavjud.
// The fetch() method is modern and versatile, so we’ll start with it.It’s not supported by old browsers
//     (can be polyfilled), but very well supported among the modern ones.
// fetch() usuli zamonaviy va ko'p qirrali, shuning uchun biz undan boshlaymiz. Bu eski brauzerlar tomonidan
//  qo'llab-quvvatlanmaydi (polifilli bo'lishi mumkin), ammo zamonaviylar orasida juda yaxshi qo'llab-quvvatlanadi.

// let promise = fetch(url, [options])
// url – the URL to access.
// options – optional parameters: method, headers etc.
// Getting a response is usually a two-stage process.
// Javob olish odatda ikki bosqichli jarayondir.
// First, the promise, returned by fetch,
// resolves with an object of the built -in Response class as soon as the server responds with headers.
// At this stage we can check HTTP status, to see whether it is successful or not, check headers, but don’t have the body yet.
// Ushbu bosqichda biz HTTP holatini tekshirishimiz mumkin, u muvaffaqiyatli yoki yo'qligini bilish uchun, sarlavhalarni tekshiring,
//  lekin hali tanasi yo'q.
// The promise rejects if the fetch was unable to make HTTP - request, e.g.network problems, or there’s no such site.
//  Abnormal HTTP - statuses, such as 404 or 500 do not cause an error.
// Agar olib kelish HTTP so'rovini amalga oshira olmasa, va'da rad etadi, masalan.tarmoq muammolari yoki bunday sayt yo'q.
// 404 yoki 500 kabi g'ayritabiiy HTTP holatlari xatolikka olib kelmaydi.
// ok – boolean, true if the HTTP status code is 200-299.

// let response = await fetch(url);

// if (response.ok) { // if HTTP-status is 200-299
//   // get the response body (the method explained below)
//   let json = await response.json();
// } else {
//   alert("HTTP-Error: " + response.status);
// }
// Second, to get the response body, we need to use an additional method call.
// Ikkinchidan, javob tanasini olish uchun biz qo'shimcha usul chaqiruvidan foydalanishimiz kerak.
// Response provides multiple promise-based methods to access the body in various forma
// Response turli shakllarda tanaga kirish uchun bir nechta va'daga asoslangan usullarni taqdim etadi

// response.text() – read the response and return as text,//
// response.json() – parse the response as JSON,
// response.formData() – return the response as FormData object // javobni FormData ob'ekti sifatida qaytaring (keyingi bobda tushuntirilgan),
// response.blob() – return the response as Blob (binary data with type),// javobni Blob sifatida qaytaring (turi bilan ikkilik ma'lumotlar),
// response.arrayBuffer() – return the response as ArrayBuffer (low-level representation of binary data),// javobni ArrayBuffer sifatida 
// qaytaring (ikkilik ma'lumotlarning past darajadagi namoyishi),
// additionally, response.body is a ReadableStream object, it allows you to read the body chunk-by-chunk, we’ll see an example later.
// qo'shimcha ravishda, respond.body - ReadableStream ob'ekti bo'lib, u tanani qismlarga bo'lib o'qish imkonini beradi, keyinroq misolni ko'rib chiqamiz.

"use strict";

const { response } = require('express')



// (async () => {
//     let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits'
//     let response = await fetch(url);
//     let commits = await response.json()
//     alert(commits[0].author.login);
// })()
////
// fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
//     .then(response => response.parse())
//     .then(commits => alert(commits[0].author.login));

//     (async () => {
//         let response = await fetch("/IMAGE 2024-08-31 03:57:02.jpg")
//         let blob = await response.blob();// download as Blob object// menimcha rasimni nameni boshqacha qilib qoyadi shekili
// 			let img = document.getElementById('img')
			
			
//         img.style = 'position:fixed;top:20px;left:10px;width:100px';
//         document.body.append(img);

//         // show it
//         setTimeout(() => { // hide after three seconds
// 					img.remove();
// 					URL.revokeObjectURL(img.src);
// 				}, 3000);

// })()

///////////
// We can choose only one body-reading method.
// If we’ve already got the response with response.text(),
// then response.json() won’t work, as the body content has already been processed.
// Biz tanani o'qishning faqat bitta usulini tanlashimiz mumkin.
// Agar biz allaqachon javob.text() bilan javob olgan bo'lsak, 
// javob.json() ishlamaydi, chunki asosiy tarkib allaqachon qayta ishlangan.

// The response headers are available in a Map-like headers object in response.headers.
// It’s not exactly a Map, but it has similar methods to get individual headers by name or iterate over them:
// Javob sarlavhalari Xaritaga o'xshash sarlavhalar obyektida javob.headersda mavjud.
// Bu aynan Xarita emas, lekin unda alohida sarlavhalarni nomi bo‘yicha olish yoki
//  ularni takrorlashning o‘xshash usullari mavjud:

// 	(async () => {
// 		let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
// 		// get one header
//     alert(response.headers.get('Content-Type')); // application/json; charset=utf-8
// 		//get one header
// 		for (let [key, value] of response.headers) {
// 			alert(`${key} = ${value}`);
// 		}
// 	})()
// console.log("he");
////////////
// To set a request header in fetch, we can use the headers option. It has an object with outgoing headers, like this:
// Fetchda so'rov sarlavhasini o'rnatish uchun biz sarlavhalar opsiyasidan foydalanishimiz mumkin.Unda quyidagi kabi
//  chiquvchi sarlavhali ob'ekt mavjud:

// let response = fetch(protectedUrl, {
//   headers: {
//     Authentication: 'secret'
//   }
// });
// These headers ensure proper and safe HTTP, so they are controlled exclusively by the browser
// Ushbu sarlavhalar to'g'ri va xavfsiz HTTPni ta'minlaydi, shuning uchun ular faqat brauzer tomonidan boshqariladi
// POST requests
// To make a POST request, or a request with another method, we need to use fetch options
// POST so'rovi yoki boshqa usul bilan so'rov yuborish uchun biz olib kelish opsiyalaridan foydalanishimiz kerak
// * method – HTTP-method, e.g. POST,
// * body – the request body, one of:
//    *  a string (e.g. JSON-encoded),// 
//    *  FormData object, to submit the data as multipart/form-data,//FormData ob'ekti, ma'lumotlarni ko'p qismli/forma-ma'lumotlar sifatida yuborish uchun,
//    *  Blob/BufferSource to send binary data,// Blob/BufferSource ikkilik ma'lumotlarni yuborish uchun
//    *  URLSearchParams, to submit the data in x-www-form-urlencoded encoding, rarely used.// URLSearchParams, ma'lumotlarni x-www-form-urlencoded kodlashda yuborish uchun, kamdan-kam ishlatiladi.
// The JSON format is used most of the time.// JSON formati ko'pincha ishlatiladi.

// "use strict"

// 	(async () => {
// 		let user = {
// 		  name: 'John',
//       surname: 'Smith',
// 		}
		
// 		let response = fetch('/api/api.js/fetch/post/user', {
// 			method: 'POST',
// 			headers: {
// 				'Content-Type':'application/json;charset=utf-8'
// 			},
// 			body: JSON.stringify(user)

// 		})
		
// 		let result = await response.json();
// 		alert(result.message)
// 	})()
// Please note, if the request body is a string, then Content-Type header is set to text/plain;charset=UTF-8 by default.
// E'tibor bering, agar so'rovning asosiy qismi satr bo'lsa, Content-Type sarlavhasi sukut bo'yicha text/plain;charset=UTF-8 ga o'rnatiladi.
// But, as we’re going to send JSON, we use headers option to send application/json instead, the correct Content-Type for JSON-encoded data.
// Ammo, biz JSON yubormoqchi bo'lganimizda, biz JSON kodlangan ma'lumotlar uchun to'g'ri Kontent-Tipi o'rniga dastur/json yuborish uchun sarlavhalar variantidan foydalanamiz.

// Summary
// A typical fetch request consists of two await calls:
// let response = await fetch(url, options); // resolves with response headers
// let result = await response.json(); // read body as json

// Or, without await:
// fetch(url, options)
//   .then(response => response.json())
//   .then(result => /* process result */)

// The form is always sent as Content - Type: multipart / form - data, this encoding allows to send files.So
// 	, <input type="file"> fields are sent also, similar to a usual form submission.

// <!doctype html>
// <body>
// <form id="formElem">
//   <input type="text" name="firstName" value="John">
//   Picture: <input type="file" name="picture" accept="image/*">
//   <input type="submit">
// </form>

// <script>
//   formElem.onsubmit = async (e) => {
//     e.preventDefault();

//     let response = await fetch('/article/formdata/post/user-avatar', {
//       method: 'POST',
//       body: new FormData(formElem)
//     });

//     let result = await response.json();

//     alert(result.message);
//   };
// </script>
// </body>
//////////////////////////////////////////////
// FormData

// Ushbu bob HTML shakllarini yuborish haqida: fayllar bilan yoki fayllarsiz, qo'shimcha maydonlar bilan va hokazo.
// Bunda FormData obyektlari yordam berishi mumkin. Siz taxmin qilganingizdek, bu HTML formasi ma'lumotlarini ifodalash ob'ektidir.

// The special thing about FormData is that network methods, such as fetch, can accept a FormData object as a body.
// FormData-ning o'ziga xos tomoni shundaki, olish kabi tarmoq usullari FormData ob'ektini tana sifatida qabul qilishi mumkin.

// From the server point of view, that looks like a usual form submission.
// Server nuqtai nazaridan, bu odatiy shaklni yuborishga o'xshaydi.
// FormData Methods
// We can modify fields in FormData with methods:

// formData.append(name, value) – add a form field with the given name and value,
// formData.append(name, blob, fileName) – add a field as if it were <input type="file">, the third argument fileName sets file name (not form field name), as it were a name of the file in user’s filesystem,
// formData.delete(name) – remove the field with the given name,
// formData.get(name) – get the value of the field with the given name,
// formData.has(name) – if there exists a field with the given name, returns true, otherwise false
// formData.set(name, value),
// formData.set(name, blob, fileName).