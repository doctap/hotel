import React, {useState} from 'react';
import Button from '../../buttons/btns/Button';
import { BtnVariants } from '../../buttons/btns/ButtonInterface';
import Counter from '../counter/Counter';
import { IOptionsDDList } from './InterfacesOptionsDDList';
import styles from './OptionsDDList.module.scss';

export default function OptionsDDList(props: IOptionsDDList) {

	

	const [counterAdults, setCounterAdults] = useState(0);
	const [counterKids, setCounterKids] = useState(0);
	const [counterBabies, setCounterBabies] = useState(0);

	const resetCounters = () => {
		setCounterAdults(0);
		setCounterKids(0);
		setCounterBabies(0);
	}

	return (
		<div className={ props.showHide ? styles.showList : styles.hideList}>
			<Counter setValue={setCounterAdults} value={counterAdults} name='взрослые' />
			<Counter setValue={setCounterKids} value={counterKids} name='дети' />
			<Counter setValue={setCounterBabies} value={counterBabies} name='младенцы' />
			<div className={styles.dropDownFooter}>
				<Button type='button' name='очистить' variant={BtnVariants.BtnText} onClick={resetCounters} />
				<Button type='button' name='применить' variant={BtnVariants.BtnText} />
			</div>
		</div>
	)
}
