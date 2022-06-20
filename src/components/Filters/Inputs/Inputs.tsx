import { FC } from 'react';

import arrow from '../../../assets/images/inputs/arrow.png';
import calendar from '../../../assets/images/inputs/calendar.png';
import person from '../../../assets/images/inputs/person.png';

import s from './Inputs.module.sass';

interface InputsProps {
	type: 'typeOfRest' | 'days' | 'persons';
}

export const Inputs: FC<InputsProps> = ({ type }) => {
	switch (type) {
		case 'typeOfRest':
			return (
				<div className={`${s.input} ${s.typeOfRest}`}>
					<div>Семейный отдых</div>
					<div className={s.badge}>
						<img src={arrow} alt='arrow' />
					</div>
				</div>
			);
		case 'days':
			return (
				<div className={`${s.input} ${s.days}`}>
					<div>пт, 8 мая — вс, 17 мая</div>
					<div className={s.badge}>
						<img src={calendar} alt='calendar' />
					</div>
				</div>
			);
		case 'persons':
			return (
				<div className={`${s.input} ${s.persons}`}>
					<div>2 взрослых • без детей • 1 номер</div>
					<div className={s.badge}>
						<img src={person} alt='calendar' />
					</div>
				</div>
			);
	}
};
