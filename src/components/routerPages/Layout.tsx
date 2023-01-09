import React from 'react';
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
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
					<li>
						<Link to="/roomDirectory">Room directory</Link>
					</li>
				</ul>
			</nav>

			<Outlet />
		</>
	)
}
