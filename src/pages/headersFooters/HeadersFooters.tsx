import React from 'react';
import ItemContainer from '../../forms/containers/itemContainer/ItemContainer';
import Header from '../../headersFooters/header/Header';
import { IPage } from '../../headersFooters/header/nav/Nav';
import styles from './HeadersFooters.module.scss'

export default function HeadersFooters() {


	const pagesForNav: IPage[] = [
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

	return (
		<div className={styles.wrapper}>
			<ItemContainer>
				<Header
					pages={pagesForNav}
					login={false}
				/>
			</ItemContainer>

			<ItemContainer>
				<Header
					pages={pagesForNav}
					login={true}
					userName='Юлий Цезарь'
				/>
			</ItemContainer>

		</div>
	)
}
