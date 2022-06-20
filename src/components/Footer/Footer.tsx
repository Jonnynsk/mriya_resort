import tablet from '../../assets/images/tablet.png'
import mriya_resort from '../../assets/images/mriya_resort.png'
import logo from '../../assets/images/logo.png'
import mobileFooter from '../../assets/images/mobileFooter.png'

import s from './Footer.module.sass'
import { FC } from 'react'

interface FooterProps {
	toggle: boolean
}

export const Footer: FC<FooterProps> = ({toggle}) => {
  return (
    <div className={toggle ? s.footer_blurred : ''}>
        <img className={s.tablet} src={tablet} alt='tablet' />
        <img className={s.mriya_resort} src={mriya_resort} alt='mriya_resort' />
        <img className={s.mobileFooter} src={mobileFooter} alt='mobileFooter' />
        <img className={s.logo} src={logo} alt='logo' />
    </div>
  )
}

 