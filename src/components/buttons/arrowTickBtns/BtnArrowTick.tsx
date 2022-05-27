import React from 'react';
import styles from './BtnArrowTick.module.scss';
import { BtnTickVariants, IBtnTick } from './BtnArrowTickInterface';

export default function BtnTick(props: IBtnTick) {

	const variantBtn = (v: BtnTickVariants) => {
		switch (v) {
			case BtnTickVariants.Arrow: return styles.Arrow;

			case BtnTickVariants.Tick: return styles.Tick;

			default:
				break;
		}
	}

	return (
		<button
			onClick={props.onClick}
			className={styles.Btn}
			type={props.type}
		>
			<div
				className={variantBtn(props.variant)}
			></div>
		</button>
	)
}
