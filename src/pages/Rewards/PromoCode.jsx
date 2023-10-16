import React from 'react';
import cls from './style.module.scss';
import classNames from 'classnames';
import { IconButton } from '@ui';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import lng_json from './lang.json';


function PromoCode(props) {
	const lang = useTranslation().i18n.language;
	const lng = lng_json[lang]['promo-code'];

	return (<>
		<div className={cls.code}>
			<Link to='/rewards'>
				<IconButton icon='cross' className={cls.code__remove} />
			</Link>
			<div className={classNames(['container', cls.code__content])}>
				<h2 className='title'>{lng.title}</h2>
				<label>
					<p>{lng.placeholder}</p>
					<input className='input' type="text" aria-autocomplete='new-password' name="code" />
				</label>
				<button className='button'>{lng.btn}</button>
			</div>
		</div>
	</>);
}

export default PromoCode;