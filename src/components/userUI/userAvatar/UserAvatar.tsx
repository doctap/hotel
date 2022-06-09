import React from 'react';
import styles from './UserAvatar.module.scss';

interface IUserAvatar {
	name: string;
	wasLastOnline: number;
}

export default function UserAvatar(props: IUserAvatar) {
	return (
		<div
			className={styles.wrapper}
		>
			<div className={styles.avatar}>
			</div>
			<div
				className={styles.body}
			>
				<div className={styles.name}>
					{props.name}
				</div>
				<div className={styles.wasLastOnline}>
					{props.wasLastOnline}
				</div>
			</div>
		</div>
	)
}
