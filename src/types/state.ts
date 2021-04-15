export interface State {
	items: Item[];
	filters: string;
	search: string;
}

export interface Item {
	id: number;
	label: string;
	completed: boolean;
	important: boolean;
}
