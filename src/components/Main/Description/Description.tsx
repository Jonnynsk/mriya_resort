import { Button } from '../../Buttons/Button/Button';
import waves from '../../../assets/images/waves.png';

import s from './Description.module.sass';

export const Description = () => {
	return (
		<>
			<div className={s.waves}>
				<img src={waves} alt='waves' />
			</div>
			<div className={s.description}>
				<div className={s.title}>FAMILY & HEALTH CLUB</div>
				<div className={s.mainTitle}>Mriya Resort</div>
				<div className={s.secondTitle}>
					Российский курорт для всей семьи на берегу черного моря
				</div>
				<div className={s.buttons}>
					<div className={s.buttonLeft}>
						<Button text='НАЙТИ НОМЕР' type='gold' />
					</div>
					<div>
						<Button text='3D ТУР' type='white' />
					</div>
				</div>
			</div>
		</>
	);
};
