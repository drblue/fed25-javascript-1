/**
 * async/await 🐶
 *
 */

/*
// Wait for response from fetch
// Wait for parsing of response from JSON to JavaScript
// Use data
fetch("data/cats.json")
	.then((response) => {
		if (!response.ok) {
			throw new Error("Request was not OK!");
		}

		return response.json();
	})
	.then((data) => {
		console.log("data:", data);
	})
	.catch((err) => {
		console.log("🚨 Something went wrong:", err);
	});
*/

/*
const getData = (url) => {
	console.log("Would get data from:", url);
	return "who let the kittehs out";
}
*/


const getPromiseData = (url) => {
	console.log("Would get data from:", url);
	return new Promise((resolve, reject) => {
		resolve("who let the promised kittehs out");
	});
}

/*
const promiseOfData = getPromiseData("data/cats.json");  // will return a promise of future data
promiseOfData.then((data) => {
	console.log("Got future data:", data);
});
*/

/*
// same as above `getPromiseData`, but we don't have to manually create a new promise and call `resolve()`
const getAsyncData = async (url) => {
	console.log("Would get data from:", url);
	return "who let the async kittehs out";
}
const data = getAsyncData("data/cats.json");
console.log("getAsyncData return value:", data);
console.log("getAsyncData return type:", typeof data);
*/

/*
// getData, promise version
const getData = (url) => {
	return fetch(url)
		.then((response) => {
			if (!response.ok) {
				throw new Error("Request was not OK!");
			}

			return response.json();
		})
		.then((data) => {
			console.log("Got me some data:", data);
			return data;
		})
		.catch((err) => {
			console.log("🚨 Something went wrong:", err);
		});
}
*/

// getData, async/await version
const getData = async (url) => {
	const response = await fetch(url);

	if (!response.ok) {
		throw new Error("Request was not OK!");
	}

	const data = await response.json();
	console.log("Got me some data:", data);

	return data;
}

/*
// get data from `data/cats.json` and THEN when we have the data, log it to the console and THEN get `data/dogs.json` etc
getData("data/cats.json")
	.then((cats) => {
		console.log("cats:", cats);

		return getData("data/dogs.json");
	})
	.then((dogs) => {
		console.log("dogs:", dogs);
	})
	.catch((err) => {
		console.log("🚨 Something went wrong:", err);
	});
*/

const getPets = async () => {
	try {
		const cats = await getData("data/catz.json");
		console.log("cats:", cats);

		const dogs = await getData("data/dogs.json");
		console.log("dogs:", dogs);

	} catch (err) {
		console.log("🚨 Something went wrong:", err);
	}
}
getPets();  // will return an empty promise, only used to kickstart the app / fetching of data
