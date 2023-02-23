import React from 'react'
import Header from '../../headersFooters/header/Header';
import mainBackGround from './mainBackGround.jpg';
import styles from './LandingPage.module.scss';
import FooterLinks from '../../headersFooters/footers/footerLinks/FooterLinks';
import { pagesForNav, pagesForFooter } from '../index';

export const LandingPage = () => {
	return (
		<>
			<div className={styles.main}>
				<div className={styles.header}>
					<Header login={false} pages={pagesForNav} userName='Никифоров Василий' />
				</div>
				<img className={styles.mainBackGround} src={mainBackGround} alt="" />
			</div>
			<FooterLinks pages={pagesForFooter} />
		</>
	)
}
