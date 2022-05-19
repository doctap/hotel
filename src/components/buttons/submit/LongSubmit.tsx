import React from 'react';
import styles from './LongSubmit.module.scss';
// import { IButtonProps } from '../../Interfaces/ButtonInterfaces';

export default function LongSubmit(props: any) {
	return (
		<button
			className={styles.Btn}
		>
			<span>{props.name}</span>
			<span className={styles.image} />
		</button>
	)
}
