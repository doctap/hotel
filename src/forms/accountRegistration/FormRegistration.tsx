import React from 'react';
import Button from '../../components/buttons/btns/Button';
import { BtnVariants } from '../../components/buttons/btns/ButtonInterface';
import LongSubmit from '../../components/buttons/submit/LongSubmit';
import CheckboxRadio from '../../components/checkbox/checkboxRadio/CheckboxRadio';
import CheckboxToggle from '../../components/checkbox/checkboxToggle/CheckboxToggle';
import InputText, { InputVariants } from '../../components/inputs/Input/InputFieldText';
import TwoTextField from '../twoTextField/TwoTextField';
import SubTitle from '../../components/titles/subTitle/SubTitle';
import TitleH2 from '../../components/titles/titleH2/TitleH2';
import FormContainer from '../containers/formContainer/FormContainer';
import ItemContainer from '../containers/itemContainer/ItemContainer';
import styles from './FormRegistration.module.scss';

export default function FormRegistration() {
	return (
		<FormContainer>

			<ItemContainer margin='0 0 .8rem 0'>
				<TitleH2 value='Регистрация аккаунта' />
			</ItemContainer>

			<ItemContainer margin='0 0 0 0'>
				<TwoTextField
					topInputType='text'
					topInputPlaceholder='Имя'
					bottomInputType='text'
					bottomInputPlaceholder='Фамилия'
				/>
			</ItemContainer>

			<ItemContainer margin='0 0 1.2rem 0'>
				<div className={styles.radio_btn}>
					<CheckboxRadio
						type='radio'
						male='Мужчина'
						female='Женщина'
					/>
				</div>
			</ItemContainer>

			<ItemContainer>
			<SubTitle name='дата рождения' />
				<InputText
					type='text'
					placeholder='ДД.ММ.ГГ'
					variant={InputVariants.InputText}
				/>
			</ItemContainer>

			<ItemContainer margin='0 0 0 0'>
				<SubTitle name='данные для входа в сервис' />
				<TwoTextField
					topInputType='email'
					topInputPlaceholder='Email'
					bottomInputType='password'
					bottomInputPlaceholder='Пароль'
				/>
			</ItemContainer>

			<ItemContainer margin='0 0 1.2rem 0'>
				<CheckboxToggle type='checkbox' name='Получать спецпредложения' />
			</ItemContainer>

			<ItemContainer margin='0 0 1.2rem 0'>
				<LongSubmit name='перейти к оплате' type='submit' />
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
