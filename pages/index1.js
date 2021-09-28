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
			page: 1,
		}
	}

	handleUpdate(evt) {
		this.setState({ topic: evt.target.value });
	}

	handleClear() {
		this.setState({ topic: ""});
		this.setState({ news: [] });
		this.setState({ exists: false });
	}

	handleNextPage() {
		this.setState({
			page: this.state.page + 1
		});

		this.handleSearch(); // call this again to go to next page
		this.topFunction();
	}

	topFunction() {
		console.log("I'm in top function!");
		console.log(document.body);
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}

	// it calls page 1 twice, then it moves on to page 2
	// maxes out after five pages because i'm not using the paid version
	async handleSearch(evt) {
		const story = await getStory(this.state.topic,"2f50b435635d4b8d9be43f04da54b9ef",this.state.page);
		this.setState({
			news: []
		})
		// without the paid version you can only see the first 100 results
		if (story.articles.totalResults!==0) {
			this.setState({
				exists: true
			})
			console.log(story);

			var author = "";

			for (var i=0; i<story.articles.length; i++) {
				author = story.articles[i].title + " by " + story.articles[i].author + ", " + story.articles[i].source.name;
				
				this.setState(previousState => ({
					news: [...previousState.news, author.split('\n').map(str => <p>{str}</p>)]
				}))
			}
			

		}
		// add one to page here after first call so it won't call page one twice
		if (this.state.page === 1) {
			this.setState({
				page: this.state.page+1
			})
		}


	}

	render() {
		return (
			<div >
			<div className={styles.search}>
				<p>Topic: <input type="text" value={this.state.topic} onChange={this.handleUpdate.bind(this)} /></p>
				<table className={styles.searchButton}>
					<button onClick={this.handleSearch.bind(this)}>Search</button>
					<button onClick={this.handleClear.bind(this)}>Clear</button>
				</table>
			</div>
				<table align="center">
					<td>{this.state.exists ? (
						<div className={styles.newsTable}>
							<p>{this.state.news}</p>
							<button className={styles.searchResults} onClick={this.handleNextPage.bind(this)}>{this.state.page-1}</button>
						</div>
					) : (
						<p></p>
					)}</td>

				</table>
			</div>
		)
	}
}
