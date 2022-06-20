import { FC } from 'react';

import hyphen from '../../../assets/images/hyphen.png';

import s from './Slide.module.sass';

export interface SlideProps {
	id?: number;
	pic1: string;
	mpic1: string;
	mpic2: string;
	mpic3: string;
	pic2: string;
	pic3: string;
	text1: string;
	text2: string;
	text3: string;
	title: string;
	mainText: string;
}

export const Slide: FC<SlideProps> = ({
	pic1,
	mpic1,
	mpic2,
	mpic3,
	pic2,
	pic3,
	text1,
	text2,
	text3,
	title,
	mainText,
}) => {
	return (
		<div className={s.slide}>
			<div className={s.first}>
				<div className={s.imgBig}>
					<img src={pic1} alt='pic1' />
				</div>
				<div className={s.imgSmall}>
					<img src={mpic1} alt='mpic1' />
				</div>
				<div className={s.text1}>{text1}</div>
				<div className={s.readMore}>
					<div className={s.readMoreText}>ЧИТАТЬ БОЛЬШЕ</div>
					<div className={s.hyphen}>
						<img src={hyphen} alt='hyphen' />
					</div>
				</div>
			</div>
			<div className={s.second}>
				<div className={s.imgBig}>
					<img src={pic2} alt='pic2' />
				</div>
				<div className={s.imgSmall}>
					<img src={mpic3} alt='mpic2' />
				</div>
				<div className={s.text2}>{text2}</div>
				<div className={s.readMore}>
					<div className={s.readMoreText}>ЧИТАТЬ БОЛЬШЕ</div>
					<div className={s.hyphen}>
						<img src={hyphen} alt='hyphen' />
					</div>
				</div>
			</div>
			<div className={s.desc}>
				<div className={s.descTitle}>{title}</div>
				<div className={s.descText}>{mainText}</div>
			</div>
			<div className={s.thirdBlock}>
				<div className={s.third}>
					<div className={s.imgBig}>
						<img src={pic3} alt='pic3' />
					</div>
					<div className={s.imgSmall}>
						<img src={mpic2} alt='mpic3' />
					</div>
					<div className={s.text3}>{text3}</div>
					<div className={s.readMore}>
						<div className={s.readMoreText}>ЧИТАТЬ БОЛЬШЕ</div>
						<div className={s.hyphen}>
							<img src={hyphen} alt='hyphen' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
