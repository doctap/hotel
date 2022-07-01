import React from 'react';
import ItemContainer from '../../forms/containers/itemContainer/ItemContainer';
import Header from '../../headersFooters/header/Header';
import LinkNav from '../../headersFooters/header/linkNav/LinkNav';

export default function HeadersFooters() {
	return (
		<div>
			<ItemContainer>
				<Header />
			</ItemContainer>

			<ItemContainer>
			</ItemContainer>

		</div>
	)
}
