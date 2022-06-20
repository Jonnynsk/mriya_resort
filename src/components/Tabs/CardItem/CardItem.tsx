import { FC } from 'react';

import shadow from '../../../assets/images/cards/shadow.png';

import s from './CardItem.module.sass';

export interface CardItemProps {
	id?: number;
	image: string;
	percent: number;
	text: string;
}

export const CardItem: FC<CardItemProps> = ({ image, percent, text }) => {
	return (
		<div className={s.card}>
			<div>
				<img src={image} alt='card' />
			</div>
			<img className={s.shadow} src={shadow} alt='shadow' />
			<div className={s.cardInfo}>
				<div className={s.percent}>-{percent}%</div>
				<div className={s.text}>{text}</div>
			</div>
		</div>
	);
};
