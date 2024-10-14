'use client';

import { useState, useEffect } from "react";
import styles from "./client.module.scss"
import { Dataitem } from "../api/data/types"


export default function Client() {
	const [data, setData] = useState<Dataitem[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch('/api/data');
			const jsondata = await res.json();
			console.log(jsondata);
			setData(jsondata);
		};
		fetchData();
	}, []);


	return (
		<>
			<div className={styles.client}>ddd</div>
			
			{data.map((item) => (
				<div key={item.id}>{item.name}</div>
			))}
		</>
	)



}