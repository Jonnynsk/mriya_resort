import { FC } from 'react';
import menuPhoto from '../../../../assets/images/menuPhoto.png';
import shadowBig from '../../../../assets/images/shadowBig.png';
import { Button } from '../../../Buttons/Button/Button';

import s from './MenuSlide.module.sass';

export interface MenuSlideProps {
	id?: number;
	title: string;
	days: string;
}

export const MenuSlide: FC<MenuSlideProps> = ({ title, days }) => {
	return (
		<div className={s.slider}>
			<img className={s.menuPhoto} src={menuPhoto} alt='menuPhoto' />
			<div>
				<img className={s.shadowBig} src={shadowBig} alt='shadowBig' />
			</div>
			<div className={s.desc}>
				<div className={s.title}>{title}</div>
				<div className={s.days}>{days} дня</div>
			</div>
			<div className={s.button}>
				<Button text='ПОДРОБНЕЕ' type='gold' />
			</div>
		</div>
	);
};
