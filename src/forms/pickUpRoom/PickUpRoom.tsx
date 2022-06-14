import React from 'react';
import LongSubmit from '../../components/buttons/submit/LongSubmit';
import TitleH2 from '../../components/titles/titleH2/TitleH2';
import FormContainer from '../containers/formContainer/FormContainer';
import ItemContainer from '../containers/itemContainer/ItemContainer';
import PeriodQtyVisitors from '../periodQtyVisitors/PeriodQtyVisitors';

export default function PickUpRoom() {
	return (
		<FormContainer>

			<ItemContainer margin='0 0 0 0'>
				<TitleH2 value='Найдём номера под ваши пожелания' />
			</ItemContainer>

			<ItemContainer margin='0 0 .5rem 0'>
				<PeriodQtyVisitors />
			</ItemContainer>

			<LongSubmit name='подобрать номер' type='submit' />

		</FormContainer>
	)
}
