import React from 'react';
import CheckboxTick from '../checkbox/CheckboxTick';
import styles from './RichCheckbox.module.scss';

interface IRichCheckbox {
	name: string;
	children: React.ReactNode;
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
					{props.name}
				</div>
			</div>
			<div className={styles.description}>
				{props.children}
			</div>
		</label>
	)
}
