import React from 'react';
import { BtnTickVariants } from '../buttons/arrowTickBtns/BtnArrowTickInterface';
import LikeBtn from '../buttons/btnLike/LikeBtn';
import Button from '../buttons/btns/Button';
import { BtnVariants } from '../buttons/btns/ButtonInterface';
import LongSubmit from '../buttons/submit/LongSubmit';
import CheckboxRadio from '../checkbox/checkboxRadio/CheckboxRadio';
import RichCheckbox from '../checkbox/checkboxRich/RichCheckbox';
import CheckboxToggle from '../checkbox/checkboxToggle/CheckboxToggle';
import CheckBoxItem from '../checkbox/chtckBoxItem/CheckBoxItem';
import ListCheckbox from '../checkbox/listCheckbox/ListCheckbox';
import DateDropdown from '../dateDropdown/DateDropdown';
import DropDownList from '../dropdownList/drop_Down_List/DropDownList';
import InputText, { InputVariants } from '../inputs/Input/InputFieldText';
import InputBtn from '../inputs/InputBtn/InputBtn';
import RateStars from '../rateStars/RateStars';
import ShortcutIcon from '../shortcuts/shortcutIcon/ShortcutIcon';
import BulletList from '../texts/bulletList/BulletList';
import SubTitle from '../titles/subTitle/SubTitle';
import UserFeedback from '../userFeedback/UserFeedback';
import styles from './PageComponents.module.scss';

export default function PageComponents() {
	return (
		<div className={styles.wrapper}>


			<div className={styles.Columns}>

				<div className={styles.column}>

					<div className={styles.text_field}>
						<SubTitle name='text field' />
						<InputText type='email' placeholder='Email' variant={InputVariants.InputText} />
					</div>

					<div className={styles.masked_text_field}>
						<SubTitle name='masked text field' />
						<InputText type='text' placeholder='ДД.ММ.ГГГГ' variant={InputVariants.InputText} />
					</div>



					<div className={styles.expandable_checkbox_list}>
						<ListCheckbox name='expandable checkbox list' />
					</div>

					<div className={styles.filter_date_dropdown}>
						<SubTitle name='filter date dropdown' />
						<InputBtn
							typeInput='text'
							placeholderInput='19 авг - 23 авг'
							typeButton='button'
							variantBtn={BtnTickVariants.Tick}
						/>
					</div>

					<div className={styles.subscription_text_field}>
						<SubTitle name={'subscription text field'} />
						<InputBtn
							typeInput='email'
							placeholderInput='Email'
							typeButton='submit'
							variantBtn={BtnTickVariants.Arrow}
						/>
					</div>

					<div className={styles.dateDropdown}>
						<SubTitle name='date dropdown' />
						<DateDropdown />
					</div>

				</div>

				<div className={styles.column}>

					<SubTitle name='checkbox button' />
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
						<SubTitle name='toggle' />
						<CheckboxToggle type='checkbox' name='Получать спецпредложения' />
					</div>

					<div>
						<SubTitle name='radio buttons' />
						<CheckboxRadio type='radio' name='gender' />
					</div>


					<div className={styles.like}>
						<SubTitle name='button like' />
						<LikeBtn value={17} onClick={x => console.log(x)} />
					</div>

					<div className={styles.blockStars}>
						<SubTitle name='rate stars' />
						<div className={styles.stars}>
							<RateStars fullStars={3} maxStars={5} />
							<RateStars fullStars={5} maxStars={7} />
						</div>
					</div>

					<div className={styles.drop_down_list}>
						<SubTitle name='dropdown' />
						<DropDownList name='Сколько гостей' />
					</div>

					<div className={styles.rich_checkbox}>
						<SubTitle name='rich checkbox buttons' />
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
						<SubTitle name='buttons' />
						<div className={styles.btnSubmit}>
							<LongSubmit name='перейти к оплате' type='submit' />
						</div>

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
						<SubTitle name='bullet list' />
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
	)
}
