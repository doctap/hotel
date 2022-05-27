import React from 'react';
import { IBtnSubmit } from './BtnSubmitInterface';
import styles from './LongSubmit.module.scss';

export default function LongSubmit(props: IBtnSubmit) {
	return (
		<button
			className={styles.Btn}
		>
			<span className={styles.name} >{props.name}</span>
			<span className={styles.image} />
		</button>
	)
}
