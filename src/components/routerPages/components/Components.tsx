import React from 'react';
import { BtnTickVariants } from '../../buttons/arrowTickBtns/BtnArrowTickInterface';
import LikeBtn from '../../buttons/btnLike/LikeBtn';
import Button from '../../buttons/btns/Button';
import { BtnVariants } from '../../buttons/btns/ButtonInterface';
import LongSubmit from '../../buttons/submit/LongSubmit';
import CheckboxListText from '../../checkbox/checkboxListText/CheckboxListText';
import CheckboxRadio from '../../checkbox/checkboxRadio/CheckboxRadio';
import CheckboxListTitleText from '../../checkbox/checkboxListTitleText/CheckboxListTitleText';
import CheckboxToggle from '../../checkbox/checkboxToggle/CheckboxToggle';
import DropdownCheckboxes from '../../checkbox/dropdownCheckboxes/DropdownCheckboxes';
import DateCalendar from '../../dateCalendar/DateCalendar';
import FilterDateDropDown from '../../dateCalendar/filterDateDropDown/FilterDateDropDown';
import DropDownAmountVisitors from '../../dropdownList/DropDownAmountVisitors/DropDownAmountVisitors';
import DropdownQtyRooms from '../../dropdownQtyRooms/DropdownQtyRooms';
import ItemContainer from '../../forms/containers/itemContainer/ItemContainer';
import HorizontalSlider from '../../horizontalSlider/HorizontalSlider';
import InputText, { InputVariants } from '../../inputs/Input/InputFieldText';
import InputBtn from '../../inputs/InputBtn/InputBtn';
import RateStars from '../../rateStars/RateStars';
import ShortcutIcon from '../../shortcuts/shortcutIcon/ShortcutIcon';
import BulletList from '../../texts/bulletList/BulletList';
import SubTitle from '../../titles/subTitle/SubTitle';
import UserFeedback from '../../userFeedback/UserFeedback';
import { itemForCheckboxRichList, itemsForCheckboxList, itemsForDropdownCheckboxes } from '../../webSitePages/roomDirectory/RoomDirectory';
import styles from './Components.module.scss';

const itemsForBulletList = ['Нельзя с питомцами', 'Без вечеринок и мероприятий', 'Время прибытия - после 13:00, а выезд до 12:00'];

export default function Components() {
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
						<FilterDateDropDown placeholder='19 авг - 23 авг' subTitle='filter date dropdown' />
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
						<CheckboxListText
							items={itemsForCheckboxList}
						/>
					</ItemContainer>
					<div>
						<ItemContainer margin='0 0 .3rem 0'>
							<SubTitle name='toggle' />
						</ItemContainer>
						<ItemContainer margin='0 0 .3rem 0'>
							<CheckboxToggle name='Получать спецпредложения' defaultChecked={true} />
						</ItemContainer>
						<CheckboxToggle name='Получать спецпредложения' disabled={true} />
					</div>

					<div className={styles.radio_btn}>
						<ItemContainer margin='0 0 .3rem 0'>
							<SubTitle name='radio buttons' />
						</ItemContainer>
						<CheckboxRadio
							onClick={() => 0}
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
						<DropDownAmountVisitors name='Сколько гостей' getQtyVisitors={() => 0} />
					</div>

					<CheckboxListTitleText items={itemForCheckboxRichList} />

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
