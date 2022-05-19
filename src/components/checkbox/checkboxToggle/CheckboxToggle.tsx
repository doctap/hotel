import React from 'react'
import { ChangeEvent } from 'react';
import { IInputProps } from '../../Interfaces/InputInterfaces';
import styles from './CheckboxToggle.module.scss';

export default function CheckboxToggle(props: IInputProps) {

	const toggleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
		const elem = e.currentTarget;
		props.onChange?.(elem.checked);
	}

	return (
		<label className={styles.wrapper}>
			<div className={styles.checkbox}>
				<input
					onChange={toggleCheckbox}
					type={props.type}
				/>
				<span className={styles.slider}></span>
			</div>
			<span className={styles.name}>{props.name}</span>
		</label>
	)
}
