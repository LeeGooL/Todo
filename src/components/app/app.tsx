import React, { useState, useCallback } from 'react';

import { Header, Search, Filters, TasksList, AddTask } from '../';
import { State, Item } from '../../types/state';

import styles from './app.module.scss';

const App: React.FC = () => {
	const [state, setState] = useState<State>({
		items: [],
		search: '',
		filters: 'all',
	});

	const { items, search, filters } = state;

	const addTask = (label: string) => {
		const newTask: Item = {
			id: Math.random(),
			label,
			completed: false,
			important: false,
		};

		const newState = { ...state, items: [...state.items, newTask] };

		setState(newState);
	};

	const removeTask = (id: number) => {
		const newTasksList = state.items.filter((item) => item.id !== id);
		const newState = { ...state, items: newTasksList };

		setState(newState);
	};

	const importantTask = (id: number) => {
		const newTasksList = state.items.map((item) => {
			if (item.id === id) {
				item.important = !item.important;
			}

			return item;
		});
		const newState = { ...state, items: newTasksList };

		setState(newState);
	};

	const completedTask = (id: number) => {
		const newTasksList = state.items.map((item) => {
			if (item.id === id) {
				item.completed = !item.completed;
			}

			return item;
		});
		const newState = { ...state, items: newTasksList };

		setState(newState);
	};

	const changeFilterType = useCallback((type: string) => {
		const newState = { ...state, filters: type };

		setState(newState);
	}, []);

	const changeSearchValue = useCallback((value: string) => {
		const newState = { ...state, search: value };

		setState(newState);
	}, []);

	const filtersItems = (items: Item[], type: string) => {
		switch (type) {
			case 'all':
				return items;

			case 'active':
				return items.filter((item) => !item.completed);

			case 'done':
				return items.filter((item) => item.completed);

			default:
				return items;
		}
	};

	const searchItems = (items: Item[], searchValue: string) => {
		return items.filter((item) => {
			return item.label.includes(searchValue);
		});
	};

	const toDoCount = (items: Item[]) => {
		return items.filter((item) => !item.completed).length;
	};

	const doneCount = (items: Item[]) => {
		return items.filter((item) => item.completed).length;
	};

	return (
		<div className={styles.todoApp}>
			<Header toDoCount={toDoCount(items)} doneCount={doneCount(items)} />

			<div className={styles.todoApp__wrapper}>
				<Search changeSearchValue={changeSearchValue} />
				<Filters changeFilterType={changeFilterType} />
			</div>

			<div className={styles.todoApp__tasks}>
				<TasksList
					todos={filtersItems(searchItems(items, search), filters)}
					removeTask={removeTask}
					importantTask={importantTask}
					completeTask={completedTask}
				/>
			</div>

			<AddTask addTask={addTask} />
		</div>
	);
};

export default App;
