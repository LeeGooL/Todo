import React from 'react';

import { Input, Button } from 'antd';

import styles from './add-task.module.scss';

type AddTaskProps = {
	addTask: (label: string) => void;
};

const AddTask: React.FC<AddTaskProps> = React.memo(({ addTask }) => {

	const [inputValue, setInputValue] = React.useState<string>('');

	const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const onClick = () => {
		addTask(inputValue);
		setInputValue('');
	};

	const keyHandler = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			addTask(inputValue);
			setInputValue('');
		}
	};

	return (
		<div className={styles.addTask}>
			<div className={styles.addTask__input}>
				<Input
					placeholder='What needs to be done?'
					value={inputValue}
					onChange={onChangeInput}
					onKeyPress={keyHandler}
				/>
			</div>

			<Button onClick={onClick}>Add</Button>
		</div>
	);
});

export default AddTask;
