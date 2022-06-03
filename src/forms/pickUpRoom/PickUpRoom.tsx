import React from 'react';
import LongSubmit from '../../components/buttons/submit/LongSubmit';
import DateDropdown from '../../components/dateDropdown/DateDropdown';
import DropDownList from '../../components/dropdownList/drop_Down_List/DropDownList';
import SubTitle from '../../components/titles/subTitle/SubTitle';
import TitleH1 from '../../components/titles/titleH1/TitleH1';
import styles from './PickUpRoom.module.scss';

export default function PickUpRoom() {
	return (
		<form
			className={styles.formPickUpRoom}
		>
			<div
				className={styles.title}
			>
				<TitleH1>Найдем номера под ваши пожелания</TitleH1>
			</div>
			<div
				className={styles.Data}
			>
				<div
					className={styles.dates}
				>
					<div
						className={styles.arrival}
					>
						<SubTitle name='прибытие' />
						<DateDropdown />
					</div>
					<div
						className={styles.departure}
					>
						<SubTitle name='выезд' />
						<DateDropdown />
					</div>
				</div>
				<div
					className={styles.visitors}
				>
					<SubTitle name='гости' />
					<DropDownList name='Сколько гостей' />
				</div>
			</div>
			<div
				className={styles.BtnSubmit}
			>
				<LongSubmit name='подобрать номер' type='submit' />
			</div>
		</form>
	)
}
