import React from 'react';
import InputText, { InputVariants } from '../inputs/Input/InputFieldText';
import styles from './DateCalendar.module.scss';
import { BtnTick, BtnTickVariants } from '../buttons';

interface IDateCalendar {
	getDate: (date: Date) => void;
}

export default function DateCalendar(props: IDateCalendar) {

	function sendDate() {
		props.getDate(new Date());
		console.log('DATE Sended');
	}

	return (
		<div className={styles.container}>
			
			<InputText
				// value={} ....добавить поле (разобраться с типами данных)
				type='text'
				placeholder='ДД.ММ.ГГГГ'
				variant={InputVariants.InputBtn}
			/>
			<div className={styles.btn}>
				<BtnTick
					type='button'
					variant={BtnTickVariants.Tick}
					onClick={sendDate}
				/>
			</div>
		</div>
	)
}
