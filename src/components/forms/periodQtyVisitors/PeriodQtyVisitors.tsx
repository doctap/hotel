import React, { useEffect, useState } from 'react';
import PeriodOfStay from '../../dateCalendar/periodOfStay/PeriodOfStay';
import DropDownAmountVisitors, { IVisitors } from '../../dropdownList/DropDownAmountVisitors/DropDownAmountVisitors';
import SubTitle from '../../titles/subTitle/SubTitle';
import ItemContainer from '../containers/itemContainer/ItemContainer';
import styles from './PeriodQtyVisitors.module.scss';

interface IPeriodQtyVisitors {
	getArrivalData: (periodVisitors: IPeriodVisitors) => void;
}

export interface IPeriodVisitors {
	visitors: IVisitors;
	dateArrival: Date;
	dateDeparture: Date;
}

export default function PeriodQtyVisitors(props: IPeriodQtyVisitors) {

	const [sendingData, setSendingData] = useState({
		visitors: {
			counterAdults: 0,
			counterBabies: 0,
			counterKids: 0,
		},
		dateArrival: new Date(),
		dateDeparture: new Date(),
	});

	useEffect(() => {
		props.getArrivalData(sendingData);
	}, [sendingData]);

	function getDates(dateArrival: Date, dateDeparture: Date) {
		setSendingData({
			...sendingData,
			dateArrival,
			dateDeparture,
		});
	}

	function getVisitors(visitors: IVisitors) {
		setSendingData({
			...sendingData,
			visitors,
		});
	}

	return (
		<>
			<ItemContainer margin='0 0 1.3rem 0'>
				<PeriodOfStay onChange={getDates} />
			</ItemContainer>
			<div className={styles.visitors}>
				<ItemContainer margin='0 0 .3rem 0'>
					<SubTitle name='гости' />
				</ItemContainer>
				<DropDownAmountVisitors name='Сколько гостей' getQtyVisitors={getVisitors} />
			</div>
		</>
	)
}
