import React from 'react';
import Header from './Header';
import Footer from './Footer';
import cls from './style.module.scss'

function BaseControlls({ children }) {

	return (<>
		<div className={cls.wrap}>
			<Header />
			<div className={cls.wrap__content}>
				{children}
			</div>
			<Footer />
		</div>
	</>);
}

export default BaseControlls;