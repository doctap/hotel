import React from 'react';
import Price from '../price/Price';
import styles from './TitlePricePerDay.module.scss';

interface ITitlePricePerDay {
	price: number;
	text: string;
}

export default function TittlePricePerDay(props: ITitlePricePerDay) {

	return (
		<div className={styles.wrapper}>
			<div className={styles.price}>
				<Price sum={props.price} variant='medium' />
			</div>
			<div className={styles.text}>
				{props.text}
			</div>
		</div>
	)
}
