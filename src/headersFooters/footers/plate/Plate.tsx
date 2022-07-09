import React from 'react';
import Brands from '../../brands/Brands';
import Copyright from '../../copyright/Сopyright';
import Logo from '../../logo/Logo';
import styles from './Plate.module.scss';

export default function Plate() {
	return (
		<div className={styles.plate}>
			<Logo />
			<div>
				<Copyright />
			</div>
			<div className={styles.brands}>
				<Brands />
			</div>
		</div>
	)
}
