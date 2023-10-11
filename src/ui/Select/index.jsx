import React, { useState, useEffect } from 'react';
import cls from './style.module.scss';


function Select({ data = [], onChange }) {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isOpen, setIsOpen] = useState(false);


	const toggleSelect = () => setIsOpen(prev => !prev);
	const closeSelect = () => setIsOpen(false);
	const openSelect = () => setIsOpen(true);


	const changeValue = (index) => {
		let oldValue = data[activeIndex];
		let newValue = data[index];
		setActiveIndex(index);
		closeSelect();
		if (typeof onChange === 'function') onChange(newValue, oldValue);
	}



	return (<>
		<div className={cls.select}>
			<div className={cls.select__head} onClick={toggleSelect}>
				<div className={cls.select__title}>{data[activeIndex].title}</div>
				<div className={cls.select__preview}>{data[activeIndex].value}</div>
			</div>
			<ul className={cls.select__list} data-open={isOpen}>
				{data.map((el, i) => (
					<li
						key={i}
						className={cls.select__item}
						onClick={() => changeValue(i)}
						data-active={activeIndex === i}
					>
						<p>{el.preview}</p>
						<p>{el.value}</p>
					</li>
				))}
			</ul>
		</div>
	</>);
}

export default Select;