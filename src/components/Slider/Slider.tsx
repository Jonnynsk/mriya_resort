import { SliderList } from './SliderList/SliderList';
import linesLeft from '../../assets/images/linesLeft.png';
import linesRight from '../../assets/images/linesRight.png';
import left from '../../assets/images/left.png';
import right from '../../assets/images/right.png';
import pic1 from '../../assets/images/slider/pic1.png';
import mpic1 from '../../assets/images/mobile/mpic1.png';
import mpic2 from '../../assets/images/mobile/mpic2.png';
import mpic3 from '../../assets/images/mobile/mpic3.png';
import pic2 from '../../assets/images/slider/pic2.png';
import pic3 from '../../assets/images/slider/pic3.png';

import s from './Slider.module.sass';
import { useState } from 'react';

const slides = [
	{
		id: 1,
		pic1: pic1,
		mpic1: mpic1,
		mpic2: mpic2,
		mpic3: mpic3,
		pic2: pic2,
		pic3: pic3,
		text1: 'Заниматесь в тренажерном зале и посещайте групповые тренировки',
		text2: 'Питаться в ресторане шведской линии согласно выбранному варианту',
		text3: 'Исследовать все общедоступные зоны и территории комплекса',
		title: 'ОЗДОРОВЛЕНИЕ 1',
		mainText:
			'Mriya Resort — это маленький город со множеством возможностей, каждый найдет себе занятие по вкусу',
	},
	{
		id: 2,
		pic1: pic1,
		mpic1: mpic1,
		mpic2: mpic2,
		mpic3: mpic3,
		pic2: pic2,
		pic3: pic3,
		text1: 'Питаться в ресторане шведской и посещайте групповые тренировки',
		text2: 'Питаться в ресторане шведской линии согласно выбранному варианту',
		text3: 'Исследовать все общедоступные зоны и территории комплекса',
		title: 'ОЗДОРОВЛЕНИЕ 2',
		mainText:
			'Mriya Resort — это маленький город со множеством возможностей, каждый найдет себе занятие по вкусу',
	},
	{
		id: 3,
		pic1: pic1,
		mpic1: mpic1,
		mpic2: mpic2,
		mpic3: mpic3,
		pic2: pic2,
		pic3: pic3,
		text1: 'Посещайте групповые тренировкии и заниматесь в тренажерном зале',
		text2: 'Питаться в ресторане шведской линии согласно выбранному варианту',
		text3: 'Исследовать все общедоступные зоны и территории комплекса',
		title: 'ОЗДОРОВЛЕНИЕ 3',
		mainText:
			'Mriya Resort — это маленький город со множеством возможностей, каждый найдет себе занятие по вкусу',
	},
];

export const Slider = () => {
	const [currentSlide, setCurrentSlide] = useState<number>(1);
	return (
		<div className={s.sliderBlock}>
			<div className={s.sliderNav}>
				<div className={s.title}>Все включено</div>
				<div className={s.buttons}>
					<div className={s.button}>
						<img
							src={left}
							alt='left'
							onClick={() =>
								currentSlide === 1
									? setCurrentSlide(3)
									: setCurrentSlide(currentSlide - 1)
							}
						/>
					</div>
					<div className={s.button}>
						<img
							src={right}
							alt='right'
							onClick={() =>
								currentSlide === 3
									? setCurrentSlide(1)
									: setCurrentSlide(currentSlide + 1)
							}
						/>
					</div>
				</div>
			</div>
			<SliderList slides={slides} currentSlide={currentSlide} />
			<img className={s.linesLeft} src={linesLeft} alt='linesLeft' />
			<img className={s.linesRight} src={linesRight} alt='linesRight' />
		</div>
	);
};
