import React, { useState } from 'react';
import styles from './InputDate.module.scss';

interface IInputDate {
	onInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputDate(props: IInputDate) {

	// const [value, setValue] = useState('');

	function transferDate(e: React.ChangeEvent<HTMLInputElement>) {
		props.onInput(e);
	}

	return (
		<input
			onInput={transferDate}
			type='date'
			className={styles.InputDate}
		/>
	)
}
