import React, { useState } from 'react';
import { IPage } from '../../../commonInterfaces/RFCinterfaces';
import BtnTick from '../../buttons/arrowTickBtns/BtnArrowTick';
import { BtnTickVariants } from '../../buttons/arrowTickBtns/BtnArrowTickInterface';
import Link from '../header/linkNav/Link';
import styles from './DropDownLinks.module.scss';

interface ISelect {
	pagesItem: IPage[];
	name: string;
	getNextPage: (id: string) => void;
}

export default function DropDownLinks(props: ISelect) {

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
						fontWeight='normal'
						id={it.pageId}
						name={it.pageName}
						onClick={props.getNextPage}
					/>
				)}
			</div>
		</div>
	)
}

