import React from 'react';
import styles from './Paragraph.module.scss';

interface IParagraph {
	children: React.ReactNode;
	styles?: React.HTMLProps<HTMLParagraphElement>;
}

export default function Paragraph(props: IParagraph) {
	return (
		<p
			style={props.styles}
			className={styles.para}>
			{props.children}
		</p>
	)
}
