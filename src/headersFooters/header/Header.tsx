import React from 'react';
import Button from '../../components/buttons/btns/Button';
import { BtnVariants } from '../../components/buttons/btns/ButtonInterface';
import Logo from '../logo/Logo';
import Select from '../select/Select';
import styles from './Header.module.scss';
import Nav from './navigation/nav/routes/Routes';

export default function Header() {

	const itemsArr: string[] = ['service1', 'service2', 'service3'];

	return (
		<div className={styles.header}>

			<Logo />

			<div className={styles.navBar}>
				{/* <Nav /> */}
				<div className={styles.routes}>
					<Select items={itemsArr} name='Услуги' />
				</div>
				<div className={styles.buttonsLogin}>
					<div className={styles.btnLog}>
						<Button name='войти' type='button' variant={BtnVariants.Border} />
					</div>
					<div className={styles.btnRegistration}>
						<Button name='зарегистрироваться' type='button' variant={BtnVariants.Primary} />
					</div>
				</div>
			</div>

		</div>
	)
}
