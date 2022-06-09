import React from 'react';
import styles from './App.module.scss';
import PageComponents from './components/PageComponents/PageComponents';
import PageForms from './forms/PageForms/PageForms';



function App() {
	return (
		<div>
			<PageForms />
			<PageComponents />
		</div>
	);
}

export default App;
