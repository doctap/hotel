import React from 'react';
import styles from './BulletList.module.scss';

interface IBulletList {
	children: React.ReactNode;
}

export default function BulletList(props: IBulletList) {
	return (
		<ul className={styles.bulletList}>
			{props.children}
		</ul>
	)
}
