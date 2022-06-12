import React from 'react';
import Button from '../../components/buttons/btns/Button';
import { BtnVariants } from '../../components/buttons/btns/ButtonInterface';
import LongSubmit from '../../components/buttons/submit/LongSubmit';
import CheckboxRadio from '../../components/checkbox/checkboxRadio/CheckboxRadio';
import CheckboxToggle from '../../components/checkbox/checkboxToggle/CheckboxToggle';
import InputText, { InputVariants } from '../../components/inputs/Input/InputFieldText';
import TwoTextField from '../../components/inputs/twoTextField/TwoTextField';
import SubTitle from '../../components/titles/subTitle/SubTitle';
import TitleH2 from '../../components/titles/titleH2/TitleH2';
import FormContainer from '../containers/formContainer/FormContainer';
import styles from './FormRegistration.module.scss';

export default function FormRegistration() {
	return (
		<FormContainer>
			<div className={styles.title}>
				<TitleH2 value='Регистрация аккаунта' />
			</div>

			<div className={styles.fullName}>
				<TwoTextField
					topInputType='text'
					topInputPlaceholder='Имя'
					bottomInputType='text'
					bottomInputPlaceholder='Фамилия'
				/>
				<div className={styles.radio_btn}>
					<CheckboxRadio
						type='radio'
						male='Мужчина'
						female='Женщина'
					/>
				</div>
			</div>

			<div className={styles.Data}>
				<div className={styles.birthDate}>
					<SubTitle name='дата рождения' />
					<InputText
						type='text'
						placeholder='ДД.ММ.ГГ'
						variant={InputVariants.InputText}
					/>
				</div>
				<div className={styles.loginData}>
					<div>
						<SubTitle name='данные для входа в сервис' />
						<TwoTextField
							topInputType='email'
							topInputPlaceholder='Email'
							bottomInputType='password'
							bottomInputPlaceholder='Пароль'
						/>
					</div>

					<CheckboxToggle type='checkbox' name='Получать спецпредложения' />
				</div>
			</div>

			<div className={styles.footer_registration}>
				<div className={styles.submit}>
					<LongSubmit name='перейти к оплате' type='submit' />
				</div>

				<div className={styles.log_in}>

					<div className={styles.text}>
						Уже есть аккаунт на Toxin
					</div>

					<div className={styles.btnLog_in}>
						<Button name='войти' type='button' variant={BtnVariants.Border} />
					</div>

				</div>
			</div>
		</FormContainer>
	)
}
