import React from 'react'
import styles from './CheckboxToggle.module.scss';

export default function Checkbox(props: IInputProps) {
	return (
		<label className={styles.wraper}>
			<div className={styles.checkbox}>
				<input type={props.type} />
				<span className={styles.slider}></span>
			</div>
			<span className={styles.name}>{props.name}</span>
		</label>
	)
}


//<label class="checkbox">
//	<input type="checkbox" checked="true">
//		<span class="slider"></span>
//</label>