import React from 'react';

import LogoText from './logo-text';
import { Container } from './container';
import * as css from './footer.module.scss';

const logoTextCn = {
  icon: css.logoIcon,
};

function Footer() {
  return (
    <footer className={css.footer}>
      <Container>
        <LogoText className={logoTextCn} color="white" hasSubtitle />
      </Container>
    </footer>
  );
}

export default Footer;
