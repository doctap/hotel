import React from 'react';
import LikeBtn from '../buttons/btnLike/LikeBtn';
import Paragraph from '../texts/paragraph/Paragraph';
import UserAvatar from '../userUI/userAvatar/UserAvatar';
import styles from './UserFeedback.module.scss';

export default function UserFeedback() {
	return (
		<div className={styles.UserFeedback}>
			<UserAvatar
				name='Мурад Сарафанов'
				wasLastOnline='5 дней назад'
			/>

			<div className={styles.body}>
				<div className={styles.btnLike}>
					<LikeBtn value={14} onClick={x => console.log(x)} />
				</div>
				<Paragraph>
					Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий.
					И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей.
				</Paragraph>
			</div>
		</div>
	)
}
