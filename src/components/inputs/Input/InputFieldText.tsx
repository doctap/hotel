import React from 'react'
import styles from './Input.module.scss';
import { IInputProps } from './InterfaceInput';


export default function InputText(props: IInputProps) {
	return (
		<input
			type={props.type}
			className={styles.input}
			placeholder={props.placeholder}
		/>
	);
}
