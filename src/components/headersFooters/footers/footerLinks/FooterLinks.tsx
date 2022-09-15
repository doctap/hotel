import React from 'react';
import { IPage } from '../../../../commonInterfaces/RFCinterfaces';
import { BtnTickVariants } from '../../../buttons/arrowTickBtns/BtnArrowTickInterface';
import InputBtn from '../../../inputs/InputBtn/InputBtn';
import Paragraph from '../../../texts/paragraph/Paragraph';
import SubTitle from '../../../titles/subTitle/SubTitle';
import Brands from '../../brands/Brands';
import Copyright from '../../copyright/Сopyright';
import LinksList from '../../linksList/LinksList';
import Logo from '../../logo/Logo';
import styles from './FooterLinks.module.scss';

interface IFooterLinks {
	pages: IPage[];
	getNextPage: (id: string) => void;
}

export default function FooterLinks(props: IFooterLinks) {
	return (
		<footer className={styles.footer}>

			<div className={styles.footerTop}>
				<div className={styles.logo}>
					<Logo />
					<Paragraph>
						Бронирование номеров в лучшем отеле 2019 года по версии ассоциации «Отельные взгляды»
					</Paragraph>
				</div>

				<div className={styles.navigation}>
					<LinksList title='навигация' pages={props.pages.slice(0, 4)} getNextPage={props.getNextPage} />
				</div>
				<div className={styles.linkList}>
					<LinksList title='о нас' pages={props.pages.slice(4, 8)} getNextPage={props.getNextPage} />
				</div>
				<div className={styles.linkList}>
					<LinksList title='служба поддержки' pages={props.pages.slice(8)} getNextPage={props.getNextPage} />
				</div>

				<div className={styles.InputSubscribe}>
					<SubTitle name='подписка' />
					<Paragraph>
						Получайте специальные предложения и новости сервиса
					</Paragraph>
					<InputBtn
						typeInput='email'
						placeholderInput='Email'
						typeButton='submit'
						variantBtn={BtnTickVariants.Arrow}
					/>
				</div>
			</div>

			<div className={styles.footerBottom}>
				<Copyright />
				<div className={styles.brands}>
					<Brands />
				</div>
			</div>

		</footer>
	)
}
