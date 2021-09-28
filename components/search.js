import React, { useState, useEffect, useRef } from 'react';
import { getStory } from "../lib/util.js";
import styles from "../styles.module.css";

export default function Search() {
	let [info,setInfo] = useState({
		news: [],
		topic: "",
		exists: false
	});
	const [count, setCount] = useState(1);
	const prevCount = usePrevious(count);
	const [test] = useState(true); // added because apparently the api i'm using has a limit when using the free version

	function handleUpdate(evt) {
		setInfo({
			news: [],
			topic: evt.target.value,
			exists: false
		})
	}

	async function handleSearch() {
		const story = await getStory(info.topic,"2f50b435635d4b8d9be43f04da54b9ef",count);
		console.log(story);

		if (story.status === "ok") {
			setInfo({
				news: [],
				topic: info.topic,
				exists: true
			})

			var author = "";
			var collection = [];

			for (var i=0; i<story.articles.length; i++) {
				if (story.articles[i].title == null) {
					author = story.articles[i].author + ", " + story.articles[i].source.name + "\n";
				} else if (story.articles[i].author == null) {
					author = story.articles[i].title + ", " + story.articles[i].source.name + "\n";
				} else if (story.articles[i].source.name == null) {
					author = story.articles[i].title + ", " + story.articles[i].author + ", " + "\n";
				} else {
					author = story.articles[i].title + ", " + story.articles[i].author + ", " + story.articles[i].source.name + "\n";
				}
				

				collection = collection + author;
			}

			try {
				setInfo({
					news: collection.split('\n').map(str => <p>{str}</p>),
					topic: info.topic,
					exists: true
				})
			} catch (e) {
				if (e instanceof TypeError) {
					console.log("You got a type error, is it entered correctly?");
				} else {
					console.log("Unknown error gl");
				}
			}

		} else {
			console.log("dne");
		}

	}

	function handleClear() {
		setInfo({
			news: [],
			topic: "",
			exists: false
		});
	}

	// usePrevious allows me to go back a page and go forward a page freely
	function usePrevious(value) {
	    const ref = useRef();

	    // this doesn't do anything I'm just getting rid of the buttons in return
	    if (value>5 || value<1) {
	    	console.log("no");
	    	return;
	    } else {
	    	useEffect(() => {
		      ref.current = value;
		      handleSearch();
		    }, [value]);

		    return ref.current;
	    }
	}

	return (
		<div className={styles.pageTable}>
		    <h1>Search Away...</h1>
		    <p>And learn something new today.</p>
		    <div>
				<p><input type="text" value={info.topic} onChange={handleUpdate} /></p>
				<div className={styles.searchBox}>
					<button onClick={handleSearch} className={styles.right}>Search</button>
					<button onClick={handleClear} className={styles.left}>Clear</button>
				</div>
				<p>{info.exists}</p>
				{info.exists && count>1 && count<5 ? (
					<div className={styles.pageChange}>
						<p className={styles.news}>{info.news}</p>
						<div className={styles.buttonPage}>
							<button onClick={() => setCount(count-1)} className={styles.right}>previous</button>
							<h4>{count}</h4>
			      			<button onClick={() => setCount(count+1)} className={styles.left}>next</button>
		      			</div>
	      			</div>
				) : info.exists && count===1 ? (
					<div className={styles.pageChange}>
						<p className={styles.news}>{info.news}</p>
						<div className={styles.buttonPage}>
							<h4>{count}</h4>
		      				<button onClick={() => setCount(count+1)} className={styles.left}>next</button>
		      			</div>
	      			</div>
				) : info.exists && count===5 ? (
					<div className={styles.pageChange}>
						<p className={styles.news}>{info.news}</p>
						<div className={styles.buttonPage}>
							<button onClick={() => setCount(count-1)} className={styles.right}>previous</button>
							<h4>{count}</h4>
						</div>
	      			</div>
				) : (
					<p></p>
				)}
			</div>
		</div>
	)
}