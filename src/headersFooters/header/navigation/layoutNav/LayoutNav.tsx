import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './LayoutNav.module.scss';

export default function LayoutNav() {

	return (
		<>
			<nav className={styles.nav}>
				<div className={styles.link1}>
					<Link to='/aboutUs'>О нас</Link>
				</div>
				<div className={styles.link2}>
					<Link to='/service'>Услуги</Link>
				</div>
				<div className={styles.link3}>
					<Link to='/vacancy'>Вакансии</Link>
				</div>
				<div className={styles.link4}>
					<Link to='/news'>Новости</Link>
				</div>
				<div className={styles.link5}>
					<Link to='/agreements'>Соглашения</Link>
				</div>
			</nav>

			<Outlet />
		</>
	)
}
