import React from 'react';
import { render } from 'react-dom';

import { App } from './components';

import styles from './index.module.scss';

render(
	<div className={styles.container}>
		<App />
	</div>,
	document.getElementById('root')
);
