export interface ICounter {
	name: string;
	value: number;
	setValue: (value: number) => void;
	limit?: number;
}
