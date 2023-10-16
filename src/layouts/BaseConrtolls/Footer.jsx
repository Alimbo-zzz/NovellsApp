import React from 'react';
import cls from './style.module.scss';
import classNames from 'classnames';
import { SlSettings } from 'react-icons/sl';
import { BsHeart } from 'react-icons/bs';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import lng from './lang.json';


import prize_img from '@images/ui/prize-1.png';

function Footer(props) {
	const lang = useTranslation().i18n.language;


	return (<>
		<footer className={cls.footer}>
			<div className={classNames([cls.footer__grid, 'container'])}>
				<Link to='/' className={cls.footer__btn}>
					<BsHeart />
					<span>{lng[lang].stories}</span>
				</Link>
				<Link to='/rewards' className={cls.footer__btn}>
					<img src={prize_img} />
					<span>{lng[lang].rewards}</span>
				</Link>
				<Link to='/settings' className={cls.footer__btn}>
					<SlSettings />
					<span>{lng[lang].settings}</span>
				</Link>
			</div>
		</footer>
	</>);
}

export default Footer;