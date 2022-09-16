import React from 'react';
import uniqId from 'uniqid';
import RichCheckbox from '../checkboxRich/RichCheckbox';
import styles from './CheckboxListTitleText.module.scss';

interface ICheckboxListTitleText {
	items: itemCheckboxRich[];
}

export type itemCheckboxRich = {
	title: string;
	text: string;
}

export default function CheckboxListTitleText(props: ICheckboxListTitleText) {
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
