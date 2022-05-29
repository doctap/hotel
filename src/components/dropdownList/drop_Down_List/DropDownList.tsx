import React, { useState } from 'react';
import { IDropDownList } from './DropDownInterface';
import styles from './DropDownList.module.scss';
import BtnTick from '../../buttons/arrowTickBtns/BtnArrowTick';
import { BtnTickVariants } from '../../buttons/arrowTickBtns/BtnArrowTickInterface';
import OptionsDDList from '../options/OptionsDDList';



export default function DropDownList(props: IDropDownList) {

	// const [arr, setArr] = useState<number[]>([]);

	// const fun = (num: number[]) => {
	// 	setArr(num);
	// }

	const [toggle, setToggle] = useState(false);

	const showHideOptions = () => {
		setToggle(!toggle);
	}

	return (
		<div className={styles.wrapper}>

			<div className={styles.dropDownList}>
				<div className={styles.subTitle}>
					<span className={styles.value}>
						{props.name}
					</span>
					<BtnTick
						onClick={showHideOptions}
						type={'button'}
						variant={BtnTickVariants.Tick}
					/>
				</div>
				<OptionsDDList name='' showHide={toggle} />
			</div>
		</div>
	)
}
