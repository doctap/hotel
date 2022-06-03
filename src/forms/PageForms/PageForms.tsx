import React from 'react';
import FormRegistration from '../accountRegistration/FormRegistration';
import PickUpRoom from '../pickUpRoom/PickUpRoom';
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

			</div>

			<div className={styles.column}>

			</div>
		</div>
	)
}
