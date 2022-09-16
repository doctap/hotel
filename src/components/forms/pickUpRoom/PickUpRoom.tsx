import React, { useState } from 'react';
import LongSubmit from '../../buttons/submit/LongSubmit';
import { IVisitors } from '../../dropdownList/DropDownAmountVisitors/DropDownAmountVisitors';
import TitleH2 from '../../titles/titleH2/TitleH2';
import FormContainer from '../containers/formContainer/FormContainer';
import ItemContainer from '../containers/itemContainer/ItemContainer';
import PeriodQtyVisitors, { IPeriodVisitors } from '../periodQtyVisitors/PeriodQtyVisitors';

export interface IDataRequest {
	visitors: IVisitors;
	dateArrival: Date;
	dateDeparture: Date;
}

interface IPickUpRoom {
	getRooms: (dataRequest: IDataRequest) => void;
}

export default function PickUpRoom(props: IPickUpRoom) {

	const [stateData, setStateData] = useState({
		visitors: {
			counterAdults: 0,
			counterBabies: 0,
			counterKids: 0,
		},
		dateArrival: new Date(),
		dateDeparture: new Date(),
	});

	const submitForm = (event: React.FormEvent<HTMLButtonElement>) => {
		event.preventDefault();
		event.stopPropagation();
		props.getRooms(stateData)
	}

	function getPeriod(data: IPeriodVisitors) {
		setStateData(data);
	}

	return (
		<FormContainer>
			<ItemContainer margin='0 0 0 0'>
				<TitleH2 value='Найдём номера под ваши пожелания' />
			</ItemContainer>

			<ItemContainer margin='0 0 .5rem 0'>
				<PeriodQtyVisitors getArrivalData={getPeriod} />
			</ItemContainer>

			<LongSubmit name='подобрать номер' type='submit' submitForm={submitForm} />

		</FormContainer>
	)
}
