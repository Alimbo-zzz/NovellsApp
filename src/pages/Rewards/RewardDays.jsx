import React, { useState } from 'react';
import cls from './reward-days.module.scss';
import classNames from 'classnames';
import { IconButton } from '@ui';
import { useGallery } from '@hooks';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import lng_json from './lang.json';

const allImgIcons = import.meta.glob('@images/ui/*.png', { eager: true });


function RewardDays(props) {
	const icons = useGallery(allImgIcons)?.obj;
	const lang = useTranslation().i18n.language;
	const lng = lng_json[lang]['date-rewards'];

	const [weekDays, setWeekDays] = useState([
		{
			keys: null,
			gems: 2,
			background: 'diamond-2.png'
		},
		{
			keys: 2,
			gems: null,
			background: 'key-2.png'
		},
		{
			keys: null,
			gems: 3,
			background: 'diamond-3.png'
		},
		{
			keys: 2,
			gems: null,
			background: 'key-2.png'
		},
		{
			keys: null,
			gems: 5,
			background: 'diamond-5.png'
		},
		{
			keys: 2,
			gems: null,
			background: 'key-2.png'
		},
		{
			keys: 12,
			gems: 9,
			background: 'final-1.png'
		},
	])





	return (<>
		<div className={cls.wrap}>
			<Link to='/rewards'>
				<IconButton icon='cross' className={cls.remove} />
			</Link>
			<div className={classNames(['container', cls.content])}>
				<h2 className='title'>{lng.title}</h2>
				<div className={cls.grid}>
					{weekDays.map((el, i) => (
						<div className={cls.weekday} key={i}>
							<span>{el?.keys || el?.gems}</span>
							<img className={cls.weekday__icon} src={icons[el?.background]} />
							{i === 6 && <img className={cls.weekday__light} src={icons['light.png']} />}
							<div className={cls.weekday__foot}>{lng['item-foot']} {i + 1}</div>
						</div>
					))}
				</div>
				<button className='button'>{lng.btn}</button>
			</div>
		</div>
	</>);
}

export default RewardDays;