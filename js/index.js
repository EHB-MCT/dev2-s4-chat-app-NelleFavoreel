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
				data.forEach(function (data) {
					const htmlMessage = `
                    <div class="messageItem">
                      <div class="header">
                          <span class="author">${data.author}</span>
                          <span class="time">${data.created_at}</span>
                      </div>
                      <p>
                          Hi there, this is the example
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
