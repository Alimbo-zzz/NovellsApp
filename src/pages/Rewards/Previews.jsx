import React, { useState, useEffect } from 'react';
import cls from './style.module.scss'
import classNames from 'classnames';
import { useGallery } from '@hooks';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import lng from './lang.json';

const previews_img = import.meta.glob('@images/ui/reward-bg-*.png', { eager: true })



function Previews(props) {
	const previews = useGallery(previews_img)?.obj;
	const [rewardItems, setRewardItems] = useState([]);
	const lang = useTranslation().i18n.language;



	useEffect(() => {
		if (!previews) return;
		setRewardItems([
			{
				name: "item-date",
				route: "/rewards/days",
				background: previews['reward-bg-4.png']
			},
			{
				name: "item-gems",
				route: "/rewards",
				// route: "/rewards/gems",
				background: previews['reward-bg-3.png']
			},
			{
				name: "item-keys",
				route: "/rewards",
				// route: "/rewards/keys",
				background: previews['reward-bg-2.png']
			},
			{
				name: "item-code",
				route: "/rewards/code",
				background: previews['reward-bg-1.png']
			},
		])
	}, [previews])

	return (<>
		<div data-lang={lang} className={cls.rewards} >
			<div className={classNames(['container', cls.rewards__cont])}>
				<h2 className='title'>{lng[lang].main.title}</h2>

				<ul className={cls.rewards__list}>
					{rewardItems.map((el, i) => (
						<li className={cls.rewards__preview} key={i}>
							<div>
								<h4>{lng[lang][el.name].title}</h4>
								<p>{lng[lang][el.name].placeholder}</p>
							</div>
							<img src={el.background} />
							<Link to={el.route}>{lng[lang][el.name].button}</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	</>);
}

export default Previews;