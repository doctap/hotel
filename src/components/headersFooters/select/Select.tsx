import React, { useState } from 'react';
import { IPage } from '../../../types';
import Link from '../header/linkNav/Link';
import styles from './Select.module.scss';
import { BtnTick, BtnTickVariants } from '../../buttons';

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
						fontWeight='normal'
						id={it.pageId}
						name={it.pageName}
						onClick={(id) => console.log(id)}
					/>
				)}
			</div>
		</div>
	)
}

