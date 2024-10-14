import React from 'react'
import styles from './edit.module.scss'

export default async function Edit() {
	const res = await fetch('http://localhost:3000/api/data');
	const data = await res.json();
	console.log(data)


	return (
		<>
			<div className={styles.edit}>データのリスト</div>
			<div>{data.id}</div>
			<div>{data.name}</div>
			<div>{data.age}</div>
		</>
	);
}