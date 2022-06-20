import cloud from '../../../assets/images/weather/cloud.png';
import temp from '../../../assets/images/weather/temp.png';
import pin from '../../../assets/images/weather/pin.png';

import s from './Weather.module.sass';

export const Weather = () => {
	return (
		<>
			<div className={s.top}>
				<div className={s.cloud}>
					<img src={cloud} alt='cloud' />
				</div>
				<div className={s.temp}>
					<img src={temp} alt='temperature' />
				</div>
			</div>
			<div className={s.title}>Облачно</div>
			<div className={s.bottom}>
				<div className={s.pin}>
					<img src={pin} alt='pin' />
				</div>
				<div className={s.place}>
					<p>Ялта, Россия</p>
				</div>
			</div>
		</>
	);
};
