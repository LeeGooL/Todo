import React from 'react';
import classNames from 'classnames';

import { Button, Card } from 'antd';
import { DeleteOutlined, ExclamationOutlined } from '@ant-design/icons';

import { Item } from '../../types/state';

import styles from './task.module.scss';

type TaskProps = {
	todo: Item;
	removeTask: (id: number) => void;
	importantTask: (id: number) => void;
	completeTask: (id: number) => void;
};

declare var confirm: (question: string) => boolean;

const Task: React.FC<TaskProps> = ({
	todo,
	removeTask,
	importantTask,
	completeTask,
}) => {
	const onRemoveTask = (e: React.MouseEvent) => {
		e.stopPropagation();

		const isOk = confirm(
			`Вы действительно хотите удалить задачу с названием: "${todo.label}"`
		);

		if (isOk) {
			removeTask(todo.id);
		}
	};

	const onImportantTask = (e: React.MouseEvent) => {
		e.stopPropagation();
		importantTask(todo.id);
	};

	const completedTask = () => {
		completeTask(todo.id);
	};

	return (
		<div className={styles.task}>
			<Card size='small'>
				<div
					className={classNames(`${styles.task__card}`, {
						[`${styles.important}`]: todo.important === true,
						[`${styles.completed}`]: todo.completed === true,
					})}
					onClick={completedTask}
				>
					{todo.label}

					<div className={styles.task__btns}>
						<Button danger style={{ marginRight: 5 }} onClick={onRemoveTask}>
							<DeleteOutlined />
						</Button>

						<Button onClick={onImportantTask}>
							<ExclamationOutlined />
						</Button>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default Task;
