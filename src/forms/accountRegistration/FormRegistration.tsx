import React from 'react';
import Button from '../../components/buttons/btns/Button';
import { BtnVariants } from '../../components/buttons/btns/ButtonInterface';
import LongSubmit from '../../components/buttons/submit/LongSubmit';
import CheckboxRadio from '../../components/checkbox/checkboxRadio/CheckboxRadio';
import CheckboxToggle from '../../components/checkbox/checkboxToggle/CheckboxToggle';
import InputText, { InputVariants } from '../../components/inputs/Input/InputFieldText';
import SubTitle from '../../components/titles/subTitle/SubTitle';
import TitleH1 from '../../components/titles/titleH1/TitleH1';
import styles from './FormRegistration.module.scss';

export default function FormRegistration() {
	return (
		<form className={styles.form_registration}>

			<div className={styles.title}>
				<TitleH1>Регистрация аккаунта</TitleH1>
			</div>

			<div className={styles.fullName}>
				<InputText
					type='text'
					placeholder='Имя'
					variant={InputVariants.InputText}
				/>
				<InputText
					type='text'
					placeholder='Фамилия'
					variant={InputVariants.InputText}
				/>
				<div className={styles.radio_btn}>
					<CheckboxRadio
						type='radio'
						name='radioBox'
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
						<InputText
							type='email'
							placeholder='Email'
							variant={InputVariants.InputText}
						/>
					</div>
					<InputText
						type='text'
						placeholder='Пороль'
						variant={InputVariants.InputText}
					/>
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
		</form>
	)
}
