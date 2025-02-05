
// setTimeout(myFunction, 3000)

// function myFunction() {
//     document.getElementById("ethan").innerHTML = "I love You !!";
// }
/////////////
// setTimeout(function(){myFunction("Hello")}, 3000)

// function myFunction(value) {
//     document.getElementById("ethan").innerHTML = value
// }

//////////////////////////
// setInterval(dateFunction, 1000)

// function dateFunction() {
//     let date = new Date()
//     document.getElementById('ethan').innerHTML = date.getHours() + " :" +  date.getMinutes()  + ": " + date.getSeconds()
// }
///////////////////////
// JavaScript Promises

// let myPromise = new Promise(function (Resolver, Reject) {
//     let text = 0
    
//     if (text == 0) {
//         Resolver("OK")
//     } else {
//         Reject("err")
//     }
// })

// function myFunction(same) {
//     document.getElementById('ethan').innerHTML= same
// }

// myPromise.then(
//     function (value) { myFunction(value) },
//     function(err){myFunction(err)}
// )
/////////////////////////////////
// const myPromise = new Promise(function (resolver, reject) {
//     setTimeout(function () { myFunction("HEllo") }, 3000);
// });
// function myFunction(same) {
//     document.getElementById('ethan').innerHTML= same
// }
///////////////////////////////////////
