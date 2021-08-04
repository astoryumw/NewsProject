import React from 'react';
import { getStory } from "../lib/util.js";
import styles from "../styles.module.css";

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			news: [],
			topic: "",
			exists: false,
		}
	}

	handleUpdate(evt) {
		this.setState({ topic: evt.target.value });
	}
	async handleSearch(evt) {
		// const user = await getNews();
		// console.log(user);
		const story = await getStory(this.state.topic,"2f50b435635d4b8d9be43f04da54b9ef");
		this.setState({
			news: []
		})
		if (story.articles.totalResults!==0) {
			this.setState({
				exists: true
			})
			console.log(story);

			// this.setState({
			// 	newsAuthor: story.articles[0].author
			// })

			var author = "";

			// newsAuthor story.articles[0].author
			for (var i=0; i<story.articles.length; i++) {
				// console.log(this.state.newsAuthor);
				author = story.articles[i].source.id + ", " + story.articles[i].author + ", " + story.articles[i].content;
				// console.log(author.split('\n').map(str => <p>{str}</p>));
				
				this.setState(previousState => ({
					news: [...previousState.news, author.split('\n').map(str => <p>{str}</p>)]
				}))
			}
			

		}

	}

	render() {
		return (
			<div>
			<p>Topic: <input type="text" value={this.state.topic} onChange={this.handleUpdate.bind(this)} /></p>
				<button onClick={this.handleSearch.bind(this)}>Search</button>
				<table align="right">
					<td>{this.state.exists ? (
						<div className={styles.newsTable}>
							<p>{this.state.news}</p>
						</div>
					) : (
						<p></p>
					)}</td>
				</table>
			</div>
		)
	}
}
