import React from 'react';
import styles from './CheckboxRadio.module.scss';

interface ICheckboxRadio {
	type: string;
	male: string;
	female: string;
}

export default function CheckboxRadio(props: ICheckboxRadio) {
	return (
		<div className={styles.divRow}>
			<label className={styles.label}>

				{props.male}
				<input
					type={props.type}
					name='radio'
					value={1}
				/>
				<span></span>
			</label>

			<label className={styles.label}>

				{props.female}
				<input
					type={props.type}
					name='radio'
					value={2}
				/>
				<span></span>
			</label>
		</div>
	)
}


{/* <div className={styles.radio}>
	<input name="first" type="radio" id="test-1" value="first" checked />
	<label htmlFor="test-1">Test-1</label>
	<input name="first" type="radio" id="test-2" value="second" />
	<label htmlFor="test-2">Test-2</label>
</div>

<div className={styles.divRow}>

<label className={styles.label}>
	<input
		type={props.type}
		name={props.name}
	/>
	<span>Мужчина</span>
</label>
<label className={styles.label}>
	<input
		type={props.type}
		name={props.name}
	/>
	<span>Женщина</span>
</label>
</div> */}