import React from 'react';
import FormRegistration from '../../forms/accountRegistration/FormRegistration';
import Login from '../../forms/login/Login';
import PickUpRoom from '../../forms/pickUpRoom/PickUpRoom';
import FormReservation from '../../forms/reservationForm/FormReservation';
import HotelRoom from '../../hotelRoom/HotelRoom';
import ItemRoom from '../../itemRoom/ItemRoom';
import styles from './Forms.module.scss';

export default function Forms() {
	return (
		<div
			className={styles.columns}
		>
			<div className={styles.column}>


				<div className={styles.pick_up_room}>
					<PickUpRoom getRooms={() => 0} />
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
				<ItemRoom roomNum='888' isLux={true} grade='5' opinions='65' price='9900' />
				<HotelRoom roomNumber={'888'} roomStatus={true} sizeTitle='h1' />
				<HotelRoom roomNumber={'1111'} roomStatus={false} sizeTitle='h2' />


			</div>
		</div>
	)
}
