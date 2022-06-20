import arrow from '../../../assets/images/arrow.png';

import s from './DownBtn.module.sass';

export const DownBtn = () => {
	return (
		<div className={s.circle}>
			<img src={arrow} alt='arrow' />
		</div>
	);
};
