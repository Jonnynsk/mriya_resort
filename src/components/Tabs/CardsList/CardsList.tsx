import { FC } from 'react';

import { CardItem, CardItemProps } from '../CardItem/CardItem';

import s from './CardsList.module.sass';

interface CardsListProps {
	cards: CardItemProps[];
}

export const CardsList: FC<CardsListProps> = ({ cards }) => {
	return (
		<div className={s.cards}>
			{cards.map((card) => (
				<div key={card.id}>
					<CardItem
						image={card.image}
						percent={card.percent}
						text={card.text}
					/>
				</div>
			))}
		</div>
	);
};
