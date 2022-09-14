import React from 'react';
import { IPage } from '../../../commonInterfaces/RFCinterfaces';
import ItemContainer from '../../forms/containers/itemContainer/ItemContainer';
import FooterLinks from '../../headersFooters/footers/footerLinks/FooterLinks';
import Plate from '../../headersFooters/footers/plate/Plate';
import Header from '../../headersFooters/header/Header';
import styles from './HeadersFooters.module.scss'

export const pagesForNav: IPage[] = [
	{ pageName: 'О нас', pageId: 946 },
	{ pageName: '1 услуга', pageId: 103 },
	{ pageName: '2 услуга', pageId: 8273 },
	{ pageName: '3 услуга', pageId: 23 },
	{ pageName: 'Вакансии', pageId: 95 },
	{ pageName: 'Новости', pageId: 987 },
	{ pageName: '1 Соглашение', pageId: 823 },
	{ pageName: '1 Соглашение', pageId: 22 },
	{ pageName: '1 Соглашение', pageId: 62 },
	{ pageName: '1 Соглашение', pageId: 765 },
];

export const pagesForFooter: IPage[] = [
	{ pageName: 'О нас', pageId: 9383 },
	{ pageName: 'Новости', pageId: 83 },
	{ pageName: 'Служба поддержки', pageId: 93 },
	{ pageName: 'Услуги', pageId: 9 },
	{ pageName: 'О сервисе', pageId: 8 },
	{ pageName: 'Наша команда', pageId: 3 },
	{ pageName: 'Вакансии', pageId: 47 },
	{ pageName: 'Инвесторы', pageId: 38 },
	{ pageName: 'Соглашения', pageId: 8674 },
	{ pageName: 'Сообщества', pageId: 9383 },
	{ pageName: 'Связь с нами', pageId: 9383 },
];

export default function HeadersFooters() {
	return (
		<div className={styles.wrapper}>
			<ItemContainer>
				<Header
					pages={pagesForNav}
					login={false}
				/>
			</ItemContainer>

			<ItemContainer margin='0 0 4rem 0'>
				<Header
					pages={pagesForNav}
					login={true}
					userName='Юлий Цезарь'
				/>
			</ItemContainer>

			<ItemContainer margin='0 0 2rem 0'>
				<FooterLinks pages={pagesForFooter} />
			</ItemContainer>

			<ItemContainer>
				<div className={styles.plate}>
					<Plate />
				</div>
			</ItemContainer>

		</div>
	)
}
