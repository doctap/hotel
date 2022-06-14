import React from 'react';
import CheckBoxItem from '../chtckBoxItem/CheckBoxItem';
import styles from './CheckboxList.module.scss';

interface ICheckboxList {
	items: string[];
}

export default function CheckboxList(props: ICheckboxList) {
  return (
	 <ul className={styles.ListCheckBox}>
		{props.items.map(str => <li><CheckBoxItem name={str} /></li>)}
	 </ul>
  )
}
