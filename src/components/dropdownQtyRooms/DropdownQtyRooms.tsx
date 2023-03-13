import React, { useState } from 'react';
import Counter from '../dropdownList/counter/Counter';
import styles from './DropdownQtyRooms.module.scss';
import { BtnTick, BtnTickVariants } from '../buttons';

interface IDropdownQtyRooms {
	limitBedroom: number;
	limitBed: number;
	limitBathroom: number;
}

export default function DropdownQtyRooms(props: IDropdownQtyRooms) {

	const [qtyBedroom, setQtyBedroom] = useState(0);
	const [qtyBed, setQtyBed] = useState(0);
	const [qtyBathroom, setQtyBathroom] = useState(0);
	const [toggleList, setToggleList] = useState(false);

	function switchList() {
		setToggleList(!toggleList);
	}

	return (
		<div className={styles.wrapper}>
			<div className={toggleList ? `${styles.header} ${styles.header_borderDarkShade50}` : styles.header}>
				<div className={styles.value}>
					<div
						className={styles.valueQtyBedroom}
					>
						{`${qtyBedroom}`}
					</div>
					спальни,
					<div
						className={styles.valueQtyBed}
					>
						{`${qtyBed}`}
					</div>
					кровати...
				</div>
				<div className={styles.BtnToggleList}>
					<BtnTick
						type='button'
						variant={BtnTickVariants.Tick}
						onClick={switchList}
					/>
				</div>
			</div>
			<div className={toggleList ? styles.showList : styles.hideList}>
				<Counter
					name='спальни'
					value={qtyBedroom}
					setValue={setQtyBedroom}
					limit={props.limitBedroom}
				/>
				<Counter
					name='кровати'
					value={qtyBed}
					setValue={setQtyBed}
					limit={props.limitBed}
				/>
				<Counter
					name='ванные комнаты'
					value={qtyBathroom}
					setValue={setQtyBathroom}
					limit={props.limitBathroom}
				/>
			</div>
		</div>
	)
}
