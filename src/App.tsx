import React from 'react';
import styles from './App.module.scss';
import CheckboxToggle from './components/checkbox/checkboxToggle/CheckboxToggle';
import CheckboxRadio from './components/checkbox/checkboxRadio/CheckboxRadio';
import LongSubmit from './components/buttons/submit/LongSubmit';
import ClickMe from './components/buttons/btns/Button';
import CheckBoxTick from './components/checkbox/chtckboxTick/CheckBoxTick';
import DropDownList from './components/dropdownList/drop_Down_List/DropDownList';
import Title from './components/titles/title/SubTitle';
import LikeBtn from './components/buttons/btnLike/LikeBtn';
import { BtnVariants } from './components/buttons/btns/ButtonInterface';
import Input from './components/inputs/InputEmail/Input';
import ListCheckbox from './components/checkbox/listCheckbox/ListCheckbox';
import RateStars from './components/rateStars/RateStars';


function App() {
	return (
		<form className={styles.App}>


			<div className={styles.column}>
				<Input type='email' placeholder={'Email'} />


				<DropDownList name='Сколько гостей' />

				<ListCheckbox />





			</div>

			<div className={styles.column}>

				<Title name='checkbox button' />
				<ul className={styles.ListCheckBoxTick}>
					<li>
						<CheckBoxTick type='checkbox' name='Можно курить' />
					</li>
					<li>
						<CheckBoxTick type='checkbox' name='Можно с питомцами' />
					</li>
					<li>
						<CheckBoxTick type='checkbox' name='Можно приглосить гостей (до 10 человек)' />
					</li>
				</ul>
				
				<div>
				<Title name='toggle' />
				<CheckboxToggle type='checkbox' name='Получать спецпредложения' />
				</div>

				<div>
					<Title name='radio buttons' />
					<CheckboxRadio type='radio' name='gender' />
				</div>


				<div className={styles.like}>
					<Title name='button like' />
					<LikeBtn value={17} />
				</div>

				<div className={styles.blockStars}>
					<Title name='rate stars' />
					<div className={styles.stars}>
						<RateStars value={3} />
						<RateStars value={0} />
					</div>
				</div>

			</div>

			<div className={styles.column}>
				<div>
					<Title name='buttons' />
					<LongSubmit name='перейти к оплате' type='submit' />
					<div className={styles.BtnsClickMe}>
						<ClickMe type='button' name='click me' variant={BtnVariants.Primary} />
						<ClickMe type='button' name='click me' variant={BtnVariants.Primary} disabled={true} />
						<ClickMe type='button' name='click me' variant={BtnVariants.Border} />
						<ClickMe type='button' name='click me' variant={BtnVariants.Border} disabled={true} />
						<ClickMe type='button' name='click me' variant={BtnVariants.BtnText} />
						<ClickMe type='button' name='click me' variant={BtnVariants.BtnText} disabled={true} />
					</div>
				</div>

			</div>


		</form>
	);
}

export default App;
