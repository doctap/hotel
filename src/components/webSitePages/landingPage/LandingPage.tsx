import React from 'react'
import Header from '../../headersFooters/header/Header';
import { pagesForFooter, pagesForNav } from '../../routerPages/headersFooters/HeadersFooters';
import mainBackGround from './mainBackGround.jpg';
import styles from './LandingPage.module.scss';
import FooterLinks from '../../headersFooters/footers/footerLinks/FooterLinks';

export default function LandingPage() {
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
