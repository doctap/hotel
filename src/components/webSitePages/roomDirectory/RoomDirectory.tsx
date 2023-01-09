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
import TitleH1 from '../../titles/titleH1/TitleH1';
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
			<Header login={false} getNextPage={() => 0} pages={pagesForNav} />

			<div className={styles.contentBody}>
				<aside className={styles.asideBar}>
					<ItemContainer margin='0 0 1.35rem 0'>
						<ItemContainer margin='0 0 .3rem 0'>
							<SubTitle name='даты прибывания в отеле' />
						</ItemContainer>
						<FilterDateDropDown placeholder='19 авг - 23 авг' subTitle='19 авг - 23 авг' />
					</ItemContainer>

					<ItemContainer margin='0 0 1.9rem 0'>
						<ItemContainer margin='0 0 .35rem 0'>
							<SubTitle name='гости' />
						</ItemContainer>
						<DropDownAmountVisitors name='Сколько гостей' getQtyVisitors={() => 0} />
					</ItemContainer>

					<ItemContainer margin='0 0 1.9rem 0'>
						<div className={styles.horizontalSlider}>
							<HorizontalSlider title='диапазон цены' minValue={0} maxValue={15000} />
							<span>Стоимость за сутки пребывания в номере</span>
						</div>
					</ItemContainer>

					<ItemContainer margin='0 0 2.1rem 0'>
						<ItemContainer margin='0 0 .3rem 0'>
							<SubTitle name='правила дома' />
						</ItemContainer>
						<CheckboxListText
							items={itemsForCheckboxList}
						/>
					</ItemContainer>

					<ItemContainer margin='0 0 1.9rem 0'>
						<ItemContainer margin='0 0 1rem 0'>
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
					<div className={styles.headline}>
						<TitleH1 children='Номера, которые мы для вас подобрали' />
					</div>
					<div className={styles.items}>
						<ListItemRoom items={rooms} />
					</div>
				</main>
			</div>

			<FooterLinks getNextPage={() => 0} pages={pagesForFooter} />
		</>
	)
}