import React from 'react'
import styles from './Input.module.scss';

export enum InputVariants {
	InputText,
	InputBtn
}

export interface IInputProps {
	value?: string;
	type: string;
	placeholder: string;
	variant: InputVariants;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputText(props: IInputProps) {

	const inputStyle = (v: InputVariants) => {
		switch (v) {
			case InputVariants.InputText: return styles.inputText;
			
			case InputVariants.InputBtn: return `${styles.inputText_paddingRight} ${styles.inputText}`;
				
			default:
				break;
		}
	}

	return (
		<input
			type={props.type}
			className={inputStyle(props.variant)}
			placeholder={props.placeholder}
			onChange={props.onChange}
		/>
	);
}
