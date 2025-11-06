/**
 * Pets
 *
 * First send a request to `data/pets.json`,
 * _THEN_ send a request to each `url` in the response
 *
 * For each response, output it's data to the corresponding list
 */

const getJSON = (url, callback) => {
	// Create a new XMLHttpRequest
	const request = new XMLHttpRequest();

	// Set request to GET data from the URL
	request.open("GET", url);

	// Attach an event-listener to the request
	request.addEventListener("readystatechange", () => {
		// Is request done?
		if (request.readyState === 4) {
			// Yay request is finished!

			// Was the request successful?
			if (request.status === 200) {
				// 200 OK 👍🏻

				// Take the JSON-STRING and PARSE it into a JavaScript value
				const data = JSON.parse(request.responseText);

				callback(false, data);

			} else {
				// Something went wrong ❌
				console.error("🚨 DANGER DANGER WILL ROBINSON!!!!!!!!");
				callback("Error getting data! Status code was: " + request.status);
			}
		}
	});

	// Send the request 📮
	request.send();

	console.log("Request sent to:", url);
}
