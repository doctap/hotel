import React from 'react';
import styles from './Price.module.scss';

interface IPrice {
	sum: number;
}

export default function Price(props: IPrice) {
	/**
	 * нормализует число в строку которая содержит пробелы после каждого 
	 * третьего знака с конца 
	 * @param num число нормализации
	 * @returns нормализованная строка
	 */
	function getPrice(num: number): string {
		let arrNum = Math.trunc(num).toString().split('');

		return arrNum.reduce((previousValue, currentValue, i) => {
			let sumStr = previousValue + currentValue;

			if ((arrNum.length - 1 - i) % 3 === 0)
				sumStr += ' ';

			return sumStr;
		}, '')
		.trim();
	}

	return (
		<div className={styles.price}>
			{getPrice(props.sum)}&#8381;
		</div>
	)
}
