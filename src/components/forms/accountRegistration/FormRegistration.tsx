import React from 'react';
import Button from '../../buttons/btns/Button';
import { BtnVariants } from '../../buttons/btns/ButtonInterface';
import LongSubmit from '../../buttons/submit/LongSubmit';
import CheckboxRadio from '../../checkbox/checkboxRadio/CheckboxRadio';
import CheckboxToggle from '../../checkbox/checkboxToggle/CheckboxToggle';
import InputDate from '../../inputs/InputDate/InputDate';
import SubTitle from '../../titles/subTitle/SubTitle';
import TitleH2 from '../../titles/titleH2/TitleH2';
import FormContainer from '../containers/formContainer/FormContainer';
import ItemContainer from '../containers/itemContainer/ItemContainer';
import TwoTextField from '../twoTextField/TwoTextField';
import styles from './FormRegistration.module.scss';

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
				<TitleH2 children='Регистрация аккаунта' />
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
