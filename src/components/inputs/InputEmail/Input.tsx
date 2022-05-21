import React from 'react'
import Title from '../../titles/title/SubTitle';
import styles from './Input.module.scss';
import { IInputProps } from './InterfaceInput';


export default function Input(props: IInputProps) {
	return (
		<label className={styles.labelInp}>
			<Title name={'TEXT FIELD'} />
			<input
				className={styles.input}
				placeholder={props.placeholder}
			/>
		</label>
	);
}
