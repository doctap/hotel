export interface IBtnTick {
	type: 'submit' | 'button';
	variant: BtnTickVariants;
	onClick?: () => void;
}

export enum BtnTickVariants {
	Arrow = 1,
	Tick = 2
}