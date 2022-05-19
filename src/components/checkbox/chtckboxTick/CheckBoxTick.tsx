import React from 'react';
import { ChangeEvent } from 'react';
import styles from './CheckBox.module.scss'

export default function CheckBoxTick(props: IInputProps) {

	const toggleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
		const elem = e.currentTarget;
		props.onChange?.(elem.checked);
	}

	return (
		<label className={styles.container}>
			{props.name}
			<input 
			type={props.type} 
			onChange={toggleCheckbox}
			/>
			<span className={styles.Tick}></span>
			<span className={styles.checkmark}></span>
		</label>
	)
}
