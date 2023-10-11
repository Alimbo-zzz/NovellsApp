import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import cls from './style.module.scss';
import pt from 'prop-types';


Radio.propTypes = {
	className: pt.string,
	setter: pt.func,
	value: pt.bool,
	size: pt.string,
}


function Radio({ className = '', size = '1em', setter, value = false, ...props }) {
	const [activeValue, setActiveValue] = useState(value);

	const changeValue = e => {
		let checked = e.target.checked;
		setActiveValue(checked);
	}

	useEffect(() => {
		setActiveValue(value);
	}, [value])


	return (<>
		<label data-active={activeValue} style={{ fontSize: size }} className={classNames([className, cls.radio])}>
			<input type="checkbox" {...props} onChange={changeValue} checked={activeValue} />
			<div data-active={activeValue} className={cls.radio__decor} />
		</label>
	</>);
}



export default Radio;