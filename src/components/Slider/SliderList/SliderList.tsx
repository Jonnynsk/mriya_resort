import { FC } from 'react';

import { Slide, SlideProps } from './../Slide/Slide';

interface SliderListProps {
	slides: SlideProps[];
	currentSlide: number;
}

export const SliderList: FC<SliderListProps> = ({ slides, currentSlide }) => {
	return (
		<>
			{slides.map((slide) => (
				<>{currentSlide === slide.id && <Slide {...slide} />}</>
			))}
		</>
	);
};
