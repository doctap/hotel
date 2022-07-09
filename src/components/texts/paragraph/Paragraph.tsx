import React from 'react';
import styles from './Paragraph.module.scss';

interface IParagraph {
	children: React.ReactNode;
}

export default function Paragraph(props: IParagraph) {
  return (
	 <p className={styles.para}>
		 {props.children}
	 </p>
  )
}
