import React, { useState } from 'react';
import { IDropDownList } from './DropDownInterface';
import styles from './DropDownList.module.scss';
import BtnTick from '../../buttons/arrowTickBtns/BtnArrowTick';
import Title from '../../titles/title/SubTitle';
import { BtnTickVariants } from '../../buttons/arrowTickBtns/BtnArrowTickInterface';
import OptionsDDList from '../options/OptionsDDList';



export default function DropDownList(props: IDropDownList) {

	// const [arr, setArr] = useState<number[]>([]);

	// const fun = (num: number[]) => {
	// 	setArr(num);
	// }

	const [toggle, setToggle] = useState(false);

	const showHideParam = () => {
		setToggle(!toggle);
	}

	return (
		<div className={styles.wrapper}>

			<Title name='dropdown' />

			<div className={styles.dropDownList}>
				<div className={styles.subTitle}>
					<span className={styles.value}>
						{props.name}
					</span>
					<BtnTick
						onClick={showHideParam}
						type={'button'}
						variant={BtnTickVariants.Tick}
					/>
				</div>
				{
					toggle ? <OptionsDDList name='' /> : null
				}
			</div>
		</div>
	)
}
