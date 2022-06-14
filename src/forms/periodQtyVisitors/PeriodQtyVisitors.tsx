import React from 'react';
import DateDropdown from '../../components/dateDropdown/DateDropdown';
import DropDownList from '../../components/dropdownList/drop_Down_List/DropDownList';
import SubTitle from '../../components/titles/subTitle/SubTitle';
import styles from './PeriodQtyVisitors.module.scss';

export default function PeriodQtyVisitors() {
	return (
		<>
			<div className={styles.period}>
				<div className={styles.arrival}>
					<SubTitle name='прибытие' />
					<DateDropdown />
				</div>
				<div className={styles.departure}>
					<SubTitle name='выезд' />
					<DateDropdown />
				</div>
			</div>
			<div className={styles.visitors}>
				<SubTitle name='гости' />
				<DropDownList name='Сколько гостей' />
			</div>
		</>
	)
}
