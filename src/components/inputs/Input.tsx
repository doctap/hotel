import React from 'react'
import styles from './Input.module.scss';

export default function Input(props: IInputProps) {
	return (
		<label>
			<span className={styles.span}>
				{props.name}
			</span>
			<input
				className={styles.input}
				placeholder={props.placeholder}
			/>
		</label>
	);
}
