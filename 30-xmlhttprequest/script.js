/**
 * XMLHttpRequest
 *
 * MINI-WORKSHOP: Skriv funktionen `getJSON` som kan hämta vilken URL som helst
 * och ÄNDÅ ta emot en callback som får två parametrar där den första är om något
 * går fel och den andra är datan från om requesten lyckas.
 */

const getJSON = (url, callback) => {
	// Create a new XMLHttpRequest
	const request = new XMLHttpRequest();
	// console.log("Request readyState after new:", request.readyState);

	// Set request to GET data from the URL
	request.open("GET", url);
	// console.log("Request readyState after open:", request.readyState);

	// Attach an event-listener to the request
	request.addEventListener("readystatechange", () => {
		// Log request status
		// console.log("readystatechange - readyState:", request.readyState);
		// console.log("readystatechange - responseText:", request.responseText);

		// Is request done?
		if (request.readyState === 4) {
			// Yay request is finished!

			// Was the request successful?
			if (request.status === 200) {
				// 200 OK 👍🏻
				// console.log("🆗 Request done, yay! Response was:", request.responseText);

				// Take the JSON-STRING and PARSE it into a JavaScript value
				const data = JSON.parse(request.responseText);
				console.log("🆗 Response OK & done");

				callback(false, data);

			} else {
				console.error("🚨 DANGER DANGER WILL ROBINSON!!!!!!!!");
				callback("Error getting data! Status code was: " + request.status);
			}
		}
	});

	// Send the request
	request.send();
	// console.log("Request readyState after send:", request.readyState);

	// Done (?)
	console.log("Request sent to:", url);
}

// FIRST Get users plz
getJSON("https://jsonplaceholder.typicode.com/users", (err, users) => {
	console.log("📞 Hello from callback for users");

	if (err) {
		// Something went wrong 😢
		alert(err);
		return;
	}

	// Transform the data-array into listitems and output to DOM
	document.querySelector("#users").innerHTML = users
		.map((user) => `<li>${user.name}</li>`)
		.join("");

	// THEN Get posts plz
	getJSON("https://jsonplaceholder.typicode.com/posts", (err, posts) => {
		console.log("📞 Hello from callback for posts");
		if (err) {
			// Something went wrong 😢
			alert(err);
			return;
		}

		// Transform the data-array into listitems and output to DOM
		document.querySelector("#posts").innerHTML = posts
			.map((post) => `
				<li>
					${post.title} <em>by ${users.find(user => user.id === post.userId).name}</em>
				</li>
			`)
			.join("");
	});
} );

console.log("All requests sent!");
