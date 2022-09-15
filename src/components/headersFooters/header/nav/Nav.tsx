import React from 'react';
import { IPage } from '../../../../commonInterfaces/RFCinterfaces';
import Button from '../../../buttons/btns/Button';
import { BtnVariants } from '../../../buttons/btns/ButtonInterface';
import DropDownLinks from '../../dropDownLinks/DropDownLinks';
import Link from '../linkNav/Link';
import styles from './Nav.module.scss';

interface INav {
	pages: IPage[];
	navBurger: boolean;
	getNextPage: (id: string) => void;
}

export default function Nav(props: INav) {

	return (
		<nav className={props.navBurger ? `${styles.nav} ${styles.nav_column}` : styles.nav}>
			{
				props.navBurger && (
					<div className={styles.buttonsBlockInBurgerMenu}>
						<Button name='войти' type='button' variant={BtnVariants.Border} onClick={() => console.log('вызвать окно авторизации')} />
						<Button name='регистрация' type='button' variant={BtnVariants.Primary} onClick={() => console.log('вызвать окно регистрации')} />
					</div>)
			}
			<Link
				id={props.pages[0].pageId}
				name={props.pages[0].pageName}
				fontWeight='bold'
				onClick={props.getNextPage}
			/>
			<DropDownLinks
				name='Услуги'
				pagesItem={props.pages.slice(1, 4)}
				getNextPage={props.getNextPage}
			/>
			<Link
				id={props.pages[4].pageId}
				name={props.pages[4].pageName}
				fontWeight='normal'
				onClick={props.getNextPage}
			/>
			<Link
				id={props.pages[5].pageId}
				name={props.pages[5].pageName}
				fontWeight='normal'
				onClick={props.getNextPage}
			/>
			<DropDownLinks
				name='Соглашения'
				pagesItem={props.pages.slice(6, 11)}
				getNextPage={props.getNextPage}
			/>
		</nav>
	)
}
