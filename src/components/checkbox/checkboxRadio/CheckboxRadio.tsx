import React, { useState } from 'react';
import styles from './CheckboxRadio.module.scss';

interface ICheckboxRadio {
	male: string;
	female: string;
	onClick: (male: boolean, female: boolean) => void;
}

export default function CheckboxRadio(props: ICheckboxRadio) {

	const [male, setMale] = useState(true);
	const [female, setFemale] = useState(false);

	function getMale() {
		setMale(!male);
		setFemale(!female);
		props.onClick(male, female);
	}

	function getFemale() {
		setFemale(!female);
		setMale(!male);
		props.onClick(male, female);
	}

	return (
		<div className={styles.divRow}>
			<label className={styles.label}>

				<label
					htmlFor='male'
					className={male ? styles.item_color_DarkShade75 : styles.item}
				>
					{props.male}
				</label>

				<input
					onClick={getMale}
					checked={male}
					type='radio'
					name='gender'
					id='male'
				/>
				<span></span>
			</label>

			<label className={styles.label}>

				<label
					htmlFor='female'
					className={female ? styles.item_color_DarkShade75 : styles.item}
				>
					{props.female}
				</label>

				<input
					onClick={getFemale}
					checked={female}
					type='radio'
					name='gender'
					id='female'
				/>
				<span></span>
			</label>
		</div>
	)
}