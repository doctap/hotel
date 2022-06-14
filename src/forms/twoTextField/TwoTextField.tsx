import React from 'react';
import InputText, { InputVariants } from '../../components/inputs/Input/InputFieldText';
import styles from './TwoTextField.module.scss';

interface ITwoTextField {
	topInputType: string;
	bottomInputType: string;
	topInputPlaceholder: string;
	bottomInputPlaceholder: string;
}

export default function TwoTextField(props: ITwoTextField) {
	return (
		<div className={styles.inputs}>
			<InputText
				type={props.topInputType}
				variant={InputVariants.InputText}
				placeholder={props.topInputPlaceholder}
			/>
			<InputText
				type={props.bottomInputType}
				variant={InputVariants.InputText}
				placeholder={props.bottomInputPlaceholder}
			/>
		</div>
	)
}
