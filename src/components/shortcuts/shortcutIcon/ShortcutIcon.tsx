import React from 'react';
import styles from './ShortcutIcon.module.scss';

interface IShortcutIcon {
	name: string;
	variantIcon: string;
	children: React.ReactNode;
}

export default function ShortcutIcon(props: IShortcutIcon) {
	return (
		<div
			className={styles.wrapper}
		>
			<div className={styles.icon}>
				{props.variantIcon}
			</div>
			<div
				className={styles.body}
			>
				<div className={styles.title}>
					{props.name}
				</div>
				<div className={styles.text}>
					{props.children}
				</div>
			</div>
		</div>
	)
}
