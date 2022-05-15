import React from 'react';
import styles from './App.module.scss';
import Checkbox from './components/checkbox/checkboxToggle/CheckboxToogle';
import Input from './components/inputs/Input';
import Select from './components/selects/Select';

function App() {
	return (
		<form className={styles.App}>

			<div className={styles.column}>
				<Input type='text' name={'TEXT FIELD'} placeholder={'Email'} />
				<Select />
				<Checkbox type='checkbox' name={'Получать спецпредложения'}/>

			</div> 

		</form>
	);
}

export default App;
