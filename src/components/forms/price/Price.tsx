import React from 'react';
import { splitNumber } from '../../../commonFunc/Utilities';
import styles from './Price.module.scss';

interface IPrice {
	sum: number;
	variant: PriceVariants;
}

type PriceVariants = 'easy' | 'light' | 'medium' | 'bold';

export default function Price(props: IPrice) {

	function getStyles(variant: string): string {
		if (variant === 'easy') return styles.easy;
		if (variant === 'light') return styles.light;
		if (variant === 'medium') return styles.medium;
		
		return styles.bold;
	}

	return (
		<div className={getStyles(props.variant)}>
			{splitNumber(props.sum)}&#8381;
		</div>
	)
}
