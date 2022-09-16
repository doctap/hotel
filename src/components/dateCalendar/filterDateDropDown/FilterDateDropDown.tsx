import React from 'react';
import { BtnTickVariants } from '../../buttons/arrowTickBtns/BtnArrowTickInterface';
import InputBtn from '../../inputs/InputBtn/InputBtn';

interface IFilterDateDropDown {
	subTitle: string;
	placeholder: string;
}

export default function FilterDateDropDown(props: IFilterDateDropDown) {
	return (
		<>
			<InputBtn
				typeInput='text'
				placeholderInput={props.placeholder}
				typeButton='button'
				variantBtn={BtnTickVariants.Tick}
			/>
		</>
	)
}
