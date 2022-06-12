import React from 'react';
import LongSubmit from '../../components/buttons/submit/LongSubmit';
import DateDropdown from '../../components/dateDropdown/DateDropdown';
import DropDownList from '../../components/dropdownList/drop_Down_List/DropDownList';
import SubTitle from '../../components/titles/subTitle/SubTitle';
import TitleH2 from '../../components/titles/titleH2/TitleH2';
import TittlePricePerDay from '../../components/titles/titlePricePerDay/TitlePricePerDay';
import FormContainer from '../containers/formContainer/FormContainer';
import styles from './FormReservation.module.scss';

interface IFormReservation {
	roomNumber: number;
	roomStatus: string;
}

export default function FormReservation(props: IFormReservation) {
	return (
		<FormContainer>

			<div className={styles.header}>
				<div className={styles.headerBlock}>
					<div className={styles.symbol}>
						&#8470;
					</div>
					<div className={styles.roomNumber}>
						<TitleH2 value={props.roomNumber} />
					</div>
					<div className={styles.roomStatus}>
						{props.roomStatus}
					</div>
				</div>
				<div className={styles.tittlePricePerDay}>
					<TittlePricePerDay price={9990} text='в сутки' />
				</div>
			</div>

			<div className={styles.inputs}>
				<div className={styles.period}>
					<div className={styles.arrival}>
						<div className={styles.arrivalTitle}>
							<SubTitle name='прибытие' />
							<DateDropdown />
						</div>
					</div>
					<div className={styles.departure}>
						<div className={styles.departureTitle}>
							<SubTitle name='выезд' />
							<DateDropdown />
						</div>
					</div>
				</div>
				<div className={styles.visitors}>
					<div className={styles.visitorsTitle}>
						<SubTitle name='гости' />
					</div>
					<div className={styles.DropDownList}>
						<DropDownList name='Сколько гостей' />
					</div>
				</div>
			</div>

			<div className={styles.finalPrices}>
				<div className={styles.pricePeriod}>
					<div>{9990}&#8381; x {4} суток</div>
					<div>{9990 * 4}&#8381;</div>
				</div>
				<div className={styles.serviceFee}>
					<div>Сбор за услуги: скидка {2179}&#8381;</div>
					<div>{0}&#8381;</div>
				</div>
				<div className={styles.extras}>
					<div>Сбор за дополнительные<br /> услуги</div>
					<div>{300}&#8381;</div>
				</div>
			</div>

			<div className={styles.totalPrice}>
				<div className={styles.total}>Итого</div>
				<div className={styles.border}></div>
				<div className={styles.total}>{38081}&#8381;</div>
			</div>

			<div className={styles.BtnSubmit}>
				<LongSubmit name='забронировать' type='submit' />
			</div>
		</FormContainer>
	)
}


