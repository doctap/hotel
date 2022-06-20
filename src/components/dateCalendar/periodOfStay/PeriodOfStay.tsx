import React, { useState } from 'react';
import ItemContainer from '../../../forms/containers/itemContainer/ItemContainer';
import SubTitle from '../../titles/subTitle/SubTitle';
import DateCalendar from '../DateCalendar';
import styles from './PeriodOfStay.module.scss';

interface IPeriodOfStay {
	onChange: (dateArrival: Date, dateDeparture: Date) => void;
}

export default function PeriodOfStay(props: IPeriodOfStay) {

	const [dateArrival, setDateArrival] = useState(new Date());
	const [dateDeparture, setDateDeparture] = useState(new Date());

	function getDateArrival(date: Date) {
		setDateArrival(date);
		props.onChange(dateArrival, dateDeparture);
	}

	function getDateDeparture(date: Date) {
		setDateDeparture(date);
		props.onChange(dateArrival, dateDeparture);
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.arrival}>
				<ItemContainer margin='0 0 .3rem 0'>
					<SubTitle name='прибытие' />
				</ItemContainer>
				<DateCalendar getDate={getDateArrival} />
			</div>
			<div className={styles.departure}>
				<ItemContainer margin='0 0 .3rem 0'>
					<SubTitle name='выезд' />
				</ItemContainer>
				<DateCalendar getDate={getDateDeparture} />
			</div>
		</div>
	)
}
