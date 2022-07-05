import React from 'react';

interface IItemContainer {
	children: React.ReactNode;
	margin?: string;
}

export default function ItemContainer(props: IItemContainer) {
  return (
	 <div style={{margin: props.margin ?? '0 0 1rem 0'}}>
		{props.children}
	 </div>
  )
}
