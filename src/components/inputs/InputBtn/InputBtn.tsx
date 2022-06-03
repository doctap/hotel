import React from 'react';
import BtnTick from '../../buttons/arrowTickBtns/BtnArrowTick';
import { BtnTickVariants } from '../../buttons/arrowTickBtns/BtnArrowTickInterface';
import InputText, { InputVariants } from '../Input/InputFieldText';
import styles from './InputBtn.module.scss';

interface IInputBtn {
	typeInput: string;
	placeholderInput: string;
	typeButton: 'submit' | 'button';
	variantBtn: BtnTickVariants;
}

export default function InputBtn(props: IInputBtn) {
	return (
		<form className={styles.inputBtn}>
			<InputText type={props.typeInput} placeholder={props.placeholderInput} variant={InputVariants.InputBtn}/>
			<div className={styles.btnSubmit}>
				<BtnTick type={props.typeButton} variant={props.variantBtn} />
			</div>
		</form>

	)
}
