import React from 'react';
import { ChangeEvent } from 'react';
import styles from './CheckboxToggle.module.scss';

interface ICheckToggle {
	name: string;
	defaultChecked?: boolean;
	onChange?: (isChecked: boolean) => void;
	disabled?: boolean;
}

export default function CheckboxToggle(props: ICheckToggle) {

	const toggleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
		const elem = e.currentTarget;
		props.onChange?.(elem.checked);
	}

	return (
		<label className={styles.wrapper}>
			<div className={styles.checkbox}>
				<input
					defaultChecked={props.defaultChecked}
					disabled={props.disabled}
					onChange={toggleCheckbox}
					type='checkbox'
				/>
				<span className={styles.slider}></span>
			</div>
			<span className={styles.name}>{props.name}</span>
		</label>
	)
}
