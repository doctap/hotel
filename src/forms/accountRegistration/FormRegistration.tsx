import React from 'react';
import Button from '../../components/buttons/btns/Button';
import { BtnVariants } from '../../components/buttons/btns/ButtonInterface';
import LongSubmit from '../../components/buttons/submit/LongSubmit';
import CheckboxRadio from '../../components/checkbox/checkboxRadio/CheckboxRadio';
import CheckboxToggle from '../../components/checkbox/checkboxToggle/CheckboxToggle';
import InputText, { InputVariants } from '../../components/inputs/Input/InputFieldText';
import TwoTextField from '../twoTextField/TwoTextField';
import SubTitle from '../../components/titles/subTitle/SubTitle';
import TitleH2 from '../../components/titles/titleH1/TitleH1';
import FormContainer from '../containers/formContainer/FormContainer';
import ItemContainer from '../containers/itemContainer/ItemContainer';
import styles from './FormRegistration.module.scss';
import InputDate from '../../components/inputs/InputDate/InputDate';

interface IFormRegistration {
	userName: string;
	userSurName: string;

}

export default function FormRegistration() {

	function getFullName(userName: string, userSurName: string) {
		console.log(userName, userSurName);
	}

	function getGender(male: boolean, female: boolean) {
		console.log(male, female);
	}

	function getDateBirthday(e: React.ChangeEvent<HTMLInputElement>) {
		console.log(e)
	}

	function getEmailPassword(email: string, password: string) {
		console.log(email, password);
	}

	function getAnswerAboutSpecialOffers(isChecked: boolean) {
		console.log(isChecked);
	}

	return (
		<FormContainer>

			<ItemContainer margin='0 0 .8rem 0'>
				<TitleH2 value='Регистрация аккаунта' />
			</ItemContainer>

			<ItemContainer margin='0 0 0 0'>
				<TwoTextField
					onChange={getFullName}
					topInputType='text'
					topInputPlaceholder='Имя'
					bottomInputType='text'
					bottomInputPlaceholder='Фамилия'
				/>
			</ItemContainer>

			<ItemContainer margin='0 0 1.2rem 0'>
				<div className={styles.radio_btn}>
					<CheckboxRadio
						onClick={getGender}
						type='radio'
						male='Мужчина'
						female='Женщина'
					/>
				</div>
			</ItemContainer>

			<ItemContainer>
				<ItemContainer margin='0 0 .3rem 0'>
					<SubTitle name='дата рождения' />
				</ItemContainer>
				<InputDate onInput={getDateBirthday} />
			</ItemContainer>

			<ItemContainer margin='0 0 0 0'>
				<ItemContainer margin='0 0 .3rem 0'>
					<SubTitle name='данные для входа в сервис' />
				</ItemContainer>
				<TwoTextField
					onChange={getEmailPassword}
					topInputType='email'
					topInputPlaceholder='Email'
					bottomInputType='password'
					bottomInputPlaceholder='Пароль'
				/>
			</ItemContainer>

			<ItemContainer margin='0 0 1.2rem 0'>
				<CheckboxToggle
					onChange={getAnswerAboutSpecialOffers}
					type='checkbox'
					name='Получать спецпредложения'
				/>
			</ItemContainer>

			<ItemContainer margin='0 0 1.2rem 0'>
				<LongSubmit name='перейти к оплате' type='submit' submitForm={() => 0} />
			</ItemContainer>

			<div className={styles.log_in}>

				<div className={styles.text}>
					Уже есть аккаунт на Toxin
				</div>

				<div className={styles.btnLog_in}>
					<Button name='войти' type='button' variant={BtnVariants.Border} />
				</div>

			</div>

		</FormContainer>
	)
}
