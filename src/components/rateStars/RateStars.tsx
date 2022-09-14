import React from 'react';
import uniqId from 'uniqid';
import styles from './RateStars.module.scss'

interface IRateStars {
	fullStars: number;
	maxStars: number;
}

export default function RateStars(props: IRateStars) {

	function renderStars(fullStarsCount: number, maxStarsCount: number): React.ReactNode[] {
		const maxStarsCountNormalize = normalizeNumber(maxStarsCount, Number.POSITIVE_INFINITY);
		const fullStarsCountNormalize = normalizeNumber(fullStarsCount, maxStarsCountNormalize);
		const fullStars = getStars(fullStarsCountNormalize, true);
	
		return fullStars.concat(getStars(maxStarsCountNormalize - fullStarsCountNormalize, false));
	}

	/**
	 * Норрмализует число в диапозоне от 0 до topLimit
	 * @param num число которое необходимо нормализовать 
	 * @param topLimit верхний предел нормализации
	 * @returns нормализованное число
	 */
	function normalizeNumber(num: number, topLimit: number): number {
		let fullStarsCountNormalize = num < 0 ? 0 : num;

		return fullStarsCountNormalize > topLimit ? topLimit : fullStarsCountNormalize;
	}
	
	function getStars(num: number, isFullsStars: boolean): React.ReactNode[] {
		const stars: React.ReactNode[] = [];
	
		for (let index = 0; index < num; index++) {
			stars.push(<div key={uniqId()} className={styles.Star}>{isFullsStars ? 'star' : 'star_border'}</div>)
		}
		 
		return stars;
	}

	return (
		<div className={styles.stars}>
			{renderStars(props.fullStars, props.maxStars)}
		</div>
	)
}

