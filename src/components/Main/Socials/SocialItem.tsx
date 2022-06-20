import { FC } from 'react';

import s from './SocialItem.module.sass';

interface SocialItemProps {
	link: string;
	type: 'white' | 'gold';
}

export const SocialItem: FC<SocialItemProps> = ({ link, type }) => {
	return (
		<div className={type === 'white' ? s.circle : s.circleG}>
			<div className={type === 'white' ? s.innerCircle : s.innerCircleG}>
				<img src={link} alt='social' />
			</div>
		</div>
	);
};
