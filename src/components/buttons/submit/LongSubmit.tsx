import React from 'react';
import styles from './LongSubmit.module.scss';

export default function LongSubmit(props: IButtonProps) {
	return (
		<button className={styles.Btn}>
			{props.name}
			<span className={styles.image}/>
		</button>
	)
}
