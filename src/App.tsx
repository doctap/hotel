import React, { Suspense } from 'react';
import styles from './App.module.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Components from './pages/components/Components';
// import Forms from './pages/forms/Forms';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import HeadersFooters from './pages/headersFooters/HeadersFooters';
const Forms = React.lazy(() => import('./pages/forms/Forms'));

export default function App() {
	return (
		<BrowserRouter >
			<Routes>
				<Route path={`${process.env.REACT_APP_BUILD}`} element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/components" element={<Components />} />
					<Route path="/forms" element={<Suspense fallback={<div>Loading</div>}><Forms /></Suspense>} />
					<Route path="/headersFooters" element={<HeadersFooters />} />
					<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}