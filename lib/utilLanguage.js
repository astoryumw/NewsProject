require("isomorphic-fetch")

function getLanguageNews(q,language,apiKey) {
	return fetch(`https://newsapi.org/v2/everything?q=${q}&language=${language}&apiKey=${apiKey}`).then(function(resp) {
		return resp.json();
	});
}

function handleError(error) {
	console.warn(error);
	return null;
}

module.exports = {
	getLanguageStory: function(q,language,apiKey) {
		return getLanguageNews(q,language,apiKey).catch(handleError);
	}
}