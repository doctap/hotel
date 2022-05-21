import React, { useState } from 'react';
import { IDropDownList } from './DropDownInterface';
import Counter from '../counter/Counter';
import styles from './DropDownList.module.scss';
import BtnTick from '../../buttons/arrowTickBtns/BtnArrowTick';
import Title from '../../titles/title/SubTitle';
import ClickMe from '../../buttons/btns/Button';
import { BtnTickVariants } from '../../buttons/arrowTickBtns/BtnArrowTickInterface';
import { BtnVariants } from '../../buttons/btns/ButtonInterface';



export default function DropDownList(props: IDropDownList) {

	const [counterValue1, setCounterValue1] = useState(0);
	const [counterValue2, setCounterValue2] = useState(0);
	const [counterValue3, setCounterValue3] = useState(0);
	
	const resetCounters = () => {
		setCounterValue1(0);
		setCounterValue2(0);
		setCounterValue3(0);
	}


	return (
		<div className={styles.wrapper}>

			<Title name={'DROPDOWN'} />

			<div className={styles.dropDownList}>

				<div className={styles.subTitle}>
					<span className={styles.value}>
						{props.name}
					</span>
					<BtnTick
						// onClick={onClick}
						type={'button'}
						variant={BtnTickVariants.Tick}
					/>
				</div>

				<div className={styles.list}>
					<Counter setValue={setCounterValue1} value={counterValue1} name={'ВЗРОСЛЫЕ'} />
					<Counter setValue={setCounterValue2} value={counterValue2} name={'ДЕТИ'} />
					<Counter setValue={setCounterValue3} value={counterValue3} name={'МЛАДЕНЦЫ'} />
					<div className={styles.dropDownFooter}>
						<ClickMe type='button' name={'ОЧИСТИТЬ'} variant={BtnVariants.BtnText} onClick={resetCounters} />
						<ClickMe type='button' name={'ПРИМЕНИТЬ'} variant={BtnVariants.BtnText} />
					</div>
				</div>

			</div>
		</div>
	)
}
