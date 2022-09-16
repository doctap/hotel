import React from 'react';
import { rooms } from '../../../server/Server';
import CheckboxListText from '../../checkbox/checkboxListText/CheckboxListText';
import CheckboxListTitleText from '../../checkbox/checkboxListTitleText/CheckboxListTitleText';
import DropdownCheckboxes from '../../checkbox/dropdownCheckboxes/DropdownCheckboxes';
import FilterDateDropDown from '../../dateCalendar/filterDateDropDown/FilterDateDropDown';
import DropDownAmountVisitors from '../../dropdownList/DropDownAmountVisitors/DropDownAmountVisitors';
import DropdownQtyRooms from '../../dropdownQtyRooms/DropdownQtyRooms';
import ItemContainer from '../../forms/containers/itemContainer/ItemContainer';
import FooterLinks from '../../headersFooters/footers/footerLinks/FooterLinks';
import Header from '../../headersFooters/header/Header';
import HorizontalSlider from '../../horizontalSlider/HorizontalSlider';
import ListItemRoom from '../../listItemRoom/ListItemRoom';
import { pagesForFooter, pagesForNav } from '../../routerPages/headersFooters/HeadersFooters';
import SubTitle from '../../titles/subTitle/SubTitle';
import styles from './RoomDirectory.module.scss';

export const itemsForCheckboxList = ['Можно курить', 'Можно с питомцами', 'Можно пригласить гостей (до 10 человек)'];
export const itemForCheckboxRichList = [
	{ title: 'Широкий коридор', text: 'Ширина коридоров в номере не менее 91 см.' },
	{ title: 'Помощник для инвалидов', text: 'На 1 этаже вас встретит специалист и проводит до номера.' }
];
export const itemsForDropdownCheckboxes = ['Завтрак', 'Письменный стол', 'Стул для кормления', 'Кроватка', 'Телевизор', 'Шампунь',];

export default function RoomDirectory() {
	return (
		<>
			<Header login={true} getNextPage={() => 0} pages={pagesForNav} />

			<div className={styles.contentBody}>
				<aside className={styles.asideBar}>
					<ItemContainer>
						<ItemContainer margin='0 0 .3rem 0'>
							<SubTitle name='даты прибывания в отеле' />
						</ItemContainer>
						<FilterDateDropDown placeholder='19 авг - 23 авг' subTitle='19 авг - 23 авг' />
					</ItemContainer>

					<ItemContainer>
						<ItemContainer margin='0 0 .3rem 0'>
							<SubTitle name='гости' />
						</ItemContainer>
						<DropDownAmountVisitors name='Сколько гостей' getQtyVisitors={() => 0} />
					</ItemContainer>

					<ItemContainer>
						<HorizontalSlider title='диапазон цен' minValue={0} maxValue={15000} />
					</ItemContainer>

					<ItemContainer>
						<ItemContainer margin='0 0 .3rem 0'>
							<SubTitle name='правила дома' />
						</ItemContainer>
						<CheckboxListText
							items={itemsForCheckboxList}
						/>
					</ItemContainer>

					<ItemContainer>
						<ItemContainer margin='0 0 .3rem 0'>
							<SubTitle name='доступность' />
						</ItemContainer>
						<CheckboxListTitleText items={itemForCheckboxRichList} />
					</ItemContainer>

					<ItemContainer>
						<ItemContainer margin='0 0 .3rem 0'>
							<SubTitle name='удобства номера' />
						</ItemContainer>
						<DropdownQtyRooms limitBedroom={5} limitBed={7} limitBathroom={5} />
					</ItemContainer>

					<ItemContainer>
						<DropdownCheckboxes
							name='дополнительные удобства'
							items={itemsForDropdownCheckboxes}
						/>
					</ItemContainer>
				</aside>
				<main className={styles.main}>
					<ListItemRoom items={rooms} />
				</main>
			</div>

			<FooterLinks getNextPage={() => 0} pages={pagesForFooter} />
		</>
	)
}