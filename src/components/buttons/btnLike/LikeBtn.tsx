import React, { useState } from 'react';
import { ILikeBtn } from './LikeBtnInterface';

export default function LikeBtn(props: ILikeBtn) {

	const [like, setLike] = useState(0);

	const plusLike = () => {
		setLike(like + 1)
	}

	return (
		<button
			type={'button'}
			onClick={plusLike}
		>
			{like}
		</button>
	)
}
