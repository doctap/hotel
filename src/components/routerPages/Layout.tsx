import React from 'react';
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
	return (
		<>
			<nav style={{width: '100%'}}>
				<ul>
					<li>
						<Link to="/home">Home</Link>
					</li>
					<li>
						<Link to="/components">Components</Link>
					</li>
					<li>
						<Link to="/forms">Forms</Link>
					</li>
					<li>
						<Link to="/headersFooters">Headers & Footers</Link>
					</li>
					<li>
						<Link to="/landingPage">Landing Page</Link>
					</li>
				</ul>
			</nav>

			<Outlet />
		</>
	)
}
