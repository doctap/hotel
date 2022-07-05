import React from 'react';
import ItemContainer from '../../forms/containers/itemContainer/ItemContainer';
import Header from '../../headersFooters/header/Header';
import LinkNav from '../../headersFooters/header/linkNav/LinkNav';
import styles from './HeadersFooters.module.scss'

export default function HeadersFooters() {
	return (
		<div className={styles.wrapper}>
			<ItemContainer>
				<Header />
			</ItemContainer>

			<ItemContainer>
			</ItemContainer>

		</div>
	)
}
