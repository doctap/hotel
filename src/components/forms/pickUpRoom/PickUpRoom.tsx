import React, {useEffect, useState}  from 'react';
import TitleH2 from '../../titles/titleH2/TitleH2';
import FormContainer from '../containers/formContainer/FormContainer';
import ItemContainer from '../containers/itemContainer/ItemContainer';
import PeriodQtyVisitors, { IPeriodVisitors } from '../periodQtyVisitors/PeriodQtyVisitors';
import { LongSubmit } from '../../buttons';

export default function PickUpRoom() {

	const [stateData, setStateData] = useState({
		visitors: {
			counterAdults: 0,
			counterBabies: 0,
			counterKids: 0,
		},
		dateArrival: new Date(),
		dateDeparture: new Date(),
	});
	function submitForm() {
	}

	function getData(data: IPeriodVisitors) {
		setStateData(data);
	}

	useEffect(() => {
		console.log(stateData);
	}, [stateData])
	

	return (
		<FormContainer>
			<ItemContainer margin='0 0 0 0'>
				<TitleH2 value='Найдём номера под ваши пожелания' />
			</ItemContainer>

			<ItemContainer margin='0 0 .5rem 0'>
				<PeriodQtyVisitors getArrivalData={getData} />
			</ItemContainer>

			<LongSubmit name='подобрать номер' type='submit' submitForm={submitForm} />

		</FormContainer>
	)
}
