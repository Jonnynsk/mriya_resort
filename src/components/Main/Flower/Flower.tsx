import flower from '../../../assets/images/flower.png';
import flower_stroke from '../../../assets/images/flower_stroke.png';
import intersect from '../../../assets/images/intersect.png';
import intersect_stroke from '../../../assets/images/intersect_stroke.png';

import s from './Flower.module.sass';

export const Flower = () => {
	return (
		<>
			<div className={s.flower}>
				<img src={flower} alt='flower' />
			</div>
			<div className={s.flower_stroke}>
				<img src={flower_stroke} alt='flower' />
			</div>
			<div className={s.intersect}>
				<img src={intersect} alt='flower' />
			</div>
			<div className={s.intersect_stroke}>
				<img src={intersect_stroke} alt='flower' />
			</div>
		</>
	);
};
