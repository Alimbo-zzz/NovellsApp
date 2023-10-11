import React from 'react';
import cls from './style.module.scss';
import classNames from 'classnames';

import diamond_img from '@images/ui/diamond-1.png';
import key_img from '@images/ui/key-1.png';


const Header = (props) => {


	function openStore(params) {
		console.log('test')
	}


	return (<>
		<header className={cls.header}>
			<div className={classNames(['container', cls.header__grid])}>
				<div className={cls.header__box} onClick={openStore}>
					<img src={diamond_img} />
					<p>12</p>
					<span>+</span>
				</div>

				<div className={cls.header__box} onClick={openStore}>
					<img src={key_img} />
					<p>12</p>
					<span>+</span>
				</div>
			</div>
		</header>
	</>);
}

export default Header;