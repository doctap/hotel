import React from 'react';
import TitleH2 from '../titles/titleH2/TitleH2';
import styles from './HotelRoom.module.scss';

interface IHotelRoom {
	roomNumber: number;
	roomStatus: string;
}

export default function HotelRoom(props: IHotelRoom) {
	return (
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
	)
}
