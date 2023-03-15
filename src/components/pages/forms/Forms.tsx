import React from 'react';
import FormRegistration from '../../forms/accountRegistration/FormRegistration';
import Login from '../../forms/login/Login';
import PickUpRoom from '../../forms/pickUpRoom/PickUpRoom';
import FormReservation from '../../forms/reservationForm/FormReservation';
import HotelRoom from '../../hotelRoom/HotelRoom';
import ItemRoom from '../../itemRoom/ItemRoom';
import styles from './Forms.module.scss';

export const Forms = () => {
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
				<ItemRoom
					feedBackAmount={65}
					fullStars={4}
					maxStars={5}
					perTime='в сутки'
					pricePerTime={9900}
					roomNumber={777}
					roomType='люкс'
				/>
				<HotelRoom roomNumber={888} roomType={'люкс'} sizeTitle='h1' />
				<HotelRoom roomNumber={1111} roomType={''} sizeTitle='h2' />
			</div>
		</div>
	)
}
