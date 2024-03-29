import React, { useState } from 'react';
import roomImg1 from '../../images/roomLux/image.jpg';
import roomImg2 from '../../images/roomLux/Room.jpg';
import roomImg3 from '../../images/roomLux/image.jpg';
import styles from './ItemRoom.module.scss';
import HotelRoom from '../hotelRoom/HotelRoom';
import RateStars from '../rateStars/RateStars';
import QtyFeedback from '../qtyFeedback/QtyFeedback';
import TittlePricePerDay from '../forms/titlePricePerDay/TitlePricePerDay';
import { BtnTick, BtnTickVariants } from '../buttons';

interface IItemRoom {
	perTime: string;
	pricePerTime: number;
	roomNumber: number;
	roomType: string;
	maxStars: number;
	fullStars: number;
	feedBackAmount: number;
}

export default function ItemRoom(props: IItemRoom) {

	const divImg: React.ReactNode[] = [
		<img src={roomImg1} alt='Image' />,
		<img src={roomImg2} alt='Image' />,
		<img src={roomImg3} alt='Image' />
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
							roomNumber={props.roomNumber}
							roomType={props.roomType}
							sizeTitle='h2'
						/>
					</div>

					<div className={styles.TittlePricePerDay}>
						<TittlePricePerDay price={props.pricePerTime} text={props.perTime} />
					</div>
				</div>
				<div className={styles.labelBottom}>
					<RateStars 
						fullStars={props.fullStars}
						maxStars={props.maxStars}
					/>
					<div className={styles.QtyFeedback}>
						<QtyFeedback qty={props.feedBackAmount} />
					</div>
				</div>
			</div>
		</div>
	)
}
