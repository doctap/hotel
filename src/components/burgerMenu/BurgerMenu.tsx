import React, { useState } from 'react';
import { IPage } from '../../commonInterfaces/RFCinterfaces';
import Nav from '../headersFooters/header/nav/Nav';
import styles from './BurgerMenu.module.scss';

interface IBurgerMenu {
	pages: IPage[];
	getNextPage: (id: string) => void;
}

export default function BurgerMenu(props: IBurgerMenu) {

	const [isShowMenu, setIsShowMenu] = useState(false);

	return (
		<div className={styles.burgerMenu}>
			<button
				onClick={() => setIsShowMenu(!isShowMenu)}
				className={styles.callMenu}
				children='menu'
			/>
			{
				isShowMenu ?
					<div className={styles.dropDownNav}><Nav getNextPage={props.getNextPage} navBurger={true} pages={props.pages} /></div>
					:
					null
			}
		</div>
	)
}
