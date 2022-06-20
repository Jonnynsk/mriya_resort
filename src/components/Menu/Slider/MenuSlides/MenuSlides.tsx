import { FC } from 'react';
import { MenuSlide, MenuSlideProps } from '../MenuSlide/MenuSlide';

interface MenuSlidesProps {
	slides: MenuSlideProps[];
	currentSlide: number;
}

export const MenuSlides: FC<MenuSlidesProps> = ({ slides, currentSlide }) => {
	return (
		<>
			{slides.map((slide) => (
				<>
					{currentSlide === slide.id && (
						<MenuSlide title={slide.title} days={slide.days} />
					)}
				</>
			))}
		</>
	);
};
