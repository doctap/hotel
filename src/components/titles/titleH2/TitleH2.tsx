import React from 'react';
import styles from './TitleH2.module.scss';

interface ITitleH2 {
	value: string | number;
}

export default function TitleH2(props: ITitleH2) {
  return (
	 <div className={styles.mainTitle}>
		 {props.value}
	 </div>
  )
}
