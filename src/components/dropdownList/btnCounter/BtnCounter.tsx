import React from 'react';
import styles from './BtnCounter.module.scss';
import { IDropdownBtn } from './BtnCounterInterface';

export default function DropdownBtn(props: IDropdownBtn) {
	return (
		<button
			type='button'
			onClick={props.onClick}
			className={styles.DropBtn}
			disabled={props.disabled}
		>
			{props.name}
		</button>
	)
}
