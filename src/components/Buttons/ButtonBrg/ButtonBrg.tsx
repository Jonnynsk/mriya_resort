import { FC } from 'react';

import close from '../../../assets/images/close.png';
import open from '../../../assets/images/open.png';

import s from './ButtonBrg.module.sass';

interface ButtonBrgProps {
	type: 'close' | 'open';
	onClick: () => void;
}

export const ButtonBrg: FC<ButtonBrgProps> = ({ type, onClick }) => {
	return (
		<div className={s.button} onClick={onClick}>
			<div>
				{type === 'close' ? (
					<img src={close} alt='close' className={s.close} />
				) : (
					<img src={open} alt='open' className={s.open} />
				)}
			</div>
		</div>
	);
};
