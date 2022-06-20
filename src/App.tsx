import { useState } from 'react';

import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';

import s from './App.module.sass';

export const App = () => {
	const [toggle, setToggle] = useState<boolean>(false);
	return (
		<>
			<Header toggle={toggle} setToggle={setToggle} />
			<div className={toggle && s.mobile}>
				<Main toggle={toggle} />
				<Footer toggle={toggle} />
			</div>
		</>
	);
};
