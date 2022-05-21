import React from 'react'
import styles from './CheckboxRadio.module.scss'
import { ICheckboxRadio } from './CheckboxRadioInterface'

export default function CheckboxRadio(props: ICheckboxRadio) {
	return (
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
		</div>
	)
}
