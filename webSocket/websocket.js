// WebSocket is especially great for services that require continuous data exchange, e.g.online games,
// 	real - time trading systems and so on.
// WebSocket, ayniqsa, doimiy ma'lumotlar almashinuvini talab qiladigan xizmatlar uchun juda yaxshi, masalan. 
// onlayn o'yinlar, real vaqtda savdo tizimlari va boshqalar.

// To open a websocket connection, we need to create new WebSocket using the special protocol ws in the url:
// Websocket ulanishini ochish uchun urldagi ws maxsus protokoli yordamida yangi WebSocket yaratishimiz kerak:

///
// let socket = new WebSocket("ws://javascript.info");

// There’s also encrypted wss:// protocol. It’s like HTTPS for websockets.
// Shuningdek, shifrlangan wss:// protokoli mavjud. Bu veb-rozetkalar uchun HTTPS-ga o'xshaydi.

// Always prefer wss://
// The wss:// protocol is not only encrypted, but also more reliable.
// Har doim wss:// ni afzal ko'ring
// Wss:// protokoli nafaqat shifrlangan, balki ishonchliroq.


// That’s because ws:// data is not encrypted, visible for any intermediary. 
// // Old proxy servers do not know about WebSocket, they may see “strange” headers and abort the connection.
// Buning sababi, ws:// ma'lumotlari shifrlanmagan, har qanday vositachi uchun ko'rinadi. Eski proksi-serverlar 
// WebSocket haqida bilishmaydi, ular "g'alati" sarlavhalarni ko'rishlari va ulanishni to'xtatishlari mumkin.

// On the other hand, wss:// is WebSocket over TLS, (same as HTTPS is HTTP over TLS), 
//  the transport security layer encrypts the data at the sender and decrypts it at the receiver.
// So data packets are passed encrypted through proxies. They can’t see what’s inside and let them through.
//Boshqa tomondan, wss:// - bu TLS orqali WebSocket, (HTTPS, TLS orqali HTTP bo'lgani kabi), transport xavfsizligi 
// qatlami jo'natuvchidagi ma'lumotlarni shifrlaydi va qabul qiluvchida shifrlaydi. Shunday qilib, ma'lumotlar paketlari 
// proksi-serverlar orqali shifrlangan holda uzatiladi. Ular ichkarida nima borligini ko'ra olmaydi va ularni o'tkazib yuboradi.


///
// Once the socket is created, we should listen to events on it. There are totally 4 events:
// Soket yaratilgandan so'ng, biz undagi voqealarni tinglashimiz kerak. Hammasi bo'lib 4 ta hodisa mavjud:

// open – connection established, // aloqa o'rnatildi,
// message – data received, // olingan ma'lumotlar
// error – websocket error,
// close – connection closed.
// …And if we’d like to send something, then socket.send(data) will do that.

// "use strict";
// let socket = new WebSocket ("wss://javascript.info/article/websocket/demo/hello")

// socket.onopen = function (e) {
// 	alert("[open] Connection established");
//   alert("Sending to server");
//   socket.send("My name is Ethan");
// }

// socket.onmessage = function (event) {
// 	alert(`[message] Data received from server: ${event.data}`);
// }

// socket.onclose = function (event) {
// 	if (event.wasClean) {
// 		alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
//   } else {
//     // e.g. server process killed or network down
//     // event.code is usually 1006 in this case
//     alert('[close] Connection died');
//   }
// }

// socket.onerror = function (error) {
// 	alert(`[error]`)
// }

///
///////
// If the server agrees to switch to WebSocket, it should send code 101 response:
// Agar server WebSocket-ga o'tishga rozi bo'lsa, u javob kodini 101 yuborishi kerak:

// The server should respond with a list of protocols and extensions that it agrees to use.
// Server foydalanishga rozi bo'lgan protokollar va kengaytmalar ro'yxati bilan javob berishi kerak.
