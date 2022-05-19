import React from 'react'
import styles from './CheckboxRadio.module.scss'

export default function CheckboxRadio(props: IInputProps) {
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


			// <label className={styles.label}>
			// 	<span className={styles.spanInp}>
			// 		<input
			// 			type={props.type}
			// 			name={props.name}
			// 			id='radio_1'
			// 		/>
			// 		<label htmlFor='radio_1'></label>
			// 	</span>
			// 	<span>Мужчина</span>
			// </label>
			// <label className={styles.label}>
			// 	<span className={styles.spanInp}>
			// 		<input
			// 			type={props.type}
			// 			name={props.name}
			// 			id='radio_2'
			// 		/>
			// 		<label htmlFor='radio_2'></label>
			// 	</span>
			// 	<span>Женщина</span>
			// </label>