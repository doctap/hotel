import React, { useState } from 'react';
import uniqId from 'uniqid';
import CheckBoxItem from '../chtckBoxItem/CheckBoxItem';
import styles from './DropdownCheckboxes.module.scss';
import { BtnTick, BtnTickVariants } from '../../buttons';

export interface IDropdownCheckboxes {
	name: string;
	items: string[];
}

export default function DropdownCheckboxes(props: IDropdownCheckboxes) {

	const [showHideList, setShowHideList] = useState(false);

	const toggleList = () => {
		setShowHideList(!showHideList);
	}

	return (
		<div className={styles.wrapper}>

			<label className={styles.header}>
				<div className={styles.title}>
					{props.name}
				</div>
				<div className={styles.rotateTick}>
					<BtnTick
						onClick={toggleList}
						type='button'
						variant={BtnTickVariants.Tick}
					/>
				</div>
			</label>
			<ul
				className={showHideList ? styles.List : styles.NoneList}
			>
				{props.items.map(str => <li key={uniqId()}><CheckBoxItem name={str} /></li>)}
			</ul>
		</div>
	)
}
