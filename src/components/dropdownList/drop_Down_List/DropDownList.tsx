import React, { useState } from 'react';
import styles from './DropDownList.module.scss';
import Counter from '../counter/Counter';
import { BtnTick, BtnTickVariants, BtnVariants, Button } from '../../buttons';

interface IDropDownList {
	name: string;
	getQtyVisitors: (visitors: IVisitors) => void;
}

export interface IVisitors {
	counterAdults: number;
	counterKids: number;
	counterBabies: number;
}

export default function DropDownList(props: IDropDownList) {

	const [counterAdults, setCounterAdults] = useState(0);
	const [counterKids, setCounterKids] = useState(0);
	const [counterBabies, setCounterBabies] = useState(0);
	const [showHideList, setShowHideList] = useState(false);
	const [valueList, setValueList] = useState(props.name);

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

		props.getQtyVisitors({
			counterAdults,
			counterBabies,
			counterKids,
		});
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
