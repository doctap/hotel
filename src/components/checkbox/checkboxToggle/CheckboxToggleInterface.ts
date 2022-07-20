export interface ICheckToggle {
	name: string;
	checked?: boolean;
	onChange?: (isChecked: boolean) => void;
}

// extends React.HTMLProps<HTMLInputElement>