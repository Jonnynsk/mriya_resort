import { FC } from 'react';

import s from './Button.module.sass';

interface ButtonProps {
	text: string;
	type: 'gold' | 'white';
	width?: number;
}

export const Button: FC<ButtonProps> = ({ text, type, width }) => {
	return (
		<div
			className={
				type === 'gold'
					? `${s.button} ${s.buttonGold}`
					: `${s.button} ${s.buttonWhite}`
			}
			style={{ width: `${width}px` }}
		>
			<p className={s.text}>{text}</p>
		</div>
	);
};
