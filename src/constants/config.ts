import { ReactComponent as TelegramIcon } from 'assets/icons/telegram.svg';
import { ReactComponent as WhatsappIcon } from 'assets/icons/whatsapp.svg';
import { ReactComponent as InstagramIcon } from 'assets/icons/instagram.svg';

export const PHONE_NUMBER = {
  url: 'tel:+79001001010',
  pretty: '+7 (999) 100 10 10',
  firstName: 'Михаил',
};

export const EMAIL = {
  url: 'mailto:example@email.com',
  pretty: 'example@email.com',
};

export const SOCIAL = {
  telegram: {
    label: 'Telegram',
    url: '#',
    icon: TelegramIcon,
  },
  whatsapp: {
    label: 'WhatsApp',
    url: '#',
    icon: WhatsappIcon,
  },
  instagram: {
    label: 'Instagram',
    url: '#',
    icon: InstagramIcon,
  },
};

export const RECAPTCHA_KEY = process.env.GATSBY_RECAPTCHA_KEY as string;

export const FORMCARRY_CONTACT_FORM_ID = process.env
  .GATSBY_FORMCARRY_CONTACT_FORM_ID as string;
