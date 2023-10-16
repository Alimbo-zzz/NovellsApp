import React, { useEffect, useState } from 'react';
import cls from './style.module.scss'
import classNames from 'classnames';
import { Radio, IconButton, Select } from '@ui';
import { useTranslation } from 'react-i18next';
import lng from './lang.json';


const Settings = (props) => {
	const [musicActive, setMusicActive] = useState(true);
	const { i18n } = useTranslation();
	const [selectIndex, setSelectIndex] = useState(1)
	const lang = i18n.language;


	const selectData = [
		{ title: 'Language', value: 'en', preview: 'English' },
		{ title: 'Язык', value: 'ru', preview: 'Русский' },
	]


	useEffect(() => {
		selectData.forEach((el, i) => {
			(lang === el.value) && setSelectIndex(i);
		})
	}, [lang])

	const changeSelect = (e) => i18n.changeLanguage(e.value);



	return (<>
		<main className={cls.settings}>
			<div className={classNames(['container', cls.settings__grid])}>
				<h2 className='title'>{lng[lang].title}</h2>
				<div className={cls.settings__music}>
					<span>{lng[lang].music}</span>
					<Radio value={musicActive} setter={setMusicActive} />
				</div>
				<Select value={selectIndex} data={selectData} onChange={changeSelect} />
			</div>
		</main>
	</>);
}

export default Settings;