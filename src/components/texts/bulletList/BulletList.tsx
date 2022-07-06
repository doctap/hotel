import React from 'react';
import styles from './BulletList.module.scss';

interface IBulletList {
	items: string[];
}

export default function BulletList(props: IBulletList) {
	return (
		<ul className={styles.bulletList}>
			{props.items.map(x => <li>{x}</li>)}
		</ul>
	)
}
