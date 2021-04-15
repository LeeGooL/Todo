import React from 'react';

import { Radio, RadioChangeEvent } from 'antd';

import styles from './filters.module.scss';

type FiltersProps = {
	changeFilterType: (type: string) => void;
};

const Filters: React.FC<FiltersProps> = React.memo(({ changeFilterType }) => {
	const onChangeHandler = (e: RadioChangeEvent) => {
		changeFilterType(e.target.value);
	};

	return (
		<div className={styles.filters}>
			<Radio.Group
				onChange={onChangeHandler}
				defaultValue='all'
				buttonStyle='solid'
			>
				<Radio.Button value='all'>All</Radio.Button>
				<Radio.Button value='active'>Active</Radio.Button>
				<Radio.Button value='done'>Done</Radio.Button>
			</Radio.Group>
		</div>
	);
});

export default Filters;
