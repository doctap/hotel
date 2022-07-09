import React from 'react';
import { IPage } from '../../../commonInterfaces/RFCinterfaces';
import { BtnTickVariants } from '../../../components/buttons/arrowTickBtns/BtnArrowTickInterface';
import InputBtn from '../../../components/inputs/InputBtn/InputBtn';
import Paragraph from '../../../components/texts/paragraph/Paragraph';
import SubTitle from '../../../components/titles/subTitle/SubTitle';
import Brands from '../../brands/Brands';
import Copyright from '../../copyright/Сopyright';
import LinksList from '../../linksList/LinksList';
import Logo from '../../logo/Logo';
import styles from './FooterLinks.module.scss';

interface IFooterLinks {
	pages: IPage[];
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

				<div className={styles.LinkLists}>
					<div>
						<LinksList title='навигация' pages={props.pages.slice(0, 4)} />
					</div>

					<div>
						<LinksList title='о нас' pages={props.pages.slice(4, 8)} />
					</div>

					<div>
						<LinksList title='служба поддержки' pages={props.pages.slice(8)} />
					</div>
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
