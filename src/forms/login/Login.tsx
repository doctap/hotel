import React from 'react';
import Button from '../../components/buttons/btns/Button';
import { BtnVariants } from '../../components/buttons/btns/ButtonInterface';
import LongSubmit from '../../components/buttons/submit/LongSubmit';
import InputText, { InputVariants } from '../../components/inputs/Input/InputFieldText';
import TwoTextField from '../../components/inputs/twoTextField/TwoTextField';
import TitleH2 from '../../components/titles/titleH2/TitleH2';
import FormContainer from '../containers/formContainer/FormContainer';
import ItemContainer from '../containers/itemContainer/ItemContainer';
import styles from './Login.module.scss';

export default function Login() {
	return (
		<FormContainer>

			<ItemContainer margin='0 0 0.8rem 0'>
				<TitleH2 value='Войти' />
			</ItemContainer>

			<ItemContainer margin='0 0 0.7rem 0'>
				<TwoTextField
					topInputType='email'
					topInputPlaceholder='Email'
					bottomInputType='password'
					bottomInputPlaceholder='Пароль'
				/>
			</ItemContainer>

			<ItemContainer margin='0 0 1.4rem 0'>
				<LongSubmit name='войти' type='submit' />
			</ItemContainer>

			<div className={styles.createAccount}>
				<div>Нет аккаунта на Toxin?</div>
				<div>
					<Button name='создать' type='button' variant={BtnVariants.Border} />
				</div>
			</div>

		</FormContainer>
	)
}
