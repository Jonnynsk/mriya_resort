import { FC, useState } from 'react';

import { ButtonBrg } from '../Buttons/ButtonBrg/ButtonBrg';
import { Socials } from '../Main/Socials/Socials';
import { Slider } from './Slider/Slider';
import logo from '../../assets/images/logo.png';
import key from '../../assets/images/key.png';
import lineLarge from '../../assets/images/lineLarge.png';
import lineLargest from '../../assets/images/lineLargest.png';
import bottomLine from '../../assets/images/bottomLine.png';
import arrowRight from '../../assets/images/arrowRight.png';

import s from './Menu.module.sass';
import { Button } from '../Buttons/Button/Button';

const categories = [
	{
		id: 1,
		name: 'Размещение',
		subMenu: [
			{
				id: 1,
				name: 'Клиника персонализированной медицины',
			},
			{
				id: 2,
				name: 'Медицинский центр',
			},
			{
				id: 3,
				info: 'Международные стандарты лечения и современные методики в сочетании с высококлассным сервисом и проживанием в одном из лучших семейных курортов мира Mriya Resort & SPA 5* ',
			},
		],
	},
	{
		id: 2,
		name: 'Медицина',
		subMenu: [
			{
				id: 1,
				name: 'Клиника персонализированной медицины',
			},
			{
				id: 2,
				name: 'Медицинский центр',
			},
			{
				id: 3,
				info: 'Международные стандарты лечения и современные методики в сочетании с высококлассным сервисом и проживанием в одном из лучших семейных курортов мира Mriya Resort & SPA 5* ',
			},
		],
	},
	{
		id: 3,
		name: 'Мероприятия',
		subMenu: [
			{
				id: 1,
				name: 'trtttы',
			},
			{
				id: 2,
				name: 'Медицинский центр',
			},
			{
				id: 3,
				info: 'Международные стандарты лечения и современные методики в сочетании с высококлассным сервисом и проживанием в одном из лучших семейных курортов мира Mriya Resort & SPA 5* ',
			},
		],
	},
	{
		id: 4,
		name: 'Красота и восстановление',
		subMenu: [
			{
				id: 1,
				name: 'Клиника персонализированной медицины',
			},
			{
				id: 2,
				name: 'Медицинский центр',
			},
		],
	},
	{
		id: 5,
		name: 'Бары и рестораны',
		subMenu: [
			{
				id: 1,
				name: 'Клиника персонализированной медицины',
			},
			{
				id: 2,
				name: 'Медицинский центр',
			},
		],
	},
	{
		id: 6,
		name: 'Развлечения',
		subMenu: [
			{
				id: 1,
				name: 'Клиника персонализированной медицины',
			},
			{
				id: 2,
				name: 'Медицинский центр',
			},
			{
				id: 3,
				info: 'Международные стандарты лечения и современные методики в сочетании с высококлассным сервисом и проживанием в одном из лучших семейных курортов мира Mriya Resort & SPA 5* ',
			},
		],
	},
	{
		id: 7,
		name: 'Спорт',
		subMenu: [
			{
				id: 1,
				name: 'Клиника персонализированной медицины',
			},
			{
				id: 2,
				name: 'Медицинский центр',
			},
		],
	},
	{
		id: 8,
		name: 'Детям',
		subMenu: [
			{
				id: 1,
				name: 'Клиника персонализированной медицины',
			},
			{
				id: 2,
				name: 'Медицинский центр',
			},
		],
	},
	{
		id: 9,
		name: 'Транспорт',
		subMenu: [
			{
				id: 1,
				name: 'Клиника персонализированной медицины',
			},
			{
				id: 2,
				name: 'Медицинский центр',
			},
		],
	},
];

interface CategoryProps {
	id: number;
	name: string;
}

const Category: FC<CategoryProps> = ({ name }) => {
	return (
		<div className={s.button}>
			<p className={s.buttonText}>{name}</p>
			<img className={s.arrow} src={arrowRight} alt='arrowRight' />
		</div>
	);
};

interface MenuProps {
	toggle: boolean;
	setToggle: (toggle: boolean) => void;
}

export const Menu: FC<MenuProps> = ({ toggle, setToggle }) => {
	const [drop, setDrop] = useState<number | undefined>(0);
	console.log(drop);

	const { innerWidth } = window;

	return (
		<>
			<div className={s.container}>
				<div className={s.buttonBrg}>
					<ButtonBrg type='close' onClick={() => setToggle(!toggle)} />
				</div>
				<div className={s.header}>
					<div className={s.lang}>RU</div>
					<img className={s.logo} src={logo} alt='logo' />
					<div className={s.nav}>
						<div className={s.tab}>О КОМПЛЕКСЕ</div>
						<div className={s.tab}>БЛОГ</div>
						<div className={s.tab}>FAQ</div>
						<div className={s.tab}>КОНТАКТЫ</div>
						<div className={s.enter}>
							<div>
								<img className={s.key} src={key} alt='enter' />
							</div>
							<div>
								<p className={s.enterText}>ВХОД</p>
							</div>
						</div>
					</div>
				</div>
				<div className={s.menu}>
					<div className={s.categories}>
						{categories.map((category: CategoryProps) => {
							return (
								<div
									onMouseEnter={() => setDrop(category.id)}
									onMouseLeave={() => setDrop(undefined)}
									onClick={() => innerWidth <= 360 && setDrop(category.id)}
								>
									<Category name={category.name} id={category.id} />
									{innerWidth <= 360 && drop === category.id && (
										<div className={s.categoriesSubMenu}>
											{categories.map(
												(item) =>
													drop === item.id && (
														<>
															{item?.subMenu?.map((sub) => (
																<>
																	<div className={s.subText}>{sub.name}</div>
																</>
															))}
														</>
													)
											)}
										</div>
									)}
								</div>
							);
						})}
					</div>
					{drop && (
						<div
							className={s.categoriesMenu}
							onMouseEnter={() => setDrop(drop)}
						>
							<>
								{innerWidth > 360 && (
									<>
										<div className={s.categoriesSubMenu}>
											{categories.map(
												(item) =>
													drop === item.id && (
														<>
															{item?.subMenu?.map((sub) => (
																<>
																	<div className={s.subText}>{sub.name}</div>
																</>
															))}
														</>
													)
											)}
										</div>
										<div>
											{categories.map(
												(item) =>
													drop === item.id && (
														<>
															{item?.subMenu?.map((sub) => (
																<>
																	<div className={s.info}>{sub.info}</div>
																</>
															))}
														</>
													)
											)}
										</div>
									</>
								)}
							</>
						</div>
					)}
				</div>
				<Slider />
				<div className={s.buttonFind}>
					<Button type='gold' text='НАЙТИ НОМЕР' width={328} />
				</div>
				<div className={s.navMobile}>
					<div className={s.tabMobile}>О КОМПЛЕКСЕ</div>
					<div className={s.tabMobile}>БЛОГ</div>
					<div className={s.tabMobile}>FAQ</div>
					<div className={s.tabMobile}>АФИША</div>
					<div className={s.tabMobile}>СПЕЦПРЕДЛОЖЕНИЯ</div>
					<div className={s.tabMobile}>ВАЖНАЯ ИНФОРМАЦИЯ</div>
					<div className={s.tabMobile}>КОНТАКТЫ</div>
				</div>
				<div className={s.phone}>8 800 500 6847</div>
				<div className={s.mail}>INFO@MRIYARESORT.COM</div>
				<img className={s.lineLarge} src={lineLarge} alt='lineLarge' />
				<img className={s.lineLargest} src={lineLargest} alt='lineLargest' />
				<img className={s.bottomLine} src={bottomLine} alt='bottomLine' />
				<div className={s.socials}>
					<Socials type='gold' />
				</div>
			</div>
		</>
	);
};
