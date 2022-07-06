import React, { ChangeEvent } from 'react'
import styles from './CheckboxTick.module.scss';

interface ICheckbox {
	type: string;
	onChange?: (isChecked: boolean) => void;
}

export default function CheckboxTick(props: ICheckbox) {

	const toggleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
		const elem = e.currentTarget;
		props.onChange?.(elem.checked);
	}

	return (
		<label className={styles.container}>
			<input
				type={props.type}
				onChange={toggleCheckbox}
			/>
			<div className={styles.Tick}>check</div>
			<span className={styles.checkmark}></span>
		</label>
	)
}
