import React, { useState } from 'react';
import roomImg1 from '../../images/roomLux/image.jpg';
import roomImg2 from '../../images/roomLux/Room.jpg';
import roomImg3 from '../../images/roomLux/image.jpg';
import { BtnTickVariants } from '../buttons/arrowTickBtns/BtnArrowTickInterface';
import BtnTick from '../buttons/arrowTickBtns/BtnArrowTick';
import styles from './ItemRoom.module.scss';
import HotelRoom from '../hotelRoom/HotelRoom';
import RateStars from '../rateStars/RateStars';
import QtyFeedback from '../qtyFeedback/QtyFeedback';
import TittlePricePerDay from '../forms/titlePricePerDay/TitlePricePerDay';
import { IItemRoom } from '../../commonInterfaces/RFCinterfaces';

export default function ItemRoom(props: IItemRoom) {

	const divImg: React.ReactNode[] = [
		<img src={roomImg1} alt='qqqImg' />,
		<img src={roomImg2} alt='qqqImg' />,
		<img src={roomImg3} alt='qqqImg' />
	];

	const [nextImg, setNextImg] = useState(0);

	const getNextImg = () => {
		if (nextImg === divImg.length - 1) setNextImg(0);
		if (nextImg < divImg.length - 1) setNextImg(nextImg + 1);
	}

	const getPreviousImg = () => {
		if (nextImg === 0) setNextImg(divImg.length - 1);
		if (nextImg > 0) setNextImg(nextImg - 1);
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.images}>
				<div className={styles.btnNext}>
					<BtnTick
						type='button'
						variant={BtnTickVariants.HorizontalTickRight}
						onClick={getNextImg}
					/>
				</div>

				{divImg[nextImg]}

				<div className={styles.btnPrevious}>
					<BtnTick
						type='button'
						variant={BtnTickVariants.HorizontalTickLeft}
						onClick={getPreviousImg}
					/>
				</div>
			</div>

			<div className={styles.labels}>
				<div className={styles.labelTop}>
					<div>
						<HotelRoom
							roomNumber={props.roomNum}
							roomStatus={props.isLux}
							sizeTitle='h2'
						/>
					</div>

					<div className={styles.TittlePricePerDay}>
						<TittlePricePerDay price={props.price} text='в сутки' />
					</div>
				</div>
				<div className={styles.labelBottom}>
					<RateStars fullStars={parseInt(props.grade)} maxStars={5} />
					<div className={styles.QtyFeedback}>
						<QtyFeedback qty={parseInt(props.opinions)} />
					</div>
				</div>
			</div>
		</div>
	)
}
