// AJAX is the art of exchanging data with a server,
// and updating parts of a web page - without reloading the whole page.

// AJAX - bu butun sahifani qayta yuklamasdan server bilan ma'lumot almashish
// va veb-sahifa qismlarini yangilash san'ati.

// AJAX = Asynchronous JavaScript and XML.

// The load() method loads data from a server and puts the returned data into the selected element.

// $(selector).load(URL,data,callback);
$(document).ready(function () {
	$('button').click(function () {
		$('#div1').load('demo_test.txt')
	})
})
