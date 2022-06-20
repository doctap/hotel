import React, { useEffect, useState } from 'react';
import PeriodOfStay from '../../components/dateCalendar/periodOfStay/PeriodOfStay';
import DropDownList, { IVisitors } from '../../components/dropdownList/drop_Down_List/DropDownList';
import SubTitle from '../../components/titles/subTitle/SubTitle';
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
				<DropDownList name='Сколько гостей' getQtyVisitors={getVisitors} />
			</div>
		</>
	)
}
