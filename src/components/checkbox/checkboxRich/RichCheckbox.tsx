import React from 'react';
import CheckboxTick from '../checkbox/CheckboxTick';
import styles from './RichCheckbox.module.scss';

interface IRichCheckbox {
	title: string;
	text: string;
}

export default function RichCheckbox(props: IRichCheckbox) {
	return (
		<label className={styles.container}>
			<div
				className={styles.header}
			>
				<CheckboxTick type='checkbox' />
				<div
					className={styles.title}
				>
					{props.title}
				</div>
			</div>
			<div className={styles.description}>
				{props.text}
			</div>
		</label>
	)
}
