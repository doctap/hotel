import React from 'react';
import DropdownBtn from '../btnCounter/BtnCounter';
import styles from './Counter.module.scss';
import { ICounter } from './CounterInterface';

export default function Counter(props: ICounter) {

	const plusOne = (): void => props.setValue(props.value + 1);

	const minusOne = (): void => {
		if (props.value > 0)
			props.setValue(props.value - 1);
	}

	return (
		<div className={styles.ItemDropDown}>
			<span className={styles.name}>
				{props.name}
			</span>
			<div className={styles.AddOne}>
				<DropdownBtn
					onClick={minusOne}
					name='-'
				/>
				<span
					className={styles.count}
				>
					{props.value}
				</span>
				<DropdownBtn
					onClick={plusOne}
					name='+'
				/>
			</div>
		</div>

	)
}

