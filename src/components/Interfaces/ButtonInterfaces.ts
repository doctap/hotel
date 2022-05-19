export enum BtnVariants {
	Primary = 1,
	Border = 2,
	BtnText = 3,
}

export interface IButtonProps {
	name: string;
	type: 'button' | 'reset' | 'submit';
	variant: BtnVariants;
	disabled?: boolean;
}