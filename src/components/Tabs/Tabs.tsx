import { useState } from 'react';

import { CardsList } from './CardsList/CardsList';
import one from '../../assets/images/cards/one.png';
import two from '../../assets/images/cards/two.png';
import backLeft from '../../assets/images/backLeft.png';
import backRight from '../../assets/images/backRight.png';
import wave from '../../assets/images/wave.png';
import flowerLogo from '../../assets/images/flowerLogo.png';
import tabLeft from '../../assets/images/tabLeft.png';
import tabRight from '../../assets/images/tabRight.png';
import mobile_right from '../../assets/images/mobile_right.png';

import s from './Tabs.module.sass';
import { Button } from '../Buttons/Button/Button';

const specialsCards = [
	{
		id: 1,
		image: one,
		percent: 20,
		text: 'Для тех кто рядом',
	},
	{
		id: 2,
		image: two,
		percent: 10,
		text: 'Раннее бронирование',
	},
];
const playbillCards = [
	{
		id: 1,
		image: two,
		percent: 10,
		text: 'Для тех кто рядом',
	},
];
const categoriesCards = [
	{
		id: 1,
		image: one,
		percent: 20,
		text: 'Для тех кто рядом',
	},
	{
		id: 2,
		image: two,
		percent: 15,
		text: 'Раннее бронирование',
	},
	{
		id: 3,
		image: one,
		percent: 25,
		text: 'Раннее бронирование',
	},
];

export const Tabs = () => {
	const [currentSlide, setCurrentSlide] = useState<number>(1);

	const onChangeRightTab = () => {
		if (currentSlide !== 3) {
			setCurrentSlide(currentSlide + 1);
		} else {
			setCurrentSlide(1);
		}
	};
	const onChangeLeftTab = () => {
		if (currentSlide !== 1) {
			setCurrentSlide(currentSlide - 1);
		} else {
			setCurrentSlide(3);
		}
	};

	return (
		<>
			<div className={s.buttons}>
				<div
					className={currentSlide === 1 ? s.active : s.tab}
					onClick={() => {
						setCurrentSlide(1);
					}}
				>
					СПЕЦПРЕДЛОЖЕНИЯ
				</div>
				<div
					className={currentSlide === 2 ? s.active : s.tab}
					onClick={() => {
						setCurrentSlide(2);
					}}
				>
					АФИША
				</div>
				<div
					className={currentSlide === 3 ? s.active : s.tab}
					onClick={() => {
						setCurrentSlide(3);
					}}
				>
					КАТЕГОРИИ&nbsp;ОТДЫХА
				</div>
				<div className={s.tabNav}>
					<div className={s.arrow} onClick={onChangeLeftTab}>
						<img alt='left' src={tabLeft} />
					</div>
					<div className={s.arrow} onClick={onChangeRightTab}>
						<img alt='right' src={tabRight} />
					</div>
				</div>
			</div>
			{currentSlide === 1 && (
				<div>
					<CardsList cards={specialsCards} />
				</div>
			)}
			{currentSlide === 2 && (
				<div>
					<CardsList cards={playbillCards} />
				</div>
			)}
			{currentSlide === 3 && (
				<div>
					<CardsList cards={categoriesCards} />
				</div>
			)}
			<div className={s.backLeft}>
				<img src={backLeft} alt='backLeft' />
			</div>
			<div className={s.backRight}>
				<img src={backRight} alt='backRight' />
			</div>
			<div className={s.description}>
				<div className={s.wave}>
					<img src={wave} alt='wave' />
				</div>
				<div className={s.title1}>Mriya Resort & SPA —</div>
				<div className={s.title2}> больше чем просто отдых</div>
				<img className={s.flower} src={flowerLogo} alt='flowerLogo' />
				<div className={s.about}>
					В окружении необычного природного ландшафта курорт становится
					по-настоящему уникальным. Это место идеально для тех, кто больше гор
					любит только море.
				</div>
				<img className={s.mobile_right} src={mobile_right} alt='mobile_right' />
				<div className={s.button}>
					<Button text='О КОМПЛЕКСЕ' type='white' />
				</div>
			</div>
		</>
	);
};
