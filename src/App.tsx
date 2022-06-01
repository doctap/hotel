import React from 'react';
import styles from './App.module.scss';
import CheckboxToggle from './components/checkbox/checkboxToggle/CheckboxToggle';
import CheckboxRadio from './components/checkbox/checkboxRadio/CheckboxRadio';
import LongSubmit from './components/buttons/submit/LongSubmit';
import DropDownList from './components/dropdownList/drop_Down_List/DropDownList';
import Title from './components/titles/title/SubTitle';
import LikeBtn from './components/buttons/btnLike/LikeBtn';
import { BtnVariants } from './components/buttons/btns/ButtonInterface';
import ListCheckbox from './components/checkbox/listCheckbox/ListCheckbox';
import RateStars from './components/rateStars/RateStars';
import SubscriptionEmail from './components/inputs/subscriptionEmail/SubscriptionEmail';
import InputText from './components/inputs/InputEmail/InputText';
import CheckBoxItem from './components/checkbox/chtckBoxItem/CheckBoxItem';
import RichCheckbox from './components/checkbox/checkboxRich/RichCheckbox';
import BulletList from './components/texts/bulletList/BulletList';
import Button from './components/buttons/btns/Button';
import ShortcutIcon from './components/shortcuts/shortcutIcon/ShortcutIcon';
import UserFeedback from './components/userFeedback/UserFeedback';


function App() {
	return (
		<div className={styles.wrapper}>


			<div className={styles.App}>

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
							{/* <RateStars value={3} /> */}
							{/* <RateStars value={0} /> */}
						</div>
					</div>

					<div className={styles.drop_down_list}>
						<Title name='dropdown' />
						<DropDownList name='Сколько гостей' />
					</div>

					<div className={styles.rich_checkbox}>
						<Title name='rich checkbox buttons' />
						<RichCheckbox name='Широкий коридор' >
							Ширина коридоров в номере <br /> не менее 91 см.
						</RichCheckbox>
						<RichCheckbox name='Помощник для инвалидов' >
							На 1 этаже вас встретит специалист <br /> и проводит до номера.
						</RichCheckbox>
					</div>


				</div>

				<div className={styles.column}>
					<div>
						<Title name='buttons' />
						<LongSubmit name='перейти к оплате' type='submit' />
						<div className={styles.BtnsClickMe}>
							<Button type='button' name='click me' variant={BtnVariants.Primary} />
							<Button type='button' name='click me' variant={BtnVariants.Primary} disabled={true} />
							<Button type='button' name='click me' variant={BtnVariants.Border} />
							<Button type='button' name='click me' variant={BtnVariants.Border} disabled={true} />
							<Button type='button' name='click me' variant={BtnVariants.BtnText} />
							<Button type='button' name='click me' variant={BtnVariants.BtnText} disabled={true} />
						</div>
					</div>

					<div className={styles.bullet_list}>
						<Title name='bullet list' />
						<BulletList>
							<li>Нельзя с питомцами</li>
							<li>Без вечеринок и мероприятий</li>
							<li>Время прибытия &#8212; после 13:00,<br /> а выезд до 12:00</li>
						</BulletList>
					</div>
				</div>
			</div>

			<div className={styles.footer_row}>

				<div className={styles.footer_column}>
					<div className={styles.shortcutIcon}>
						<ShortcutIcon name='Комфорт' variantIcon='insert_emoticon'>
							Шумопоглощающие стены
						</ShortcutIcon>
						<ShortcutIcon name='Удобство' variantIcon='location_city'>
							Окно в каждой из спален
						</ShortcutIcon>
					</div>
				</div>

				<div className={styles.footer_column}>

					<UserFeedback />
				</div>
			</div>
		</div>
	);
}

export default App;
