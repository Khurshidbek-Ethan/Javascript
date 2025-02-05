// What is the DOM?
// The DOM is a W3C (World Wide Web Consortium) standard.

// Core DOM - standard model for all document types
// XML DOM - standard model for XML documents
// HTML DOM - standard model for HTML documents
///
// What is the HTML DOM?
// The HTML DOM is a standard object model and programming interface for HTML. It defines:

// The HTML elements as objects
// The properties of all HTML elements
// The methods to access all HTML elements
// The events for all HTML elements

/////////////////////
// Finding HTML Element by Id

// const element = document.getElementById('intro')

// document.getElementById('ethan').innerHTML = "plus text =>"+ element.innerHTML
/////////////
// Finding HTML Elements by Tag Name
// This example finds all <p> elements:

// const element = document.getElementsByTagName('p')
// document.getElementById("ethan").innerHTML = "plus text =>"+ element[1].innerHTML
/////////////////////////
// const element = document.getElementById('main')
// const text = document.getElementsByTagName('p')
// document.getElementById('ethan').innerHTML = "plus text =>"+ text[1].innerHTML
//////////////////////////////
// const elementClass = document.getElementsByClassName('introClass')
// document.getElementById('ethan').innerHTML = "Plus Classtext =>" + elementClass[1].innerHTML
//////////////////////
// Finding HTML Elements by CSS Selectors
// const queryElement = document.querySelectorAll("p.introClass")
// document.getElementById('ethan').innerHTML = "Query Selector ALL =>" + queryElement[1].innerHTML
//////////////////////////////////
// const getForm = document.forms['frm1']

// let text = "";
// for (let i = 0; i < getForm.length;i++){
//     text += getForm.elements[i].value + "<br>"
// }
// document.getElementById('ethan').innerHTML  = text
/////////////////////////////////
// The addEventListener() method attaches an event handler to the specified element.
// addEventListener() usuli belgilangan elementga hodisa ishlov beruvchisini biriktiradi.

// document.getElementById("myBtn").addEventListener("click", displayDate);

// function displayDate() {
//   document.getElementById("ethan").innerHTML = Date();
// }
////////
// document.getElementsByClassName("myClass").addEventListener("click", function() {
//     alert("Hello World!");
//   });

//   document.getElementById("myId").addEventListener("click", function() {
//     alert("Hello World!");
//   });
///
// element.getElementsByClassName('myClass').addEventListener("click", myFunction)

// function myFunction() {
//     alert("Hello")
// }
////
// let getButton = document.getElementById('myId')
// getButton.addEventListener("click", myfunction)

// function myfunction() {
//     return "Helllo"
// }
////////////
