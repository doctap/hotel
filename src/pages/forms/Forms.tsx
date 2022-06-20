import React from 'react';
import Price from '../../forms/price/Price';
import FormRegistration from '../../forms/accountRegistration/FormRegistration';
import Login from '../../forms/login/Login';
import PickUpRoom from '../../forms/pickUpRoom/PickUpRoom';
import FormReservation from '../../forms/reservationForm/FormReservation';
import ItemRoom from '../../components/itemRoom/ItemRoom';
import HotelRoom from '../../components/hotelRoom/HotelRoom';
import styles from './Forms.module.scss';

export default function Forms() {
	return (
		<div
			className={styles.columns}
		>
			<div className={styles.column}>

				<div className={styles.pick_up_room}>
					<PickUpRoom />
				</div>

				<div className={styles.account_registration}>
					<FormRegistration />
				</div>
			</div>

			<div className={styles.column}>
				<div className={styles.FormReservation}>
					<FormReservation />
				</div>
				<div className={styles.Login}>
					<Login />
				</div>

			</div>

			<div className={styles.column}>
				<ItemRoom />
				<HotelRoom roomNumber={888} roomStatus={true} sizeTitle='h1' />
				<HotelRoom roomNumber={1111} roomStatus={false} sizeTitle='h2' />

				
			</div>
		</div>
	)
}
