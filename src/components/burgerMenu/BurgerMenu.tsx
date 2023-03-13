import React, { useState } from 'react';
import { HEX, IPage, IconType } from '../../types';
import Nav from '../headersFooters/header/nav/Nav';
import styles from './BurgerMenu.module.scss';
import { IconButton } from '../buttons';

interface IBurgerMenu {
	pages: IPage[]
	icon: IconType
	iconColor: HEX
}

export const BurgerMenu = (props: IBurgerMenu) => {

	const [isShowMenu, setIsShowMenu] = useState(false);

	return (
		<div className={styles.burgerMenu}>
			<IconButton
				onClick={() => setIsShowMenu(!isShowMenu)}
				color={props.iconColor}
				icon={props.icon}
				type='button'
			/>
			{
				isShowMenu 
					? <div className={styles.dropDownNav}><Nav navBurger={true} pages={props.pages} /></div>
					: null
			}
		</div>
	)
}
