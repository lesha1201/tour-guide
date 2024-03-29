import React, { useCallback, useState } from 'react';
import clsx from 'clsx';
import { Link as RouterLink } from 'gatsby';

import { ReactComponent as MenuIcon } from 'assets/icons/menu.svg';
import { toggleBodyScroll } from 'utils/dom';
import { PHONE_NUMBER } from 'constants/config';
import { SECTIONS } from 'constants/sections';
import { Link, ButtonIcon } from './ui';
import LogoText from './logo-text';
import Container from './container';
import css from './header.module.scss';

export type HeaderProps = {
  variant?: 'default' | 'light';
};

const NAV_ITEMS = SECTIONS.filter(({ isShownInMenu }) => isShownInMenu).map(
  ({ name, id }) => ({
    name,
    href: `/#${id}`,
  }),
);

const logoTextCn = {
  title: css.logoTextTitle,
};

function Header({ variant }: HeaderProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsExpanded(s => {
      if (!s) {
        toggleBodyScroll('hidden');
      } else {
        toggleBodyScroll('auto');
      }

      return !s;
    });
  }, []);

  const hideMenu = useCallback(() => {
    setIsExpanded(s => {
      toggleBodyScroll('auto');

      return false;
    });
  }, []);

  const onClickMenu = useCallback(() => {
    toggleMenu();
  }, [toggleMenu]);

  const onClickMenuItem = useCallback(() => {
    hideMenu();
  }, [hideMenu]);

  const isLight = variant === 'light';

  const headerCn = clsx({
    [css.header]: true,
    [css.headerLight]: isLight,
    [css.headerExpanded]: isExpanded,
  });

  return (
    <Container as="header" className={headerCn}>
      <div className={css.mobHeader}>
        <RouterLink className={css.logoLink} to="/">
          <LogoText
            className={logoTextCn}
            color={isExpanded ? 'primary' : isLight ? 'white' : undefined}
          />
        </RouterLink>

        <div className={css.mobNav}>
          <ButtonIcon className={css.mobNavIcon} onClick={onClickMenu}>
            <MenuIcon width="100%" />
          </ButtonIcon>
        </div>
      </div>

      <nav className={css.nav}>
        <ul className={css.navList}>
          {NAV_ITEMS.map(({ name, href }, index) => (
            <li key={index} className={css.navListItem}>
              <Link
                as={RouterLink}
                className={css.navListItemLink}
                onClick={onClickMenuItem}
                color="inherit"
                to={href}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className={css.ctaBlock}>
        <Link href={PHONE_NUMBER.url} color="inherit" withUnderline>
          {PHONE_NUMBER.pretty}
        </Link>
      </div>
    </Container>
  );
}

export default Header;
