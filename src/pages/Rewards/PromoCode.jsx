import React from 'react';
import cls from './style.module.scss';
import classNames from 'classnames';
import { IconButton } from '@ui';
import { Link } from "react-router-dom";


function PromoCode(props) {

	return (<>
		<div className={cls.code}>
			<Link to='/rewards'>
				<IconButton icon='cross' className={cls.code__remove} />
			</Link>
			<div className={classNames(['container', cls.code__content])}>
				<h2 className='title'>Promo Code</h2>
				<label>
					<p>Enter a Promo Code:</p>
					<input className='input' type="text" aria-autocomplete='new-password' name="code" />
				</label>
				<button className='button'>Apply</button>
			</div>
		</div>
	</>);
}

export default PromoCode;