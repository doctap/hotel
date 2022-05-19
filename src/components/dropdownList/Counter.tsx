import React, { useState } from 'react';
import DropdownBtn from './DropdownBtn';
import styles from './Counter.module.scss';
import { IBtnDropdownCounter } from './DropDawnInterface';

export default function Counter(props: IBtnDropdownCounter) {


	const [addNum, setAddNum] = useState(0);


	const plusOne = (): void => {
		setAddNum(addNum + 1);
		console.log(addNum);
	}

	return (
		<div className={styles.AddOne}>
			<DropdownBtn
				name={'-'}
				onClick={plusOne}
			/>
			<span
				className={styles.count}
			>
				{addNum}
			</span>
			<DropdownBtn name={'+'} />
		</div>
	)
}

