import React, { useState } from 'react';
import cls from './style.module.scss'
import classNames from 'classnames';
import { Radio, IconButton, Select } from '@ui';

const Settings = (props) => {
	const [musicActive, setMusicActive] = useState(true);

	const selectData = [
		{ title: 'Language', value: 'en', preview: 'English' },
		{ title: 'Язык', value: 'ru', preview: 'Русский' },
	]

	const changeSelect = (e) => console.log(e);


	return (<>
		<main className={cls.settings}>
			<div className={classNames(['container', cls.settings__grid])}>
				<h2 className='title'>Settings</h2>
				<div className={cls.settings__music}>
					<span>Music</span>
					<Radio value={musicActive} setter={setMusicActive} />
				</div>
				<Select data={selectData} onChange={changeSelect} />
			</div>
		</main>
	</>);
}

export default Settings;