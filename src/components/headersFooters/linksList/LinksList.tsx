import React from 'react';
import { IPage } from '../../../types';
import SubTitle from '../../titles/subTitle/SubTitle';
import Link from '../header/linkNav/Link';
import styles from './LinksList.module.scss';

interface ILinksList {
	pages: IPage[];
	title: string;
}

export default function LinksList(props: ILinksList) {
	return (
		<div className={styles.listColumn}>
			<div className={styles.title}>
				<SubTitle name={props.title} />
			</div>
			<ul>
				{props.pages.map(page =>
					<li className={styles.item}>
						<Link
							fontWeight='normal'
							key={page.pageId}
							id={page.pageId}
							name={page.pageName}
							onClick={(id) => console.log(id)}
						/>
					</li>
				)}
			</ul>
		</div>
	)
}
