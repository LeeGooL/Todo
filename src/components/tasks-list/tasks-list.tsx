import React from 'react';

import { Task } from '../';
import { Item } from '../../types/state';

import styles from './tasks-list.module.scss';

type TasksListProps = {
	todos: Item[];
	removeTask: (id: number) => void;
	importantTask: (id: number) => void;
	completeTask: (id: number) => void;
};

const TasksList: React.FC<TasksListProps> = ({
	todos,
	removeTask,
	importantTask,
	completeTask,
}) => {
	return (
		<div className={styles.tasks}>
			{todos.map((todo) => {
				return (
					<Task
						todo={todo}
						key={todo.id}
						removeTask={removeTask}
						importantTask={importantTask}
						completeTask={completeTask}
					/>
				);
			})}
		</div>
	);
};

export default TasksList;
