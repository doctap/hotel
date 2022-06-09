import React from 'react';
import LikeBtn from '../buttons/btnLike/LikeBtn';
import Paragraph from '../texts/paragraph/Paragraph';
import UserAvatar from '../userUI/userAvatar/UserAvatar';
import styles from './UserFeedback.module.scss';

interface IUserFeedback {
	userName: string;
	// dateWasLastOnline: Date;
	userFeedback: string;
	likeValue: number;
	getValueLike: (num: number) => void;
}

export default function UserFeedback(props: IUserFeedback) {

	// const getDate = () => {
	// 	let nowDate = props.dateWasLastOnline;
	// 	return new Date(nowDate)
	// }

	return (
		<div className={styles.UserFeedback}>
			<UserAvatar
				name={props.userName}
				wasLastOnline={5}
			/>
			{/* узнать у санька как лучше сделать "dateWasLastOnline" */}

			<div className={styles.body}>
				<div className={styles.btnLike}>
					<LikeBtn value={props.likeValue} onClick={props.getValueLike} />
				</div>
				<Paragraph>
					{props.userFeedback}
				</Paragraph>
			</div>
		</div>
	)
}
