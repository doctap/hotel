import React from 'react';
import styles from './TitleH1.module.scss';

interface ITitleH1 {
	children: React.ReactNode;
}

export default function TitleH1(props: ITitleH1) {
  return (
	 <div className={styles.mainTitle}>
		 {props.children}
	 </div>
  )
}
