import React from 'react';
import Logo from '../logo/Logo';
import Nav from './nav/Nav';
import styles from './Header.module.scss';
import { IPage } from '../../../types';
import { BurgerMenu } from '../../burgerMenu/BurgerMenu';
import { BtnVariants, Button } from '../../buttons';

interface IHeader {
	pages: IPage[];
	login: boolean;
	userName?: string;
}

export default function Header(props: IHeader) {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<Logo />
			</div>

			<div className={styles.BurgerMenu}>
				<BurgerMenu
					icon='menu'
					iconColor='#000'
					pages={props.pages} 
				/>
			</div>


			<div className={styles.navBar}>
				<div className={styles.navigation}>
					<Nav navBurger={false} pages={props.pages} />
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
		</header>
	)
}
