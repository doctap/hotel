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
	const [showHideList, setShowHideList] = useState<boolean>(false);
	const [valueList, setValueList] = useState<string>(props.name);

	const resetCounters = () => {
		setCounterAdults(0);
		setCounterKids(0);
		setCounterBabies(0);
		setValueList(props.name);
	}

	const showHideOptions = () => {
		setShowHideList(!showHideList);
	}

	const sumVisitors: number = counterAdults + counterKids + counterBabies;

	const visitors = [' гостей', ' гость', ' гостя', ' гостя', ' гостя', ' гостей', ' гостей', ' гостей', ' гостей', ' гостей']

	const applyValueList = () => {
		let word = visitors[sumVisitors % 10];
		word = sumVisitors > 10 && sumVisitors < 20 ? ' гостей' : word;
		setValueList(`${sumVisitors}` + word);

		setShowHideList(false);
	}

	return (

		<div className={styles.dropDownList}>
			<div
				className={showHideList ? `${styles.subTitle_bottomBorderRadius0} ${styles.subTitle}` : styles.subTitle}
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
				className={showHideList ? styles.showList : styles.hideList}
			>
				<div className={styles.counters}>
					<Counter setValue={setCounterAdults} value={counterAdults} name='взрослые' />
					<Counter setValue={setCounterKids} value={counterKids} name='дети' />
					<Counter setValue={setCounterBabies} value={counterBabies} name='младенцы' />
				</div>
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
						<Button
							type='button'
							name='применить'
							variant={BtnVariants.BtnText}
							onClick={applyValueList}
							disabled={sumVisitors === 0 ? true : false}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
