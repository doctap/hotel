import React from 'react';
import styles from './LinkNav.module.scss';

interface ILinkNav {
	name: string;
	id: number;
	onClick: (id: number) => void;
}

export default function LinkNav(props: ILinkNav) {

	function getId() {
		props.onClick(props.id);
	}

	return (
		<div
			className={styles.LinkNav}
			onClick={getId}
		>
			{props.name}
		</div>
	)
}
