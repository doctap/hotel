import React, { useState } from 'react';
import styles from './CheckboxRadio.module.scss';

interface ICheckboxRadio {
	type: string;
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

				{props.male}
				<input
					onClick={getMale}
					checked={male}
					type={props.type}
				/>
				<span></span>
			</label>

			<label className={styles.label}>

				{props.female}
				<input
					onClick={getFemale}
					checked={female}
					type={props.type}
				/>
				<span></span>
			</label>
		</div>
	)
}