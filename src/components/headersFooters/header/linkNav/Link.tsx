import React from 'react';
import styles from './Link.module.scss';

interface ILink {
	name: string;
	id: string;
	onClick: (id: string) => void;
	fontWeight: 'normal' | 'bold';
}

export default function Link(props: ILink) {

	const getId = (event: React.MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault();
		event.stopPropagation();

		props.onClick(props.id)
	};

	return (
		<a
			className={props.fontWeight === 'bold' ? `${styles.bold}` : `${styles.normal}`}
			onClick={getId}
			href='.'
		>
			{props.name}
		</a>
	)
}
