import React from 'react';
import TwoTextField from '../../components/inputs/twoTextField/TwoTextField';
import Price from '../../components/price/Price';
import FormRegistration from '../accountRegistration/FormRegistration';
import Login from '../login/Login';
import PickUpRoom from '../pickUpRoom/PickUpRoom';
import FormReservation from '../reservationForm/FormReservation';
import styles from './PageForms.module.scss';

export default function PageForms() {
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
					<FormReservation roomNumber={888} roomStatus='люкс' />
				</div>
				<div className={styles.Login}>
					<Login />
				</div>

			</div>

			<div className={styles.column}>
				<Price sum={12345} />

				<TwoTextField
					topInputType='email'
					topInputPlaceholder='Email'
					bottomInputType='password'
					bottomInputPlaceholder='Пароль'
				/>
			</div>
		</div>
	)
}
