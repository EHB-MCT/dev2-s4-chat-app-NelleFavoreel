"use strict";

const chat = {
	author: "yourName",
	init() {
		this.fetchMessages();
		this.sendMessage();
	},
	sendMessage() {
		let data = {
			author: chat.author,
			message: "hallo1",
		};

		fetch("https://dev2chat.onrender.com/message", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		document.querySelector("chatImput").addEventListener("submit", function (event) {
			event.preventDefault();
			let msgToSend = document.querySelector("#chatImput").value;
		});
		this.fetchMessages();
	},
	fetchMessages() {
		fetch("https://dev2chat.onrender.com/messages")
			.then((response) => response.json())
			.then(function (data) {
				console.log(data);
				data.sort(function (a, b) {
					if (a.id < b.id) {
						return -1;
					} else {
						return 1;
					}
				});
				data.forEach(function (data) {
					const htmlMessage = `
                    <div class="messageItem">
                      <div class="header">
                          <span class="author">${data.author}</span>
                          <span class="time">${data.created_at}</span>
                      </div>
                      <p>
                          ${data.message}
                      </p>
                  </div>`;
					document.querySelector("#messageContainer").insertAdjacentHTML("beforeend", htmlMessage);
				});
			});
	},
	renderMessage(message) {},
};
chat.init();
