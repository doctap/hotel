import React, { useState } from 'react';
import { IPage } from '../../commonInterfaces/RFCinterfaces';
import BtnTick from '../../components/buttons/arrowTickBtns/BtnArrowTick';
import { BtnTickVariants } from '../../components/buttons/arrowTickBtns/BtnArrowTickInterface';
import Link from '../header/linkNav/Link';
import styles from './Select.module.scss';

interface ISelect {
	pagesItem: IPage[];
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
				<div>
					{props.name}
				</div>
				<div className={styles.btnTick}>
					<BtnTick
						type='button'
						variant={BtnTickVariants.Tick}
						onClick={toggleItems}
					/>
				</div>
			</label>
			<div className={showItems ? styles.itemsLink : styles.itemsLinkHide}>
				{props.pagesItem.map(
					it => <Link
						id={it.pageId}
						name={it.pageName}
						onClick={(id) => console.log(id)}
					/>
				)}
			</div>
		</div>
	)
}

