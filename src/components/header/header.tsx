import React from 'react';

import styles from './header.module.scss';

type HeaderProps = {
	toDoCount: number;
	doneCount: number;
};

const Header: React.FC<HeaderProps> = React.memo(({ toDoCount, doneCount }) => {
	return (
		<div className={styles.header}>
			<h1>Todo list</h1>
			<p className={styles.header__statistics}>
				{toDoCount} more to do, {doneCount} done
			</p>
		</div>
	);
});

export default Header;
