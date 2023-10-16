import React, { useEffect, useState } from 'react';
import cls from './style.module.scss';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';



function MainPreview() {
	const { activeData, activeStory, novells } = useSelector(state => state.NovellsList);

	const [storyData, setStoryData] = useState(null);
	const lang = useTranslation().i18n.language;

	useEffect(() => {
		if (!activeStory || !novells) return;
		const data = novells.find(el => el.id === activeStory)
		setStoryData(data);
	}, [activeStory])

	const lngBtnText = (lang) => lang === 'en' ? "Play" : "Играть";


	return (<>
		<div className={cls.preview}>
			<ul className={cls.preview__keys}>
				{storyData?.keys?.map((el, i) => (
					<li className={cls.preview__key} key={i}>{el}</li>
				))}
			</ul>
			<img src={storyData?.preview} className={cls.preview__image} />
			<button className={cls.preview__button}>{lngBtnText(lang)}</button>
		</div>
	</>);
}

export default MainPreview;