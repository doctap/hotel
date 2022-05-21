import React from 'react';
import styles from './Button.module.scss';
import { BtnVariants, IButtonProps } from './ButtonInterface';

export default function ClickMe(props: IButtonProps) {

	const variantBtn = (v: BtnVariants) => {
		switch (v) {
			case BtnVariants.Border: return styles.btnBorder;

			case BtnVariants.Primary: return styles.btnPrimary;

			case BtnVariants.BtnText: return styles.btnText;

			default:
				break;
		}
	}

	return (
		<button
			onClick={props.onClick}
			type={props.type}
			className={variantBtn(props.variant)}
			disabled={props.disabled}
		>
			{props.name}
		</button>
	)
}
