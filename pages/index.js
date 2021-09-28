import React, { useState, useEffect, useRef } from 'react';
import { getStory } from "../lib/util.js";
import styles from "../styles.module.css";
import Search from "../components/search.js";

export default function Home() {

	return (
		<div className={styles.background}>
			<Search />

			<img src="circle.png" className={styles.rotate} alt="circle"></img>
		</div>
	)
}