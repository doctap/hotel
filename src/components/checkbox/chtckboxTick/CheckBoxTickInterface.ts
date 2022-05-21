export interface ICheckBoxTick {
	type: string;
	name: string;
	onChange?: (isChecked: boolean) => void;
}