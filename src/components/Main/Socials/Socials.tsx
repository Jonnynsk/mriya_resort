import { FC } from 'react';

import { SocialItem } from './SocialItem';
import facebook from '../../../assets/images/socials/facebook.png';
import twitter from '../../../assets/images/socials/twitter.png';
import instagram from '../../../assets/images/socials/instagram.png';
import facebookG from '../../../assets/images/socials/facebookG.png';
import twitterG from '../../../assets/images/socials/twitterG.png';
import instagramG from '../../../assets/images/socials/instagramG.png';

const socialsLinks = [
	{ id: 1, link: facebook },
	{ id: 2, link: twitter },
	{ id: 3, link: instagram },
];
const socialsGLinks = [
	{ id: 1, link: facebookG },
	{ id: 2, link: twitterG },
	{ id: 3, link: instagramG },
];

interface SocialsProps {
	type: 'white' | 'gold';
}

export const Socials: FC<SocialsProps> = ({ type }) => {
	switch (type) {
		case 'white':
			return (
				<>
					{socialsLinks.map((social: { id: number; link: string }) => {
						return (
							<div key={social.id}>
								<SocialItem link={social.link} type={type} />
							</div>
						);
					})}
				</>
			);
		case 'gold':
			return (
				<>
					{socialsGLinks.map((social: { id: number; link: string }) => {
						return (
							<div key={social.id}>
								<SocialItem link={social.link} type={type} />
							</div>
						);
					})}
				</>
			);
	}
};
