export interface IInputProps {
	type: InputType;
	name?: string;
	placeholder?: string;
	onChange?: (isChecked: boolean) => void;
	value?: string;
	internalText?: string;
}

type InputType = 'text' | 'email' | 'password' | 'checkbox' | 'radio';