import React from 'react';
import { BtnTickVariants, IBtnTick } from './BtnArrowTickInterface';
import styles from './BtnArrowTick.module.scss';

export default function BtnTick(props: IBtnTick) {

	const variantBtn = (v: BtnTickVariants) => {
		switch (v) {
			case BtnTickVariants.Arrow: return styles.BtnArrow;

			case BtnTickVariants.Tick: return styles.BtnTick;
			
			case BtnTickVariants.HorizontalTickLeft: return styles.BtnHorizontalTick;

			case BtnTickVariants.HorizontalTickRight: return `${styles.BtnHorizontalTick} ${styles.BtnHorizontalTick_Right}`;

			default:
				break;
		}
	}

	return (
		<button
			onClick={props.onClick}
			className={variantBtn(props.variant)}
			type={props.type}
		>
			<div
				className={styles.Arrow}
			>
				arrow_forward
			</div>
			<div
				className={styles.Tick}
			>
				expand_more
			</div>
			<div
				className={styles.HorizontalTick}
			>
				chevron_left
			</div>
		</button>
	)
}
