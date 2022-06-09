import React from 'react';
import { ISubTitle } from './InterfaceSubTitle';
import styles from './SubTitle.module.scss';

export default function SubTitle(props: ISubTitle) {
	return (
		<div className={styles.Title}>
			{props.name}
		</div>
	)
}
