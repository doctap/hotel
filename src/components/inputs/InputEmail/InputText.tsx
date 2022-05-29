import React from 'react'
import styles from './Input.module.scss';
import { IInputProps } from './InterfaceInput';


export default function InputText(props: IInputProps) {
	return (
		<label className={styles.labelInp}>
			<input
				type={props.type}
				className={styles.input}
				placeholder={props.placeholder}
			/>
		</label>
	);
}
