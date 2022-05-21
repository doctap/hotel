export interface ICheckToggle {
	type: string;
	name: string;
	onChange?: (isChecked: boolean) => void;
}