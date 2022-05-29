import React from 'react';
import styles from './BtnArrowTick.module.scss';
import { BtnTickVariants, IBtnTick } from './BtnArrowTickInterface';

export default function BtnTick(props: IBtnTick) {

	const variantBtn = (v: BtnTickVariants) => {
		switch (v) {
			case BtnTickVariants.Arrow: return styles.BtnArrow;

			case BtnTickVariants.Tick: return styles.BtnTick;

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
		</button>
	)
}
