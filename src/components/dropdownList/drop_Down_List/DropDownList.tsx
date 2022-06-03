import React, { useState } from 'react';
import styles from './DropDownList.module.scss';
import BtnTick from '../../buttons/arrowTickBtns/BtnArrowTick';
import { BtnTickVariants } from '../../buttons/arrowTickBtns/BtnArrowTickInterface';
import Counter from '../counter/Counter';
import Button from '../../buttons/btns/Button';
import { BtnVariants } from '../../buttons/btns/ButtonInterface';

interface IDropDownList {
	name: string;
}

export default function DropDownList(props: IDropDownList) {

	const [counterAdults, setCounterAdults] = useState<number>(0);
	const [counterKids, setCounterKids] = useState<number>(0);
	const [counterBabies, setCounterBabies] = useState<number>(0);
	const [toggle, setToggle] = useState<boolean>(false);
	const [valueList, setValueList] = useState<string>(props.name);

	const resetCounters = () => {
		setCounterAdults(0);
		setCounterKids(0);
		setCounterBabies(0);
		setValueList(props.name);
	}

	const showHideOptions = () => {
		setToggle(!toggle);
	}

	const sumVisitors: number = counterAdults + counterKids + counterBabies;

	const applyValueList = () => {

		if (sumVisitors === 1
		) {
			setValueList(`${sumVisitors} гость`);
		} else if (
			sumVisitors >= 2 && sumVisitors <= 4
		) {
			setValueList(`${sumVisitors} гостя`);
		} else if (
			sumVisitors >= 5 && sumVisitors <= 20
		) {
			setValueList(`${sumVisitors} гостей`);
		}
		setToggle(false);
	}

	return (

		<div className={styles.dropDownList}>
			<div
				className={styles.subTitle}
			>
				<div className={styles.value}>
					{valueList}
				</div>
				<div className={styles.btnTick}>
					<BtnTick
						onClick={showHideOptions}
						type={'button'}
						variant={BtnTickVariants.Tick}
					/>
				</div>
			</div>
			<div
				className={toggle ? styles.showList : styles.hideList}
			>
				<Counter setValue={setCounterAdults} value={counterAdults} name='взрослые' />
				<Counter setValue={setCounterKids} value={counterKids} name='дети' />
				<Counter setValue={setCounterBabies} value={counterBabies} name='младенцы' />
				<div
					className={styles.dropDownFooter}
				>
					{
						sumVisitors > 0 ? <div className={styles.resetBtn}>
							<Button type='button' name='очистить' variant={BtnVariants.BtnText} onClick={resetCounters} />
						</div>
							: null
					}
					<div className={styles.applyBtn}>
						<Button type='button' name='применить' variant={BtnVariants.BtnText} onClick={applyValueList} />
					</div>
				</div>
			</div>
		</div>
	)
}
