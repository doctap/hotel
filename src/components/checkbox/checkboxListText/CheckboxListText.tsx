import React from 'react';
import uniqId from 'uniqid'
import CheckBoxItem from '../chtckBoxItem/CheckBoxItem';
import styles from './CheckboxListText.module.scss';

interface ICheckboxListText {
	items: string[];
}

export default function CheckboxListText(props: ICheckboxListText) {
  return (
	 <ul className={styles.ListCheckBox}>
		{props.items.map(str => <li key={uniqId()}><CheckBoxItem name={str} /></li>)}
	 </ul>
  )
}
