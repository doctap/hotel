import React from 'react';
import BtnTick from '../../buttons/arrowTickBtns/BtnArrowTick';
import { BtnTickVariants } from '../../buttons/arrowTickBtns/BtnArrowTickInterface';
import InputText from '../InputEmail/InputText';
import styles from './SubscriptionEmail.module.scss';


export default function SubscriptionEmail() {
	return (
		<form className={styles.formEmail}>
			<InputText type='email' placeholder='Email' />
			<div className={styles.btnSubmit}>
				<BtnTick type='submit' variant={BtnTickVariants.Arrow} />
			</div>
		</form>

	)
}
