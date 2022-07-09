import React from 'react';
import { IPage } from '../../../commonInterfaces/RFCinterfaces';
import Select from '../../select/Select';
import Link from '../linkNav/Link';
import styles from './Nav.module.scss';

interface INav {
	pages: IPage[];
}

export default function Nav(props: INav) {

	return (
		<nav className={styles.nav}>
			<Link
				id={props.pages[0].pageId}
				name={props.pages[0].pageName}
				fontWeight='bold'
				onClick={(id) => console.log(id)}
			/>
			<Select
				name='Услуги'
				pagesItem={props.pages.slice(1, 4)}
			/>
			<Link
				id={props.pages[4].pageId}
				name={props.pages[4].pageName}
				fontWeight='normal'
				onClick={(id) => console.log(id)}
			/>
			<Link
				id={props.pages[5].pageId}
				name={props.pages[5].pageName}
				fontWeight='normal'
				onClick={(id) => console.log(id)}
			/>
			<Select
				name='Соглашения'
				pagesItem={props.pages.slice(6, 11)}
			/>
		</nav>
	)
}
