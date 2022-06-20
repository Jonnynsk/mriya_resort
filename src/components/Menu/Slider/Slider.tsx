import { FC, useState } from 'react';

import { MenuSlides } from './MenuSlides/MenuSlides';
import sliderDot from '../../../assets/images/sliderDot.png';
import sliderActiveDot from '../../../assets/images/sliderActiveDot.png';
import sliderActiveArc from '../../../assets/images/sliderActiveArc.png';

import s from './Slider.module.sass';

const slides = [
	{ id: 1, title: 'Антистресс', days: '10-21' },
	{ id: 2, title: 'Медитация', days: '15-25' },
	{ id: 3, title: 'Восстановление', days: '8-17' },
];

interface ActiveSlideProps {
	setCurrentSlide: (currentSlide: number) => void;
	currentSlide: number;
}

const ActiveSlide: FC<ActiveSlideProps> = ({ setCurrentSlide }: any) => {
	return (
		<div
			className={s.activeDot}
			onClick={(currentSlide) => setCurrentSlide(currentSlide)}
		>
			<div className={s.dot}>
				<img src={sliderActiveArc} alt='active' />
				<img src={sliderActiveDot} className={s.arc} alt='active' />
			</div>
		</div>
	);
};

export const Slider = () => {
	const [currentSlide, setCurrentSlide] = useState<number>(1);

    const autoSlide = () => {
        setTimeout(() => {
            setCurrentSlide(currentSlide + 1)
            if (currentSlide === 3) {
                setCurrentSlide(1)
            }
        }, 3000)
    }
    autoSlide()

	return (
		<>
			<div className={s.sliderNav}>
				<div className={s.buttons}>
					{currentSlide === 1 ? (
						<ActiveSlide
							setCurrentSlide={setCurrentSlide}
							currentSlide={currentSlide}
						/>
					) : (
						<div className={s.dot} onClick={() => setCurrentSlide(1)}>
							<img src={sliderDot} alt='left' />
						</div>
					)}
					{currentSlide === 2 ? (
						<ActiveSlide
							setCurrentSlide={setCurrentSlide}
							currentSlide={currentSlide}
						/>
					) : (
						<div className={s.dot} onClick={() => setCurrentSlide(2)}>
							<img src={sliderDot} alt='middle' />
						</div>
					)}
					{currentSlide === 3 ? (
						<ActiveSlide
							setCurrentSlide={setCurrentSlide}
							currentSlide={currentSlide}
						/>
					) : (
						<div className={s.dot} onClick={() => setCurrentSlide(3)}>
							<img src={sliderDot} alt='right' />
						</div>
					)}
				</div>
			</div>
			<div className={s.menuSlider}>
				<MenuSlides slides={slides} currentSlide={currentSlide} />
			</div>
		</>
	);
};
