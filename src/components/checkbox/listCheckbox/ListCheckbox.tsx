import React, { useState } from 'react';
import BtnTick from '../../buttons/arrowTickBtns/BtnArrowTick';
import { BtnTickVariants } from '../../buttons/arrowTickBtns/BtnArrowTickInterface';
import CheckBoxItem from '../chtckBoxItem/CheckBoxItem';
import { IListCheckbox } from './IneterfaceListCheckbox';
import styles from './ListCheckbox.module.scss';



export default function ListCheckbox(props: IListCheckbox) {

	const [toggle, setToggle] = useState(false);

	const toggleList = () => {
		setToggle(!toggle);
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
				className={toggle ? styles.List : styles.NoneList}
			>
				<li><CheckBoxItem name='Завтрак' /></li>
				<li><CheckBoxItem name='Письменный стол' /></li>
				<li><CheckBoxItem name='Стул для кормления' /></li>
				<li><CheckBoxItem name='Кроватка' /></li>
				<li><CheckBoxItem name='Телевизор' /></li>
				<li><CheckBoxItem name='Шампунь' /></li>
			</ul>
		</div>
	)
}
