import React from 'react';
import styles from './ShortcutIcon.module.scss';

interface IShortcutIcon {
	title: string;
	variantIcon: string;
	text: string;
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
					{props.title}
				</div>
				<div className={styles.text}>
					{props.text}
				</div>
			</div>
		</div>
	)
}
