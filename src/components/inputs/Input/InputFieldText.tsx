import React from 'react'
import styles from './Input.module.scss';

export enum InputVariants {
	InputText,
	InputBtn
}

export interface IInputProps {
	type: string;
	placeholder: string;
	variant: InputVariants;
}

export default function InputText(props: IInputProps) {

	const inputStyle = (v: InputVariants) => {
		switch (v) {
			case InputVariants.InputText: return styles.inputText;
			
			case InputVariants.InputBtn: return styles.inputBtn;
				
			default:
				break;
		}
	}

	return (
		<input
			type={props.type}
			className={inputStyle(props.variant)}
			placeholder={props.placeholder}
		/>
	);
}
