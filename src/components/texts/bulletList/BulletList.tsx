import React from 'react';
import uniqId from 'uniqid';
import ellipseImg from '../../../../public/Ellipse.svg';
import styles from './BulletList.module.scss';

interface IBulletList {
	items: string[];
}

export default function BulletList(props: IBulletList) {
	return (
		<>
			<div className={styles.div}></div>
			<ul className={styles.bulletList}>
				{props.items.map(x =>
					<li
						key={uniqId()}
						className={styles.li}
					>
						<img src={ellipseImg} alt="." className={styles.ellipseImg} />
						<div>
							{x}
						</div>
					</li>
				)}
			</ul>
		</>

	)
}
