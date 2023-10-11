import React from 'react';
import cls from './style.module.scss'
import { useGallery } from '@hooks';
import classNames from 'classnames';
const icons = import.meta.glob('@icons/**/*.svg', { eager: true })

const IconButton = ({ icon = '', className = '', iconSize = 75, type = 'circle', ...props }) => {
	const { obj } = useGallery(icons);



	return (<>
		<button {...props} className={classNames([cls.btn, className])} data-type={type}>
			{obj[`${icon}.svg`] && <img style={{ width: `${iconSize}%` }} className={cls.btn__icon} src={obj[`${icon}.svg`]} />}
		</button>
	</>);
}

export default IconButton;