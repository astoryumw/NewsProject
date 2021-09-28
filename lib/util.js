require("isomorphic-fetch")

function getNews(q,apiKey,page) {
	// console.log(q);
	// console.log(page);
	return fetch(`https://newsapi.org/v2/everything?q=${q}&apiKey=${apiKey}&page=${page}`).then(function(resp) {
		return resp.json();
	});
}

function handleError(error) {
	console.warn(error);
	return null;
}

module.exports = {
	getStory: function(q,apiKey,page) {
		return getNews(q,apiKey,page).catch(handleError);
	}
}