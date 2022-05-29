import React from 'react';
import CheckboxTick from '../checkbox/CheckboxTick';
import styles from './CheckBoxItem.module.scss';

interface ICheckBoxTick {
	name: string;
}

export default function CheckBoxItem(props: ICheckBoxTick) {



	return (
		<label className={styles.container}>
			<CheckboxTick type='checkbox' />
			{props.name}
		</label>
	)
}
