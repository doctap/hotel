import React, { useState } from 'react';
import { ILikeBtn } from './LikeBtnInterface';
import styles from './LikeBtn.module.scss';

export default function LikeBtn(props: ILikeBtn) {

	const [like, setLike] = useState(props.value);
	const [toggle, setToggle] = useState(true)
	
	const plusLike = () => {
		if (toggle) {
			setLike(like + 1);
			setToggle(!toggle)
		}else {
			setLike(like - 1);
			setToggle(!toggle)
		}
	}
	
	return (
		<button
			type='button'
			onClick={plusLike}
			className={ toggle ? styles.LikeBtn_var1 : styles.LikeBtn_var2}
		>
			<div className={styles.img}></div>
			<div className={styles.num}>
				{like}
			</div>
		</button>
	)

}