import React from 'react';
import uniqId from 'uniqid';
import RichCheckbox from '../checkboxRich/RichCheckbox';
import styles from './CheckboxRichList.module.scss';

interface ICheckboxRichList {
	items: itemCheckboxRich[];
}

export type itemCheckboxRich = {
	title: string;
	text: string;
}

export default function CheckboxRichList(props: ICheckboxRichList) {
	return (
		<div className={styles.list}>
			{props.items.map(it =>
				<div key={uniqId()}>
					<RichCheckbox title={it.title} text={it.text} />
				</div>
			)}
		</div>
	)
}
