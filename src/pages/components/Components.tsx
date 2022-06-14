import React from 'react';
import ReactSlider from 'react-slider';
import { BtnTickVariants } from '../../components/buttons/arrowTickBtns/BtnArrowTickInterface';
import LikeBtn from '../../components/buttons/btnLike/LikeBtn';
import Button from '../../components/buttons/btns/Button';
import { BtnVariants } from '../../components/buttons/btns/ButtonInterface';
import LongSubmit from '../../components/buttons/submit/LongSubmit';
import CheckboxList from '../../components/checkbox/checkboxList/CheckboxList';
import CheckboxRadio from '../../components/checkbox/checkboxRadio/CheckboxRadio';
import RichCheckbox from '../../components/checkbox/checkboxRich/RichCheckbox';
import CheckboxRichList, { itemCheckboxRich } from '../../components/checkbox/checkboxRichList/CheckboxRichList';
import CheckboxToggle from '../../components/checkbox/checkboxToggle/CheckboxToggle';
import CheckBoxItem from '../../components/checkbox/chtckBoxItem/CheckBoxItem';
import DropdownCheckboxes from '../../components/checkbox/dropdownCheckboxes/DropdownCheckboxes';
import DateDropdown from '../../components/dateDropdown/DateDropdown';
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

export default function Components() {

	const itemsForBulletList = ['Нельзя с питомцами', 'Без вечеринок и мероприятий', 'Время прибытия - после 13:00, а выезд до 12:00'];
	const itemsForDropdownCheckboxes = ['Завтрак', 'Письменный стол', 'Стул для кормления', 'Кроватка', 'Телевизор', 'Шампунь',];
	const itemsForCheckboxList = ['Можно курить', 'Можно с питомцами', 'Можно приглосить гостей (до 10 человек)'];
	const itemForCheckboxRichList = [
		{ title: 'Широкий коридор', text: 'Ширина коридоров в номере не менее 91 см.' },
		{ title: 'Помощник для инвалидов', text: 'На 1 этаже вас встретит специалист и проводит до номера.' }
	];

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
						<DropdownCheckboxes
							name='expandable checkbox list'
							items={itemsForDropdownCheckboxes}
						/>
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

					<div className={styles.DropdownRooms}>
						<DropdownQtyRooms limitBedroom={5} limitBed={7} limitBathroom={5} />
					</div>

				</div>

				<div className={styles.column}>

					<SubTitle name='checkbox button' />

					<ItemContainer>
						<CheckboxList
							items={itemsForCheckboxList}
						/>
					</ItemContainer>
					<div>
						<SubTitle name='toggle' />
						<CheckboxToggle type='checkbox' name='Получать спецпредложения' />
					</div>

					<div className={styles.radio_btn}>
						<SubTitle name='radio buttons' />
						<CheckboxRadio type='radio' male='Мужчина' female='Женщина' />
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

					<CheckboxRichList items={itemForCheckboxRichList} />


				</div>

				<div className={styles.column}>

					{/* <ItemContainer> */}
					{/* <ReactSlider
						className="horizontal-slider"
						thumbClassName="example-thumb"
						trackClassName="example-track"
						defaultValue={[0, 100]}
						ariaLabel={['Lower thumb', 'Upper thumb']}
						ariaValuetext={state => `Thumb value ${state.valueNow}`}
						renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
						pearling
						minDistance={10}
					/> */}
					{/* </ItemContainer> */}

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
