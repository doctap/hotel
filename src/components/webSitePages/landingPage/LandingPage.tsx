import React from 'react'
import Header from '../../headersFooters/header/Header';
import { pagesForFooter, pagesForNav } from '../../routerPages/headersFooters/HeadersFooters';
import styles from './LandingPage.module.scss';
import FooterLinks from '../../headersFooters/footers/footerLinks/FooterLinks';
import PickUpRoom, { IDataRequest } from '../../forms/pickUpRoom/PickUpRoom';

export default function LandingPage() {

	const getRooms = (param: IDataRequest) => {
		console.log('REQUEST', param)
	};

	const getPage = (id: string) => {
		console.log('Request', '| pages id:', id)
	};

	return (
		<>
			<div className={styles.main}>
				<div className={styles.header}>
					<Header getNextPage={getPage} login={false} pages={pagesForNav} userName='Никифоров Василий' />
				</div>
				<div className={styles.pickUpRoom}>
					<PickUpRoom getRooms={getRooms} />
				</div>
				<div className={styles.sloganBlock}>
					<div className={styles.slogan}>
						Лучшие номера для вашей работы, отдыха и просто вдохновения
					</div>
				</div>
			</div>
			<FooterLinks getNextPage={getPage} pages={pagesForFooter} />
		</>
	)
}
