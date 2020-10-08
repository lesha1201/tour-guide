import React from 'react';

import { EMAIL, PHONE_NUMBER, SOCIAL } from 'constants/config';
import Link from './ui/link';
import LogoText from './logo-text';
import Container from './container';
import * as css from './footer.module.scss';
import CirclesPattern from './circles-pattern';

const logoTextCn = {
  base: css.logoBase,
  icon: css.logoIcon,
};

const socialList = Object.values(SOCIAL);

function Footer() {
  return (
    <footer className={css.footer}>
      <CirclesPattern className={css.mobileDotsTopLeft} columns={6} rows={3} />
      <CirclesPattern className={css.desktopDotsTopLeft} columns={11} rows={3} />

      <Container className={css.container}>
        <LogoText className={logoTextCn} color="white" hasSubtitle />

        <div className={css.contactsBox}>
          <div className={css.contacts}>
            <Link
              className={css.link}
              href={PHONE_NUMBER.url}
              color="inherit"
              withUnderline
            >
              {PHONE_NUMBER.pretty}
            </Link>
            <Link className={css.link} href={EMAIL.url} color="inherit" withUnderline>
              {EMAIL.pretty}
            </Link>
          </div>
          <div className={css.socialMedias}>
            {socialList.map(({ icon: Icon, url }, index) => (
              <Link
                key={index}
                className={css.socialMedia}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon width="100%" />
              </Link>
            ))}
          </div>
        </div>
      </Container>

      <CirclesPattern className={css.mobileDotsBottomRight} columns={6} rows={3} />
      <CirclesPattern className={css.desktopDotsBottomRight} columns={11} rows={3} />
    </footer>
  );
}

export default Footer;
