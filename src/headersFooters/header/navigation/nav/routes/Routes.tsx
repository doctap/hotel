import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NoPage from '../../../../../pages/NoPage'
import LayoutNav from '../../layoutNav/LayoutNav'
import AboutUs from '../pages/AboutUs'
import Agreements from '../pages/Agreements'
import HomeNav from '../pages/HomeNav'
import News from '../pages/News'
import Service from '../pages/Service'
import Vacancy from '../pages/Vacancy'

export default function Nav() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={< LayoutNav />}>
					<Route index element={<HomeNav />} />
					<Route path="aboutUs" element={<AboutUs />} />
					<Route path="service" element={<Service />} />
					<Route path="vacancy" element={<Vacancy />} />
					<Route path="news" element={<News />} />
					<Route path="agreements" element={<Agreements />} />
					<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
