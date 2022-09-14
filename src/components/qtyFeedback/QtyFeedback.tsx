import React from 'react';
import { splitNumber } from '../../commonFunc/Utilities'
import styles from './QtyFeedback.module.scss';

interface IQtyFeedback {
	qty: number;
}

export default function QtyFeedback(props: IQtyFeedback) {

	const wordEndings = [' Отзывов', ' Отзыв', ' Отзыва', ' Отзыва', ' Отзыва', ' Отзывов', ' Отзывов', ' Отзывов', ' Отзывов', ' Отзывов']

	const getWord = (qty: number): string => {
		let word = wordEndings[qty % 10];
		return word = qty > 10 && qty < 20 ? ' Отзывов' : word;
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.num}>
				{splitNumber(props.qty)}
			</div>
			<div>
				{getWord(props.qty)}
			</div>
		</div>
	)
}
