import React from 'react';
import Logo from '../logo/Logo';
import Nav from './nav/Nav';
import styles from './Header.module.scss';
import { IPage } from '../../../commonInterfaces/RFCinterfaces';
import Button from '../../buttons/btns/Button';
import { BtnVariants } from '../../buttons/btns/ButtonInterface';
import BurgerMenu from '../../burgerMenu/BurgerMenu';

interface IHeader {
	pages: IPage[];
	login: boolean;
	userName?: string;
	getNextPage: (id: string) => void;
}

export default function Header(props: IHeader) {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<Logo />
			</div>
			<div className={styles.navBar}>
				<div className={styles.navigation}>
					<Nav navBurger={false} pages={props.pages} getNextPage={props.getNextPage} />
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
				<div className={styles.BurgerMenu}>
					{/* display BurgerMenu depend on the width screen! Checked Css */}
					<BurgerMenu getNextPage={props.getNextPage} pages={props.pages} />
				</div>
			</div>
		</header>
	)
}
