import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/routerPages/Layout';
import Home from './components/routerPages/Home';
import Components from './components/routerPages/components/Components';
import HeadersFooters from './components/routerPages/headersFooters/HeadersFooters';
import NoPage from './components/routerPages/NoPage';
import LandingPage from './components/webSitePages/landingPage/LandingPage';
import RoomDirectory from './components/webSitePages/roomDirectory/RoomDirectory';
// import Forms from './pages/forms/Forms';
const Forms = React.lazy(() => import('./components/routerPages/forms/Forms'));

export default function App() {
	return (
		<BrowserRouter >
			<Routes>
				<Route path={`${process.env.REACT_APP_BUILD}/`} element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/components" element={<Components />} />
					<Route path="/forms" element={<Suspense fallback={<div>Loading</div>}><Forms /></Suspense>} />
					<Route path="/headersFooters" element={<HeadersFooters />} />
					<Route path="/landingPage" element={<LandingPage />} />
					<Route path="/roomDirectory" element={<RoomDirectory />} />
					<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}