import React from 'react';
import styles from './App.module.scss';
import CheckboxToggle from './components/checkbox/checkboxToggle/CheckboxToggle';
import CheckboxRadio from './components/checkbox/checkboxRadio/CheckboxRadio';
import LongSubmit from './components/buttons/submit/LongSubmit';
import ClickMe from './components/buttons/btns/Button';
import DropDownList from './components/dropdownList/drop_Down_List/DropDownList';
import Title from './components/titles/title/SubTitle';
import LikeBtn from './components/buttons/btnLike/LikeBtn';
import { BtnVariants } from './components/buttons/btns/ButtonInterface';
import ListCheckbox from './components/checkbox/listCheckbox/ListCheckbox';
import RateStars from './components/rateStars/RateStars';
import SubscriptionEmail from './components/inputs/subscriptionEmail/SubscriptionEmail';
import InputText from './components/inputs/InputEmail/InputText';
import CheckBoxItem from './components/checkbox/chtckBoxItem/CheckBoxItem';


function App() {
	return (
		<form className={styles.App}>

			<div className={styles.column}>

				<div className={styles.text_field}>
					<Title name={'text field'} />
					<InputText type='email' placeholder={'Email'} />
				</div>

				<div className={styles.masked_text_field}>
					<Title name={'masked text field'} />
					<InputText type='text' placeholder='ДД.ММ.ГГГГ' />
				</div>



				<div className={styles.expandable_checkbox_list}>
					<ListCheckbox name='expandable checkbox list' />
				</div>

				<div className={styles.subscription_text_field}>
					<Title name={'subscription text field'} />
					<SubscriptionEmail />
				</div>

			</div>

			<div className={styles.column}>

				<Title name='checkbox button' />
				<ul className={styles.ListCheckBoxTick}>
					<li>
						<CheckBoxItem name='Можно курить' />
					</li>
					<li>
						<CheckBoxItem name='Можно с питомцами' />
					</li>
					<li>
						<CheckBoxItem name='Можно приглосить гостей (до 10 человек)' />
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

				<div className={styles.drop_down_list}>
					<Title name='dropdown' />
					<DropDownList name='Сколько гостей' />
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
