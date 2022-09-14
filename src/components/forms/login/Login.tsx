import React from 'react';
import TwoTextField from '../twoTextField/TwoTextField';
import FormContainer from '../containers/formContainer/FormContainer';
import ItemContainer from '../containers/itemContainer/ItemContainer';
import styles from './Login.module.scss';
import TitleH2 from '../../titles/titleH2/TitleH2';
import Button from '../../buttons/btns/Button';
import { BtnVariants } from '../../buttons/btns/ButtonInterface';
import LongSubmit from '../../buttons/submit/LongSubmit';

export default function Login() {

	function getEmailPassword(email: string, password: string) {
		console.log(email, password);
	}


	return (
		<FormContainer>

			<ItemContainer margin='0 0 0.8rem 0'>
				<TitleH2 value='Войти' />
			</ItemContainer>

			<ItemContainer margin='0 0 0.7rem 0'>
				<TwoTextField
					onChange={getEmailPassword}
					topInputType='email'
					topInputPlaceholder='Email'
					bottomInputType='password'
					bottomInputPlaceholder='Пароль'
				/>
			</ItemContainer>

			<ItemContainer margin='0 0 1.4rem 0'>
				<LongSubmit name='войти' type='submit' submitForm={() => 0} />
			</ItemContainer>

			<div className={styles.createAccount}>
				<div>Нет аккаунта на Toxin?</div>
				<div className={styles.btnCreateAccount}>
					<Button name='создать' type='button' variant={BtnVariants.Border} />
				</div>
			</div>

		</FormContainer>
	)
}
