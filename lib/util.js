require("isomorphic-fetch")

function getNews(q,apiKey) {
	return fetch(`https://newsapi.org/v2/everything?q=${q}&apiKey=${apiKey}`).then(function(resp) {
		return resp.json();
	});
}

function handleError(error) {
	console.warn(error);
	return null;
}

module.exports = {
	getStory: function(q,apiKey) {
		return getNews(q,apiKey).catch(handleError);
	}
}