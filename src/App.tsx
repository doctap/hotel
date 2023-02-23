import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { 
	Components, 
	Forms, 
	HeadersFooters, 
	Home, 
	LandingPage, 
	Layout, 
	NoPage 
} from './components/pages';

export default function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />} />
			<Route path='/home' element={<Home />} />
			<Route path="/components" element={<Components />} />
			<Route path="/forms" element={<Forms />} />
			<Route path="/headersFooters" element={<HeadersFooters />} />
			<Route path="/landingPage" element={<LandingPage />} />
			<Route path="*" element={<NoPage />} />
		</Routes>
	);
}