import React from 'react';
import { IBtnSubmit } from './BtnSubmitInterface';
import styles from './LongSubmit.module.scss';

export default function LongSubmit(props: IBtnSubmit) {
	return (
		<button
			className={styles.Btn}
		>
			<div className={styles.name} >{props.name}</div>
			<div className={styles.arrow}>arrow_forward</div>
		</button>
	)
}
