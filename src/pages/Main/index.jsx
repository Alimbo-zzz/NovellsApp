import React from 'react';
import cls from './style.module.scss';
import MainPreview from './MainPreview';
import NovellsList from './NovellsList';

const Main = (props) => {

	return (<>
		<main className={cls.wrap}>
			<MainPreview />
			<NovellsList />
		</main>
	</>);
}

export default Main;