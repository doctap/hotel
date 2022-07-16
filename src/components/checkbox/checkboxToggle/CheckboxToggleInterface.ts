export interface ICheckToggle {
	name: string;
	onChange?: (isChecked: boolean) => void;
}

// extends React.HTMLProps<HTMLInputElement>