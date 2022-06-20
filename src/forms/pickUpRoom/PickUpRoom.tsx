import React, {useEffect, useState}  from 'react';
import LongSubmit from '../../components/buttons/submit/LongSubmit';
import TitleH2 from '../../components/titles/titleH1/TitleH1';
import FormContainer from '../containers/formContainer/FormContainer';
import ItemContainer from '../containers/itemContainer/ItemContainer';
import PeriodQtyVisitors, { IPeriodVisitors } from '../periodQtyVisitors/PeriodQtyVisitors';

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
			<div>{JSON.stringify(stateData)}</div>
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
