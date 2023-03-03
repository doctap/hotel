import React from 'react';
import Paragraph from '../texts/paragraph/Paragraph';
import UserAvatar from '../userUI/userAvatar/UserAvatar';
import styles from './UserFeedback.module.scss';
import { LikeBtn } from '../buttons';

interface IUserFeedback {
	userName: string;
	wasWritten: Date;
	userFeedback: string;
	likeValue: number;
	getValueLike: (num: number) => void;
}

export default function UserFeedback(props: IUserFeedback) {

	return (
		<div className={styles.UserFeedback}>
			<UserAvatar
				name={props.userName}
				wasWritten={props.wasWritten}
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
