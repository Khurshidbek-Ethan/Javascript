// console.log($)

// jQuery is a JavaScript Library.// javaScript

// jQuery greatly simplifies JavaScript programming.// jQuery JavaScript dasturlashni ancha soddalashtiradi.
// JQuery sintaksisi HTML elementlarini tanlash va element(lar)da ba'zi amallarni bajarish uchun mo'ljallangan.

// $(document).ready(function () {
// 	$('button').click(function () {
// 		$('p').hide()
// 	})
// })

//////////////// id = # // class = .
// $(document).ready(function () {
// 	$('button').click(function () {
// 		$('#arapov').hide()
// 	})
// })
///////////
// $("*") Selects all elements ///  Barcha elementlarni tanlaydi // kearak bolsa buttonni oziniham tanlaydi

// $(document).ready(function () {
// 	$('button').click(function () {
// 		$('*').hide()
// 	})
// })
//////////
// $(this)	 Selects the current HTML element // Joriy HTML elementini tanlaydi
// this bu qaysinga urgi berishimiz ekan biz buttonni urgi berdik
// $(document).ready(function () {
// 	$('button').click(function () {
// 		$(this).hide()
// 	})
// })
/////
// this p elementiga qaratilgan
// $(document).ready(function () {
// 	$('p').click(function () {
// 		$(this).hide()
// 	})
// })
///////////////
// Selects the first <p> element // $("p:first")	Selects the first <p> element
// $(document).ready(function () {
// 	$('button').click(function () {
// 		$('p:first').hide()
// 	})
// })
///////////////
// Selects the first <li> element of the first <ul>
// $(document).ready(function () {
// 	$('button').click(function () {
// 		$('ul li:first').hide()
// 	})
// })
//////////////
// $("ul li:first-child")	Selects the first <li> element of every <ul> ikkila tablisadan 1 chilari hide boladi
// $(document).ready(function () {
// 	$('button').click(function () {
// 		$('ul li:first-child').hide()
// 	})
// })
///////////////
// Selects all elements with an href attribute // hreflar hide boladi
// $(document).ready(function () {
// 	$('button').click(function () {
// 		$('[href]').hide()
// 	})
// })
/////////////////
// $("a[target='_blank']")	Selects all <a> elements with a target attribute value equal to "_blank" //
// $(document).ready(function () {
// 	$('button').click(function () {
// 		$('a[target = _blank]').hide()
// 	})
// })
//////////////////
// $("a[target!='_blank']")	 Selects all <a> elements with a target attribute value NOT equal to "_blank" // blankga teng bolmaganlarni hide qiladi

// $(document).ready(function () {
// 	$('button').click(function () {
// 		$('a[target!=_blank ]').hide()
// 	})
// })
//////////////////
// // $(":button")	Selects all <button> elements and <input> elements of type="button"
// $(document).ready(function () {
// 	$('button').click(function () {
// 		$(':button').hide()
// 	})
// })
// // $(":button")	Selects all <button> elements and <input> elements of type="button"
// $(document).ready(function () {
// 	$('button').click(function () {
// 		$(':button').hide() // type button bolish kerak
// 	})
// })
///////////////////
//$("tr:even")   Selects all even <tr> elements
// $(document).ready(function () {
// 	$('tr:even').css('background-color', 'red')
// })
////////
// $("tr:odd")	Selects all odd <tr> elements

// $(document).ready(function () {
// 	$('tr:even').css('background-color', 'red')
// 	$('tr:odd').css('background-color', 'yellow')
// })
////////////
// dblclick() The function is executed when the user double-clicks on the HTML element:
// Funktsiya foydalanuvchi HTML elementiga ikki marta bosganida bajariladi:
// $(document).ready(function () {
// 	$('p').dblclick(function () {
// 		$('p').hide()
// 	})
// })
/////////////////
// mouseenter()  The function is executed when the mouse pointer enters the HTML element:
// Funktsiya sichqoncha ko'rsatkichi HTML elementiga kirganda bajariladi:

// $(document).ready(function () {
// 	$('#arapov').mouseenter(function () {
// 		alert('Welcom to Arapov')
// 	})
// })
/////////////////////
// mouseleave() method attaches an event handler function to an HTML element.
// mouse leave bolganda function ishleydi.
// $(document).ready(function () {
// 	$('#arapov').mouseleave(function () {
// 		alert('2')
// 	})
// })
//////////////////
//mousedown()  Funktsiya sichqonchaning chap, o'rta yoki o'ng tugmasi bosilganda,
// sichqoncha HTML elementi ustida bo'lganda bajariladi:
// $(document).ready(function () {
// 	$('#arapov').mousedown(function () {
// 		alert('Hello')
// 	})
// })
//////////////////////
// mouseup() The function is executed, when the left, middle or right mouse button is released,
//  while the mouse is over the HTML element:
// $(document).ready(function () {
// 	$('#arapov').mouseup(function () {
// 		alert('Hello')
// 	})
// })
//////////////////////
// hover() The hover() method takes two functions and is a combination of the mouseenter() and mouseleave() methods.
// usuli ikkita funktsiyani oladi va mouseenter() va mouseleave() usullarining birikmasidir.
// The first function is executed when the mouse enters the HTML element, and the second function is executed when the mouse leaves the HTML
// Birinchi funktsiya sichqoncha HTML elementiga kirganda, ikkinchi funksiya esa sichqoncha HTMLdan chiqqanda bajariladi.
// $(document).ready(function () {
// 	$('#arapov').hover(
// 		function () {
// 			alert('You entered p1!')
// 		},
// 		function () {
// 			alert('Bye! You now leave p1!')
// 		}
// 	)
// })
////////////////////////
// focus() The function is executed when the form field gets focus:
// Shakl maydoni diqqat markazida bo'lganda funktsiya bajariladi:
// blur()  The function is executed when the form field loses focus:
// Shakl maydoni fokusni yo'qotganda funktsiya bajariladi:
// $(document).ready(function () {
// 	$('input').focus(function () {
// 		$(this).css('background-color', 'yellow')
// 	})
// 	$('input').blur(function () {
// 		$(this).css('background-color', 'red')
// 	})
// })
///
// $(document).ready(function () {
// 	$('input').focus(function () {
// 		$(this).css('background-color', 'yellow')
// 	})
// 	$('input').blur(function () {
// 		$(this).css('background-color', 'red')
// 	})
// })
/////////////////////////////
// The on() method attaches one or more event handlers for the selected elements.
// on() usuli tanlangan elementlar uchun bir yoki bir nechta hodisa ishlov beruvchilarini biriktiradi.

// $(document).ready(function () {
// 	$('p').on('click', function () {
// 		$(this).hide()
// 	})
// })
/////////////////////////////////
// $(document).ready(function () {
// 	$('p').on({
// 		mouseenter: function () {
// 			$(this).css('background-color', 'lightgray')
// 		},
// 		mouseleave: function () {
// 			$(this).css('background-color', 'lightblue')
// 		},
// 		click: function () {
// 			$(this).css('background-color', 'yellow')
// 		},
// 	})
// })
//////////////////////////
// $(document).ready(function () {
// 	$('.ex .al').click(function () {
// 		$(this).parents('.ex').hide('slow')
// 	})
// })

/////////////////////////////
// hide() and show() methods
// $(selector).hide(speed,callback);
// $(selector).show(speed,callback);

// $(document).ready(function () {
// 	$('.closeId').click(function () {
// 		$('p').hide()
// 	}),
// 		$('.openId').click(function () {
// 			$('p').show()
// 		})
// })
////////////////////////////////
// $(document).ready(function () {
// 	$('.closeId').click(function () {
// 		$('p').hide(2000)
// 	})
// })
/////////////////////
// toggle() Shown elements are hidden and hidden elements are shown:
// $(selector).toggle(speed,callback);
// The optional speed parameter can take the following values: "slow", "fast", or milliseconds

// $(document).ready(function () {
// 	$('button').click(function () {
// 		$('p').toggle(1000)
// 	})
// })

/////////////////////////
// The jQuery fadeIn() method is used to fade in a hidden element.
// $(selector).fadeIn(speed,callback);
// JQuery fadeIn() usuli yashirin elementni ochish (open) uchun ishlatiladi.

// $(document).ready(function () {
// 	$('button').click(function () {
// 		$('#div1').fadeIn(), $('#div2').fadeIn('slow'), $('#div3').fadeIn(1000)
// 	})
// })
///////////////////////
// The jQuery fadeOut() method is used to fade out a visible element.
// JQuery fadeOut() usuli ko'rinadigan elementni korinmas qilish  uchun ishlatiladi.

// $(document).ready(function () {
// 	$('button').click(function () {
// 		$('#div1').fadeOut()
// 		$('#div2').fadeOut('slow')
// 		$('#div3').fadeOut(2500)
// 	})
// })
/////////////////////////
// The jQuery fadeToggle() method toggles between the fadeIn() and fadeOut() methods.
// If the elements are faded out, fadeToggle() will fade them in.
// If the elements are faded in, fadeToggle() will fade them out.
// $(document).ready(function () {
// 	$('button').click(function () {
// 		$('#div1').fadeToggle()
// 		$('#div2').fadeToggle('slow')
// 		$('#div3').fadeToggle(2500)
// 	})
// })
////////////////////////////
// The jQuery fadeTo() method allows fading to a given opacity (value between 0 and 1).
// $(selector).fadeTo(speed,opacity,callback);
// $(document).ready(function () {
// 	$('button').click(function () {
// 		$('#div1').fadeTo('slow', 0.25)
// 		$('#div2').fadeTo('slow', 0.4)
// 		$('#div3').fadeTo('slow', 0.7)
// 	})
// })
////////////////////////
// The jQuery slide methods slide elements up and down.
// JQuery slide usullari elementlarni yuqoriga va pastga siljitadi.

// jQuery slideDown() Method
// The jQuery slideDown() method is used to slide down an element.
// $(selector).slideDown(speed,callback);

// $(document).ready(function () {
// 	$('#flip').click(function () {
// 		$('#panel').slideDown()
// 	})
// })
/////////////////////////////
// The jQuery slideUp() method is used to slide up an element.
// $(document).ready(function () {
// 	$('#flip').click(function () {
// 		$('#panel').slideUp()
// 	})
// })
/////////////////////////////
// The jQuery slideToggle() method toggles between the slideDown() and slideUp() methods.
// $(document).ready(function () {
// 	$('#flip').click(function () {
// 		$('#panel').slideToggle()
// 	})
// })
/////////////////////////////
// With jQuery, you can create custom animations
// JQuery yordamida siz maxsus animatsiyalarni yaratishingiz mumkin

// The jQuery animate() method is used to create custom animations
// JQuery animate() usuli maxsus animatsiyalarni yaratish uchun ishlatiladi
// $(selector).animate({params},speed,callback);
// The required params parameter defines the CSS properties to be animated.

// $(document).ready(function () {
// 	$('button').click(function () {
// 		$('div').animate({ left: '1400px' }, 'slow')
// 	})
// })
/////////////////////////////

// $(document).ready(function () {
// 	$('button').click(function () {
// 		$('div').animate(
// 			{
// 				left: '1000',
// 				opacity: '0.5',
// 				height: '300px',
// 				width: '300px',
// 			},
// 			'slow'
// 		)
// 	})
// })
////////////////////////////////
// $(document).ready(function () {
// 	$('button').click(function () {
// 		$('div').animate({ height: 'toggle' }, 'slow')
// 	})
// })
////////////////////////////////
// $(document).ready(function () {
// 	$('button').click(function () {
// 		let div = $('div')
// 		div.animate({ height: '300px', opacity: '0.4' }, 'slow')
// 		div.animate({ width: '300px', opacity: '0.8' }, 'slow')
// 		div.animate({ height: '100px', opacity: '0.4' }, 'slow')
// 		div.animate({ width: '100px', opacity: '0.8' }, 'slow')
// 	})
// })
/////////////////////////
// The jQuery stop() method is used to stop animations or effects before it is finished
// $(document).ready(function () {
// 	$('#flip').click(function () {
// 		$('#panel').slideDown(3000)
// 	}),
// 		$('#stop').click(function () {
// 			$('#panel').stop()
// 		})
// })
//////////////////////////
// A callback function is executed after the current effect is 100% finished.
// Qayta qo'ng'iroq funktsiyasi joriy effekt 100% tugagandan so'ng amalga oshiriladi.

// $(selector).hide(speed,callback);
// $(document).ready(function () {
// 	$('button').click(function () {
// 		$('p').hide('slow', function () {
// 			alert(' Fineshed All mission')
// 		})
// 	})
// })
////////////////////////////////
// With jQuery, you can chain together actions/methods.
// JQuery yordamida siz harakatlar/usullarni birlashtirishingiz mumkin.
// Zanjirlash bizga bitta bayonotda bir nechta jQuery usullarini (bir xil elementda) ishlatishga imkon beradi.

// Hozirgacha biz jQuery bayonotlarini birma-bir yozmoqdamiz (birin-ketin).

// 	Biroq, zanjir deb ataladigan texnika mavjud bo'lib, u bizga bir xil
// element(lar)da birin - ketin bir nechta jQuery buyruqlarini bajarishga imkon beradi.

// $(document).ready(function () {
// 	$('button').click(function () {
// 		$('p').slideUp(2000).slideDown(2000).css('color', 'red')
// 	})
// })
/////////////////////////////
// text() - Sets or returns the text content of selected elements
// html() - Sets or returns the content of selected elements (including HTML markup)

// $(document).ready(function () {
// 	$('#btn1').click(function () {
// 		alert('Text' + $('#test').text())
// 	}),
// 		$('#btn2').click(function () {
// 			alert('HTML' + $('#test').html())
// 		})
// })
////////////////////
// The following example demonstrates how to get the value of an input field with the jQuery val() method:
// Quyidagi misol jQuery val() usuli yordamida kirish maydonining qiymatini qanday olish mumkinligini ko'rsatadi:
//yani alertdagi inputga yoki inputdagi kiritilgan malumotni olib keladi
// $(document).ready(function () {
// 	$('button').click(function () {
// 		alert($('#inputtest').val())
// 	})
// })
/////////////////////////////
// attr()
// Quyidagi misol havoladagi href atributining qiymatini qanday olish mumkinligini ko'rsatadi:

// $(document).ready(function () {
// 	$('button').click(function () {
// 		alert($('#w3s').attr('href'))
// 	})
// })
//////////////////////
// $(document).ready(function () {
// 	$('button').click(function () {
// 		$('#w3s').attr({
// 			href: 'https://www.w3schools.com/jquery/',
// 			title: 'W3Schools jQuery Tutorial',
// 		})
// 	})
// })
/////////////////////////
// Add New HTML Content
// append() - Inserts content at the end of the selected elements
// append() - tanlangan elementlarning oxiriga tarkibni kiritadi

//prepend() Inserts content at the beginning of the selected elements
// Tanlangan elementlarning boshiga tarkibni kiritadi

// after() - Inserts content after the selected elements
// after() - tanlangan elementlardan keyin tarkibni kiritadi

// before() - Inserts content before the selected elements
// - Tanlangan elementlardan oldin tarkibni kiritadi
/////////
// The jQuery append() method inserts content AT THE END of the selected HTML elements.

// $(document).ready(function () {
// 	$('#btn1').click(function () {
// 		$('p').append('<b>Appended text</b>.')
// 	}),
// 		$('#btn2').click(function () {
// 			$('ol').append('<li>Appended item</li>')
// 		})
// })
////////////

// The jQuery prepend() method inserts content AT THE BEGINNING of the selected HTML elements
// $(document).ready(function () {
// 	$('#btn1').click(function () {
// 		$('p').prepend('<b>Prepended text</b>.')
// 	})
// 	$('#btn2').click(function () {
// 		$('ol').prepend('<li>Prepended item</li>')
// 	})
// })
///////////////
// after() - Inserts content after the selected elements
// after() - tanlangan elementlardan keyin tarkibni kiritadi

// before() - Inserts content before the selected elements
// - Tanlangan elementlardan oldin tarkibni kiritadi

// $(document).ready(function () {
// 	$('#btn1').click(function () {
// 		$('img').before('<b>Before</b>')
// 	})

// 	$('#btn2').click(function () {
// 		$('img').after('<i>After</i>')
// 	})
// })
////////////////////
// remove() - Removes the selected element (and its child elements)
// $(document).ready(function () {
// 	$('button').click(function () {
// 		$('#div1').remove()
// 	})
// })
/////////////////////
// The jQuery empty() method removes the child elements of the selected element(s).
// $(document).ready(function () {
// 	$('button').click(function () {
// 		$('#div1').empty() // divni ichini empty qilib qoyar ekan
// 	})
// })
