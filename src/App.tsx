import React from 'react';
import styles from './App.module.scss';
import Checkbox from './components/checkbox/checkboxToggle/CheckboxToggle';
import CheckboxRadio from './components/checkbox/checkboxRadio/CheckboxRadio';
import Input from './components/inputs/Input';
import Select from './components/selects/Select';

function App() {
	return (
		<form className={styles.App}>

			<div className={styles.column}>
				<Input type='text' name={'TEXT FIELD'} placeholder={'Email'} />
				<Select />

			</div>

			<div className={styles.column}>
				<Checkbox type='checkbox' name={'Получать спецпредложения'} />
				<CheckboxRadio type='radio' name='gender' />
			</div>

			<div className={styles.column}></div>


		</form>
	);
}

export default App;
