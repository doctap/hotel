import React from 'react';
import styles from './Link.module.scss';

interface ILink {
	name: string;
	id: number;
	onClick: (id: number) => void;
	fontWeight?: 'normal' | 'bold';
}

export default function Link(props: ILink) {

	const getModel = (style: string | undefined): string => {
		
		if (style === undefined) return `${styles.normal}`;
		if (style === 'normal') return `${styles.normal}`;

		return `${styles.bold}`;
	}

	const getId = () => props.onClick(props.id);

	return (
		<a
			className={getModel(props.fontWeight)}
			onClick={getId}
		>
			{props.name}
		</a>
	)
}
