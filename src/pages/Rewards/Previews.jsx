import React, { useState, useEffect } from 'react';
import cls from './style.module.scss'
import classNames from 'classnames';
import { useGallery } from '@hooks';
import { Link } from "react-router-dom";

const previews_img = import.meta.glob('@images/ui/reward-bg-*.png', { eager: true })



function Previews(props) {
	const previews = useGallery(previews_img)?.obj;
	const [rewardItems, setRewardItems] = useState([]);


	useEffect(() => {
		if (!previews) return;
		setRewardItems([
			{
				title: "28-day Login Reward",
				placeholder: "Log in every day and get gifts!",
				route: "/rewards/days",
				button: "Go!",
				background: previews['reward-bg-4.png']
			},
			{
				title: "Get FREE Gems!",
				placeholder: "Watch a short clip and continue playing!",
				route: "/rewards",
				// route: "/rewards/gems",
				button: "Get!",
				background: previews['reward-bg-3.png']
			},
			{
				title: "Get FREE Keys!",
				placeholder: "Watch a short clip and continue playing!",
				route: "/rewards",
				// route: "/rewards/keys",
				button: "Get!",
				background: previews['reward-bg-2.png']
			},
			{
				title: "I have a Promo Code",
				placeholder: "Apply the code and get a prize!",
				route: "/rewards/code",
				button: "Paste",
				background: previews['reward-bg-1.png']
			},
		])
	}, [previews])

	return (<>
		<div className={cls.rewards} >
			<div className={classNames(['container', cls.rewards__cont])}>
				<h2 className='title'>Daily Reward</h2>

				<ul className={cls.rewards__list}>
					{rewardItems.map((el, i) => (
						<li className={cls.rewards__preview} key={i}>
							<div>
								<h4>{el.title}</h4>
								<p>{el.placeholder}</p>
							</div>
							<img src={el.background} />
							<Link to={el.route}>{el.button}</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	</>);
}

export default Previews;