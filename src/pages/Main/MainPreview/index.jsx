import React, { useEffect, useState } from 'react';
import cls from './style.module.scss';
import { useSelector } from 'react-redux';


function MainPreview() {
	const { activeData, activeStory, novells } = useSelector(state => state.NovellsList);

	const [storyData, setStoryData] = useState(null);

	useEffect(() => {
		if (!activeStory || !novells) return;
		const data = novells.find(el => el.id === activeStory)
		setStoryData(data);
	}, [activeStory])



	return (<>
		<div className={cls.preview}>
			<ul className={cls.preview__keys}>
				{storyData?.keys?.map((el, i) => (
					<li className={cls.preview__key} key={i}>{el}</li>
				))}
			</ul>
			<img src={storyData?.preview} className={cls.preview__image} />
			<button className={cls.preview__button}>Play</button>
		</div>
	</>);
}

export default MainPreview;