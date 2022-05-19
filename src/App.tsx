import React from 'react';
import styles from './App.module.scss';
import CheckboxToggle from './components/checkbox/checkboxToggle/CheckboxToggle';
import CheckboxRadio from './components/checkbox/checkboxRadio/CheckboxRadio';
import Input from './components/inputs/Input';
import Select from './components/selects/Select';
import LongSubmit from './components/buttons/submit/LongSubmit';
import ClickMe from './components/buttons/btns/ClickMe';
import { BtnVariants } from './components/Interfaces/ButtonInterfaces';
import CheckBoxTick from './components/checkbox/chtckboxTick/CheckBoxTick';
import AddOne from './components/dropdownList/Counter';
import Counter from './components/dropdownList/Counter';


function App() {
	return (
		<form className={styles.App}>

			<div className={styles.column}>
				<Input type='text' name={'TEXT FIELD'} placeholder={'Email'} />
				<Select />

				<form>
					
				</form>
				<Counter name={''} count={0}/>

			</div>

			<div className={styles.column}>
				<ul className={styles.ListCheckBoxTick}>
					<li>
						<CheckBoxTick type='checkbox' name={'Можно курить'} />
					</li>
					<li>
						<CheckBoxTick type='checkbox' name={'Можно с питомцами'} />
					</li>
					<li>
						<CheckBoxTick type='checkbox' name={'Можно приглосить гостей (до 10 человек)'} />
					</li>
				</ul>

				<CheckboxToggle type='checkbox' name={'Получать спецпредложения'} />
				<CheckboxRadio type='radio' name='gender' />
			</div>

			<div className={styles.column}>
				<LongSubmit name={'ПЕРЕЙТИ К ОПЛАТЕ'} type='submit' variant={BtnVariants.Submit} />
				<div className={styles.BtnsClickMe}>
					<ClickMe type='button' name={'CLICK ME'} variant={BtnVariants.Primary} />
					<ClickMe type='button' name={'CLICK ME'} variant={BtnVariants.Primary} disabled={true} />
					<ClickMe type='button' name={'CLICK ME'} variant={BtnVariants.Border} />
					<ClickMe type='button' name={'CLICK ME'} variant={BtnVariants.Border} disabled={true} />
					<ClickMe type='button' name={'CLICK ME'} variant={BtnVariants.BtnText} />
					<ClickMe type='button' name={'CLICK ME'} variant={BtnVariants.BtnText} disabled={true} />
				</div>

			</div>


		</form>
	);
}

export default App;
