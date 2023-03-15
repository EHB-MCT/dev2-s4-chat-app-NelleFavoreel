"use strict";

const chat = {
	author: "yourName",
	init() {
		this.fetchMessages();
	},
	sendMessage() {},
	fetchMessages() {
		fetch("https://dev2chat.onrender.com/messages")
			.then((response) => response.json())
			.then(function (data) {
				console.log(data);
				document.querySelector("#messageContainer").innerHTML = data[0].message;
			});
	},
	renderMessage(message) {},
};
chat.init();
