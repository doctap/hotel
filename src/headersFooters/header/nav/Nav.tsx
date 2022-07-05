import React from 'react';
import LinkNav from '../linkNav/LinkNav';
import styles from './Nav.module.scss';

interface INav {
	serviceLinks: JSX.Element[];
	agreementLinks: JSX.Element[];
	links: ILink;
}
interface ILink {
	linkName: string;
	linkId: number;
}

export default function Nav(props: INav) {
	return (
		<nav className={styles.nav}>

			<LinkNav id={1} name='qwe' onClick={(id) => console.log(id)} />
			<LinkNav id={2} name='asd' onClick={(id) => console.log(id)} />
			<LinkNav id={3} name='zxc' onClick={(id) => console.log(id)} />
		</nav>
	)
}
