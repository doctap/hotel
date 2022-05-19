import React from 'react';
import { IBtnDropdownCounter } from './DropDawnInterface';
import styles from './DropdownBtn.module.scss';

export default function DropdownBtn(props: IBtnDropdownCounter) {
  return (
	 <button
	 className={styles.DropBtn}
	 >
		{props.name}
	 </button>
  )
}
