import React, { useEffect, useState } from 'react';
import InputText, { InputVariants } from '../../components/inputs/Input/InputFieldText';
import styles from './TwoTextField.module.scss';

interface ITwoTextField {
	topInputType: string;
	bottomInputType: string;
	topInputPlaceholder: string;
	bottomInputPlaceholder: string;
	onChange: (userName: string, userSurName: string) => void;
}

export default function TwoTextField(props: ITwoTextField) {

	const [userName, setUserName] = useState('');
	const [userSurName, setUserSurName] = useState('');

	function getUserName(e: React.ChangeEvent<HTMLInputElement>) {
		setUserName(e.target.value);
	}

	function getUserSurname(e: React.ChangeEvent<HTMLInputElement>) {
		setUserSurName(e.target.value);
	}

	useEffect(() => {
		props.onChange(userName, userSurName);
	}, [userName, userSurName]);
	

	return (
		<div className={styles.inputs}>
			<InputText
				onChange={getUserName}
				type={props.topInputType}
				variant={InputVariants.InputText}
				placeholder={props.topInputPlaceholder}
			/>
			<InputText
				onChange={getUserSurname}
				type={props.bottomInputType}
				variant={InputVariants.InputText}
				placeholder={props.bottomInputPlaceholder}
			/>
		</div>
	)
}
