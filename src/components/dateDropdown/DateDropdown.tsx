import React from 'react';
import BtnTick from '../buttons/arrowTickBtns/BtnArrowTick';
import { BtnTickVariants } from '../buttons/arrowTickBtns/BtnArrowTickInterface';
import InputText, { InputVariants } from '../inputs/Input/InputFieldText';
import styles from './DateDropdown.module.scss';

export default function DateDropdown() {
	return (
		<div className={styles.container}>
			<InputText type='text' placeholder='ДД.ММ.ГГГГ' variant={InputVariants.InputBtn} />
			<div className={styles.btn}>
				<BtnTick type='button' variant={BtnTickVariants.Tick} />
			</div>
		</div>
	)
}
