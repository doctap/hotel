import React, { Suspense } from 'react';
import styles from './App.module.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/routerPages/Layout';
import Home from './components/routerPages/Home';
import Components from './components/routerPages/components/Components';
import HeadersFooters from './components/routerPages/headersFooters/HeadersFooters';
import NoPage from './components/routerPages/NoPage';
import LandingPage from './components/webSitePages/landingPage/LandingPage';
import Forms from './components/routerPages/forms/Forms';

export default function App() {
	return (
		<BrowserRouter >
			<Routes>
				<Route path='/' element={<Layout />} />
				<Route path='/home' element={<Home />} />
				<Route path="/components" element={<Components />} />
				<Route path="/forms" element={<Forms />} />
				<Route path="/headersFooters" element={<HeadersFooters />} />
				<Route path="/landingPage" element={<LandingPage />} />
				<Route path="*" element={<NoPage />} />
			</Routes>
		</BrowserRouter>
	);
}