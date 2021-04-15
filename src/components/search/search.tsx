import React from 'react';

import { Input } from 'antd';

import 'antd/dist/antd.css';
import styles from './search.module.scss';

type SearchProps = {
	changeSearchValue: (value: string) => void;
};

const Search: React.FC<SearchProps> = React.memo(({ changeSearchValue }) => {
	const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		changeSearchValue(e.target.value);
	};

	return (
		<div className={styles.search}>
			<Input placeholder='Type to search' onChange={onSearch} />
		</div>
	);
});

export default Search;
