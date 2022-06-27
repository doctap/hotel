import React, { useState } from 'react';
import BtnTick from '../../components/buttons/arrowTickBtns/BtnArrowTick';
import { BtnTickVariants } from '../../components/buttons/arrowTickBtns/BtnArrowTickInterface';
import styles from './Select.module.scss';

interface ISelect {
	items: string[];
	name: string;
}

export default function Select(props: ISelect) {

	const [showItems, setShowItems] = useState(false);

	function toggleItems() {
		setShowItems(!showItems);
	}

	return (
		<div className={styles.wrapper}>
			<label className={styles.name}>
				{props.name}
				<div className={styles.btnTick}>
					<BtnTick
						type='button'
						variant={BtnTickVariants.Tick}
						onClick={toggleItems}
					/>
				</div>
			</label>
			<div className={showItems ? styles.itemsLink : styles.itemsLinkHide}>
				{props.items.map(
					it => <div className={styles.item}>{it}</div>
				)}
			</div>
		</div>
	)
}
