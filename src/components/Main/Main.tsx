import { Flower } from './Flower/Flower';
import { Socials } from './Socials/Socials';
import { Description } from './Description/Description';
import { Weather } from './Weather/Weather';
import { DownBtn } from '../Buttons/DownBtn/DownBtn';
import { Filters } from '../Filters/Filters';
import { Slider } from '../Slider/Slider';
import { Tabs } from '../Tabs/Tabs';
import line from '../../assets/images/line.png';
import header_mobile from '../../assets/images/header_mobile.png';
import header_stroke from '../../assets/images/header_stroke.png';

import s from './Main.module.sass';
import { FC } from 'react';

interface MainProps {
	toggle: boolean
}

export const Main: FC<MainProps> = ({toggle}) => {
	return (
		<div className={toggle ? s.block_blurred: s.block}>
			<Flower />
			<div className={s.socials}>
				<Socials type='white' />
			</div>
			<Description />
			<div className={s.weather}>
				<Weather />
			</div>
			<div className={s.header_mobile}>
				<img src={header_mobile} alt='header_mobile' />
			</div>
			<div className={s.header_stroke}>
				<img src={header_stroke} alt='header_stroke' />
			</div>
			<div className={s.line}>
				<img src={line} alt='line' />
			</div>
			<div className={s.downBtn}>
				<DownBtn />
			</div>
			<Filters />
			<Tabs />
			<Slider />
		</div>
	);
};
