import React from 'react';
import Button from '../../components/buttons/btns/Button';
import { BtnVariants } from '../../components/buttons/btns/ButtonInterface';
import Logo from '../logo/Logo';
import Nav, { IPage } from './nav/Nav';
import styles from './Header.module.scss';

interface IHeader {
	pages: IPage[];
	login: boolean;
	userName?: string;
}

export default function Header(props: IHeader) {
	return (
		<div className={styles.header}>

			<div className={styles.logo}>
				<Logo />
			</div>

			<div className={styles.navBar}>
				<div className={styles.navigation}>
					<Nav pages={props.pages} />
				</div>
				{
					props.login ?
						<div className={styles.userName}>{props.userName}</div>
						:
						<div className={styles.buttonsLogin}>
							<div className={styles.btnLog}>
								<Button name='войти' type='button' variant={BtnVariants.Border} />
							</div>
							<div className={styles.btnRegistration}>
								<Button name='зарегистрироваться' type='button' variant={BtnVariants.Primary} />
							</div>
						</div>
				}
			</div>
		</div>
	)
}
