/**
 * Promises 🤞🏻
 *
 */

/*
// Create a promise that will be either resolved or rejected in the future
const promiseOfFutureData = () => {
	const promiseOfData = new Promise( (resolve, reject) => {
		// Our actual code that will either be resolve or reject the promise
		setTimeout(() => {
			resolve("i strong, i halp!");
			// reject("nä jag känner mig litta förkyld 😇");
		}, 3000);
	} );

	return promiseOfData;
}
console.log("Waiting for promise result...", promiseOfFutureData);

promiseOfFutureData()
	.then((data) => {
		console.log("YAY, promise was kept ☺️:", data);
	})
	.catch((err) => {
		console.log("Promise was broken 😢:", err);
	});
*/

// Get data from a URL
const getJSON = (url) => {
	// Return a new Promise
	return new Promise((resolve, reject) => {
		// The actual promise-code

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

					// callback(false, data);
					resolve(data);

				} else {
					// Something went wrong ❌
					console.error("🚨 DANGER DANGER WILL ROBINSON!!!!!!!!");
					// callback("Error getting data! Status code was: " + request.status);
					reject("Error getting data! Status code was: " + request.status)
				}
			}
		});

		// Send the request 📮
		request.send();

		console.log("Request sent to:", url);
	});
}

/*
const promiseOfDogs = getJSON("data/dogs.json");
console.log("promiseOfDogs:", promiseOfDogs);

const promiseOfCats = getJSON("data/cats.json");
console.log("promiseOfCats:", promiseOfCats);
*/

// getJSON("data/dogs.json", (err, data) => {});
getJSON("data/dogs.json")
	.then((dogs) => {
		console.log("Yay dogs:", dogs);
	})
	.catch((err) => {
		console.error("No dogs 😢:", err);
	});

getJSON("data/cats.json")
	.then((cats) => {
		console.log("Yay cats:", cats);
	})
	.catch((err) => {
		console.error("No cats 😢:", err);
	});
