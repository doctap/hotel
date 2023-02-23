import React, { useState } from 'react';
import { IPage } from '../../types';
import Nav from '../headersFooters/header/nav/Nav';
import styles from './BurgerMenu.module.scss';

interface IBurgerMenu {
	pages: IPage[];
}

export default function BurgerMenu(props: IBurgerMenu) {

	const [isShowMenu, setIsShowMenu] = useState(false);

	return (
		<div className={styles.burgerMenu}>
			<button
				onClick={() => setIsShowMenu(!isShowMenu)}
				className={styles.callMenu}
				children='jhgvcf'
			/>
			{
				isShowMenu ?
					<div className={styles.dropDownNav}><Nav navBurger={true} pages={props.pages} /></div>
					:
					null
			}
		</div>
	)
}
