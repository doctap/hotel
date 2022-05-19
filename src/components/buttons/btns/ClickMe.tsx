import React from 'react';
import styles from './ClickMe.module.scss';
import { BtnVariants, IButtonProps } from '../../Interfaces/ButtonInterfaces';

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
			type={props.type}
			className={variantBtn(props.variant)}
			disabled={props.disabled}
		>
			{props.name}
		</button>
	)
}
