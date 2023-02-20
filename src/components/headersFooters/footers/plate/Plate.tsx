import React from 'react';
import Brands from '../../brands/Brands';
import Copyright from '../../copyright/Сopyright';
import Logo from '../../logo/Logo';
import styles from './Plate.module.scss';

export default function Plate() {
	return (
		<div className={styles.plate}>
			<div className={styles.logo}>
				<Logo />
			</div>
			<div className={styles.copyright}>
				<Copyright text='Copyright © 2018 Toxin отель. Все права защищены.' />
			</div>
			<div className={styles.brands}>
				<Brands />
			</div>
		</div>
	)
}
