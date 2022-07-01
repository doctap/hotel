import React from 'react';
import LikeBtn from '../../components/buttons/btnLike/LikeBtn';
import Button from '../../components/buttons/btns/Button';
import { BtnVariants } from '../../components/buttons/btns/ButtonInterface';
import LongSubmit from '../../components/buttons/submit/LongSubmit';
import CheckboxList from '../../components/checkbox/checkboxList/CheckboxList';
import CheckboxRadio from '../../components/checkbox/checkboxRadio/CheckboxRadio';
import CheckboxRichList from '../../components/checkbox/checkboxRichList/CheckboxRichList';
import CheckboxToggle from '../../components/checkbox/checkboxToggle/CheckboxToggle';
import DropdownCheckboxes from '../../components/checkbox/dropdownCheckboxes/DropdownCheckboxes';
import DateCalendar from '../../components/dateCalendar/DateCalendar';
import DropDownList from '../../components/dropdownList/drop_Down_List/DropDownList';
import DropdownQtyRooms from '../../components/dropdownQtyRooms/DropdownQtyRooms';
import InputText, { InputVariants } from '../../components/inputs/Input/InputFieldText';
import InputBtn from '../../components/inputs/InputBtn/InputBtn';
import RateStars from '../../components/rateStars/RateStars';
import ShortcutIcon from '../../components/shortcuts/shortcutIcon/ShortcutIcon';
import BulletList from '../../components/texts/bulletList/BulletList';
import SubTitle from '../../components/titles/subTitle/SubTitle';
import UserFeedback from '../../components/userFeedback/UserFeedback';
import ItemContainer from '../../forms/containers/itemContainer/ItemContainer';
import styles from './Components.module.scss';
import { BtnTickVariants } from '../../components/buttons/arrowTickBtns/BtnArrowTickInterface';
import HorizontalSlider from '../../components/horizontalSlider/HorizontalSlider';
import PeriodOfStay from '../../components/dateCalendar/periodOfStay/PeriodOfStay';

export default function Components() {

	const itemsForBulletList = ['Нельзя с питомцами', 'Без вечеринок и мероприятий', 'Время прибытия - после 13:00, а выезд до 12:00'];
	const itemsForDropdownCheckboxes = ['Завтрак', 'Письменный стол', 'Стул для кормления', 'Кроватка', 'Телевизор', 'Шампунь',];
	const itemsForCheckboxList = ['Можно курить', 'Можно с питомцами', 'Можно пригласить гостей (до 10 человек)'];
	const itemForCheckboxRichList = [
		{ title: 'Широкий коридор', text: 'Ширина коридоров в номере не менее 91 см.' },
		{ title: 'Помощник для инвалидов', text: 'На 1 этаже вас встретит специалист и проводит до номера.' }
	];

	return (
		<div className={styles.wrapper}>


			<div className={styles.Columns}>

				<div className={styles.column}>

					<div className={styles.text_field}>
						<ItemContainer margin='0 0 .3rem 0'>
							<SubTitle name='text field' />
						</ItemContainer>
						<InputText type='email' placeholder='Email' variant={InputVariants.InputText} />
					</div>

					<div className={styles.masked_text_field}>
						<ItemContainer margin='0 0 .3rem 0'>
							<SubTitle name='masked text field' />
						</ItemContainer>
						<InputText type='text' placeholder='ДД.ММ.ГГГГ' variant={InputVariants.InputText} />
					</div>



					<div className={styles.expandable_checkbox_list}>
						<DropdownCheckboxes
							name='expandable checkbox list'
							items={itemsForDropdownCheckboxes}
						/>
					</div>

					<div className={styles.filter_date_dropdown}>
						<ItemContainer margin='0 0 .3rem 0'>
							<SubTitle name='filter date dropdown' />
						</ItemContainer>
						<InputBtn
							typeInput='text'
							placeholderInput='19 авг - 23 авг'
							typeButton='button'
							variantBtn={BtnTickVariants.Tick}
						/>
					</div>

					<div className={styles.subscription_text_field}>
						<ItemContainer margin='0 0 .3rem 0'>
							<SubTitle name={'subscription text field'} />
						</ItemContainer>
						<InputBtn
							typeInput='email'
							placeholderInput='Email'
							typeButton='submit'
							variantBtn={BtnTickVariants.Arrow}
						/>
					</div>

					<div className={styles.dateDropdown}>
						<ItemContainer margin='0 0 .3rem 0'>
							<SubTitle name='date dropdown' />
						</ItemContainer>
						<DateCalendar getDate={() => 0} />
					</div>

					<div className={styles.DropdownRooms}>
						<DropdownQtyRooms limitBedroom={5} limitBed={7} limitBathroom={5} />
					</div>

				</div>

				<div className={styles.column}>
					<ItemContainer margin='0 0 .3rem 0'>
						<SubTitle name='checkbox button' />
					</ItemContainer>

					<ItemContainer>
						<CheckboxList
							items={itemsForCheckboxList}
						/>
					</ItemContainer>
					<div>
						<ItemContainer margin='0 0 .3rem 0'>
							<SubTitle name='toggle' />
						</ItemContainer>
						<CheckboxToggle type='checkbox' name='Получать спецпредложения' />
					</div>

					<div className={styles.radio_btn}>
						<ItemContainer margin='0 0 .3rem 0'>
							<SubTitle name='radio buttons' />
						</ItemContainer>
						<CheckboxRadio
							onClick={() => 0}
							type='radio'
							male='Мужчина'
							female='Женщина'
						/>
					</div>


					<div className={styles.like}>
						<ItemContainer margin='0 0 .3rem 0'>
							<SubTitle name='button like' />
						</ItemContainer>
						<LikeBtn value={17} onClick={x => console.log(x)} />
					</div>

					<div className={styles.blockStars}>
						<ItemContainer margin='0 0 .3rem 0'>
							<SubTitle name='rate stars' />
						</ItemContainer>
						<div className={styles.stars}>
							<RateStars fullStars={3} maxStars={5} />
							<RateStars fullStars={5} maxStars={7} />
						</div>
					</div>

					<div className={styles.drop_down_list}>
						<ItemContainer margin='0 0 .3rem 0'>
							<SubTitle name='dropdown' />
						</ItemContainer>
						<DropDownList name='Сколько гостей' getQtyVisitors={() => 0} />
					</div>

					<CheckboxRichList items={itemForCheckboxRichList} />


				</div>

				<div className={styles.column}>

					<ItemContainer>
						<HorizontalSlider title='range slider' minValue={0} maxValue={15000} />
					</ItemContainer>

					<div>
						<ItemContainer margin='0 0 .3rem 0'>
							<SubTitle name='buttons' />
						</ItemContainer>
						<div className={styles.btnSubmit}>
							<LongSubmit name='перейти к оплате' type='submit' submitForm={() => 0} />
						</div>

						<div className={styles.BtnsClickMe}>
							<div>
								<Button type='button' name='click me' variant={BtnVariants.Primary} />
							</div>
							<div>
								<Button type='button' name='click me' variant={BtnVariants.Primary} disabled={true} />
							</div>
							<div>
								<Button type='button' name='click me' variant={BtnVariants.Border} />
							</div>
							<div>
								<Button type='button' name='click me' variant={BtnVariants.Border} disabled={true} />

							</div>
							<div>
								<Button type='button' name='click me' variant={BtnVariants.BtnText} />
							</div>
							<div>
								<Button type='button' name='click me' variant={BtnVariants.BtnText} disabled={true} />
							</div>
						</div>
					</div>

					<div className={styles.bullet_list}>
						<ItemContainer margin='0 0 .3rem 0'>
							<SubTitle name='bullet list' />
						</ItemContainer>
						<BulletList items={itemsForBulletList} />
					</div>

					<PeriodOfStay onChange={(period) => console.log(period)} />
				</div>
			</div>

			<div className={styles.footer_row}>

				<div className={styles.footer_column}>
					<div className={styles.shortcutIcon}>
						<ShortcutIcon
							title='Комфорт'
							variantIcon='insert_emoticon'
							text='Шумопоглощающие стены'
						/>

						<ShortcutIcon
							title='Удобство'
							variantIcon='location_city'
							text='Окно в каждой из спален'
						/>
					</div>
				</div>

				<div className={styles.footer_column}>

					<UserFeedback
						wasWritten={new Date(2022, 5, 26)}
						userName='Vasili Nikiforov'
						likeValue={10}
						getValueLike={x => console.log(x)}
						userFeedback='Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий.
						И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей.'
					/>
				</div>
			</div>
		</div>
	)
}
