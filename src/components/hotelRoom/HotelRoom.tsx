import React from 'react';
import TitleH1 from '../titles/titleH1/TitleH1';
import TitleH2 from '../titles/titleH2/TitleH2';
import styles from './HotelRoom.module.scss';

interface IHotelRoom {
	roomNumber: string;
	roomStatus: boolean;
	sizeTitle: 'h1' | 'h2';
}

export default function HotelRoom(props: IHotelRoom) {
	return (
		<div className={styles.headerBlock}>
			<div className={styles.symbol}>
				&#8470;
			</div>
			<div className={styles.roomNumber}>
				{props.sizeTitle === 'h1' ?
					<TitleH1 children={props.roomNumber} />
					:
					<TitleH2 children={props.roomNumber} />
				}
			</div>
			<div className={styles.roomStatus}>
				{props.roomStatus ? 'люкс' : null}
			</div>
		</div>
	)
}
