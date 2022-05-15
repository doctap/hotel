interface IInputProps {
	type: InputType;
	name?: string;
	placeholder?: string;
}

type InputType = 'text' | 'email' | 'password' | 'checkbox';