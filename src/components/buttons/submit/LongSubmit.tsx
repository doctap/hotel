import React from 'react';
import styles from './LongSubmit.module.scss';

interface ILongSubmit {
	name: string;
	type: 'button' | 'submit';
	submitForm?: (e: React.FormEvent<HTMLButtonElement>) => void;
}

export default function LongSubmit(props: ILongSubmit) {
	return (
		<button
			type={props.type}
			className={styles.Btn}
			onClick={props.submitForm}
		>
			<div className={styles.name} >{props.name}</div>
			<div className={styles.arrow}>arrow_forward</div>
		</button>
	)
}
