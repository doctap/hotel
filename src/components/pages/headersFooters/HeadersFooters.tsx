import React from 'react';
import ItemContainer from '../../forms/containers/itemContainer/ItemContainer';
import FooterLinks from '../../headersFooters/footers/footerLinks/FooterLinks';
import Plate from '../../headersFooters/footers/plate/Plate';
import Header from '../../headersFooters/header/Header';
import styles from './HeadersFooters.module.scss'
import { pagesForFooter, pagesForNav } from '../data/data';

export const HeadersFooters = () => {
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
