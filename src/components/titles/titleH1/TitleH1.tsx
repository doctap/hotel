import React from 'react';
import styles from './TitleH1.module.scss';

interface ITitleH1 {
	value: string | number;
}

export default function TitleH1(props: ITitleH1) {
  return (
	 <div className={styles.mainTitle}>
		 {props.value}
	 </div>
  )
}
