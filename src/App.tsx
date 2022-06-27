import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Components from './pages/components/Components';
import Forms from './pages/forms/Forms';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import HeadersFooters from './pages/headersFooters/HeadersFooters';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="components" element={<Components />} />
					<Route path="forms" element={<Forms />} />
					<Route path="headersFooters" element={<HeadersFooters />} />
					<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}