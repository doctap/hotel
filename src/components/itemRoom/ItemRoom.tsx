import React, { useState } from 'react';
import BtnTick from '../buttons/arrowTickBtns/BtnArrowTick';
import { BtnTickVariants } from '../buttons/arrowTickBtns/BtnArrowTickInterface';
import roomImg1 from '../../roomLux/RoomLux.jpg';
import roomImg2 from '../../roomLux/Room.jpg';
import styles from './ItemRoom.module.scss';

export default function ItemRoom() {

	const divImg: React.ReactNode[] = [<img src={roomImg1} />, <img src={roomImg2} />];

	const [nextImg, setNextImg] = useState(0);

	const getNextImg = () => {
		if (nextImg === divImg.length - 1) setNextImg(0);
		if (nextImg < divImg.length - 1) setNextImg(nextImg + 1);
	}

	const getPreviousImg = () => {
		if (nextImg === 0) setNextImg(divImg.length - 1);
		if (nextImg <= divImg.length - 1) setNextImg(nextImg - 1);
		console.log(nextImg);
	}

	return (
		<div>
			<BtnTick
				type='button'
				variant={BtnTickVariants.Tick}
				onClick={getNextImg}
			/>
			{divImg[nextImg]}
			<BtnTick
				type='button'
				variant={BtnTickVariants.Tick}
				onClick={getPreviousImg}
			/>
		</div>
	)
}
