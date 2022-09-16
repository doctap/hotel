import React from 'react';
import { IItemRoom } from '../../commonInterfaces/RFCinterfaces';
import ItemRoom from '../itemRoom/ItemRoom';
import styles from './ListItemRoom.module.scss';

interface IListItemRoom {
	items: IItemRoom[];
}

export default function ListItemRoom(props: IListItemRoom) {
	return (
		<>
			{
				props.items.map(it => {
					return <ItemRoom roomNum={it.roomNum} grade={it.grade} isLux={it.isLux} opinions={it.opinions} price={it.price} />
				})
			}
		</>
	)
}