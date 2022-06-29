import React from 'react';
import styles from './UserAvatar.module.scss';
import userImg from '../../../../public/AvatarMale.png'

interface IUserAvatar {
	name: string;
	wasWritten: Date;
}

export default function UserAvatar(props: IUserAvatar) {

	const days = [' дней', ' день', ' дня', ' дня', 'дня', ' дней', ' дней', ' дней', ' дней', ' дней'];

	const getDate = (wasWritten: Date): string => {
		const nowDate = new Date();
		let dayDifference = nowDate.getDate() - wasWritten.getDate();
		if (
			wasWritten.getMonth() === nowDate.getMonth() &&
			wasWritten.getFullYear() === nowDate.getFullYear()
		) {
			let word = days[dayDifference % 10];

			return (`${nowDate.getDate() - wasWritten.getDate()} 
			${dayDifference > 10 && dayDifference < 20 ? ' дней' : word}  назад`);
		}
		return `${wasWritten.getDate()}.${'0' + (wasWritten.getMonth() + 1)}.${wasWritten.getFullYear()}`;
	}

	return (
		<div
			className={styles.wrapper}
		>
			<img
				src={userImg}
				alt="avatar"
				className={styles.avatar}
			/>
			<div
				className={styles.body}
			>
				<div className={styles.name}>
					{props.name}
				</div>
				<div className={styles.wasLastOnline}>
					{getDate(props.wasWritten)}
				</div>
			</div>
		</div>
	)
}
