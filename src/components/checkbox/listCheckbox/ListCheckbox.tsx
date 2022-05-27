import React, { useState } from 'react';
import BtnTick from '../../buttons/arrowTickBtns/BtnArrowTick';
import { BtnTickVariants } from '../../buttons/arrowTickBtns/BtnArrowTickInterface';
import Title from '../../titles/title/SubTitle';
import CheckBoxTick from '../chtckboxTick/CheckBoxTick';
import { IListCheckbox } from './IneterfaceListCheckbox';
import styles from './ListCheckbox.module.scss';

export default function ListCheckbox(props: IListCheckbox) {

	const [toggle, setToggle] = useState(false);

	const toggleList = () => {
		setToggle(!toggle)
	}

	return (
		<div className={styles.wrapper}>

			<label className={styles.header}>
				<Title name='expandable checkbox list' />
				<div className={styles.rotateTick}>

					<BtnTick
						onClick={toggleList}
						type='button'
						variant={BtnTickVariants.Tick}
					/>
				</div>
			</label>

			{toggle ?
				<ul className={styles.List}>
					<li><CheckBoxTick type='checkbox' name='Завтрак' /></li>
					<li><CheckBoxTick type='checkbox' name='Письменный стол' /></li>
					<li><CheckBoxTick type='checkbox' name='Стул для кормления' /></li>
					<li><CheckBoxTick type='checkbox' name='Кроватка' /></li>
					<li><CheckBoxTick type='checkbox' name='Телевизор' /></li>
					<li><CheckBoxTick type='checkbox' name='Шампунь' /></li>
				</ul>
				:
				null
			}
		</div>
	)
}
