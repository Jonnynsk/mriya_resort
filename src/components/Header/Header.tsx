import { FC } from 'react';

import { ButtonBrg } from '../Buttons/ButtonBrg/ButtonBrg';
import { Menu } from '../Menu/Menu';
import logo from '../../assets/images/logo.png';
import key from '../../assets/images/key.png';
import key_mobile from '../../assets/images/mobile/key.png';

import s from './Header.module.sass';

interface HeaderProps {
	setToggle: (toggle: boolean) => void;
	toggle: boolean;
}

export const Header: FC<HeaderProps> = ({ setToggle, toggle }) => {
	return (
		<>
			<div className={s.header}>
				<div className={s.button}>
					<ButtonBrg type='open' onClick={() => setToggle(!toggle)} />
				</div>
				<div className={s.nav}>
					<div className={s.tab}>О КОМПЛЕКСЕ</div>
					<div className={s.tab}>БЛОГ</div>
					<div className={s.tab}>FAQ</div>
					<div className={s.tab}>КОНТАКТЫ</div>
				</div>
				<div className={s.logo}>
					<img src={logo} alt='logo' />
				</div>
				<div className={s.navLang}>
					<div className={s.langTitle}>RU</div>
					<div className={s.langTitle}>ENG</div>
				</div>
				<div className={s.navEnter}>
					<div className={s.enter}>
						<div>
							<img src={key} alt='enter' />
						</div>

						<div>
							<p className={s.enterText}>ВХОД</p>
						</div>
					</div>
					<div className={s.mobile}>8 800 500 6847</div>
				</div>
				<div className={s.key}>
					<img className={s.key_img} src={key_mobile} alt='enter' />
				</div>
			</div>
			{toggle && <Menu toggle={toggle} setToggle={setToggle} />}
		</>
	);
};
