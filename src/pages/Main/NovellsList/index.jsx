import React from 'react';
import cls from './style.module.scss';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import hit_img from '@images/ui/hit.png';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './slider.scss';


function NovellsList(props) {
	const { activeStory, novells } = useSelector(state => state.NovellsList);

	const swiperData = {
		spaceBetween: 30,
		slidesPerView: 2.3
	}

	return (<>
		<div className={cls.novells}>
			<div className={classNames(['container'])}>
				<Swiper {...swiperData}>
					{
						novells?.map(el => (
							<SwiperSlide key={el.id}>
								<div className={cls.novells__item}>
									{el.markHit && <img src={hit_img} data-mark="hit" />}
									<img src={el.preview} data-name="preview" />
									<h4>{el.name}</h4>
									<p>{el.ganre}</p>
								</div>
							</SwiperSlide>
						))
					}
				</Swiper>
			</div>
		</div>
	</>);
}

export default NovellsList;