import React from 'react';
import TittlePricePerDay from '../titlePricePerDay/TitlePricePerDay';
import FormContainer from '../containers/formContainer/FormContainer';
import ItemContainer from '../containers/itemContainer/ItemContainer';
import PeriodQtyVisitors from '../periodQtyVisitors/PeriodQtyVisitors';
import Price from '../price/Price';
import styles from './FormReservation.module.scss';
import HotelRoom from '../../hotelRoom/HotelRoom';
import { LongSubmit } from '../../buttons';

interface IFormReservation {

}

export default function FormReservation(props: IFormReservation) {
	return (
		<FormContainer>

			<div className={styles.header}>
				<div className={styles.roomNumber}>
					<HotelRoom roomNumber={888} roomType='люкс' sizeTitle='h1' />
				</div>
				<div className={styles.tittlePricePerDay}>
					<TittlePricePerDay price={9990} text='в сутки' />
				</div>
			</div>

			<ItemContainer margin='0 0 1.2rem 0'>
				<PeriodQtyVisitors getArrivalData={() => 0} />
			</ItemContainer>

			<div className={styles.finalPrices}>
				<div className={styles.pricePeriod}>
					<div>
						<Price sum={9990} variant='light' />
						&nbsp;x {4} суток
					</div>
					<div>
						<Price sum={9990 * 4} variant='light' />
					</div>
				</div>
				<div className={styles.serviceFee}>
					<div>
						Сбор за услуги: скидка&nbsp;
						<Price sum={2179} variant='light' />
					</div>
					<div>
						<Price sum={0} variant='light' />
					</div>
				</div>
				<div className={styles.extras}>
					<div>Сбор за дополнительные<br /> услуги</div>
					<div><Price sum={300} variant='light' /></div>
				</div>
			</div>

			<div className={styles.totalPrice}>
				<div className={styles.total}>
					Итого
				</div>
				<div className={styles.borderDotted}></div>
				<div className={styles.total}>
					<Price sum={38081} variant='bold' />
				</div>
			</div>

			<div className={styles.BtnSubmit}>
				<LongSubmit name='забронировать' type='submit' submitForm={() => 0} />
			</div>

		</FormContainer>
	)
}


