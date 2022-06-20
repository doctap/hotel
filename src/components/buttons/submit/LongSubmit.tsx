import React from 'react';
import styles from './LongSubmit.module.scss';

interface ILongSubmit {
	name: string;
	type: string;
	submitForm: () => void;
}

export default function LongSubmit(props: ILongSubmit) {
	return (
		<button
			className={styles.Btn}
			onClick={props.submitForm}
		>
			<div className={styles.name} >{props.name}</div>
			<div className={styles.arrow}>arrow_forward</div>
		</button>
	)
}
