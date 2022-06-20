import { FindBtn } from '../Buttons/FindBtn/FindBtn';
import s from './Filters.module.sass';
import { Inputs } from './Inputs/Inputs';

export const Filters = () => {
	return (
		<>
			<div className={s.bottomTitle}>Выберите свой отдых</div>
			<div className={s.filtersBlock}>
				<div className={s.filters}>
					<Inputs type='typeOfRest' />
					<Inputs type='days' />
					<Inputs type='persons' />
				</div>
				<div className={s.button}>
					<FindBtn />
				</div>
			</div>
		</>
	);
};
