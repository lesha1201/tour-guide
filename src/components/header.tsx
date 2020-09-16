import React, { useCallback, useState } from 'react';
import clsx from 'clsx';

import { ReactComponent as MenuIcon } from 'assets/icons/menu.svg';
import { toggleBodyScroll } from 'utils/dom';
import { PHONE_NUMBER } from 'constants/config';
import Link from './ui/link';
import ButtonIcon from './ui/button-icon';
import LogoText from './logo-text';
import * as css from './header.module.scss';

export type HeaderProps = {
  variant?: 'default' | 'light';
};

const NAV_ITEMS = [
  {
    name: 'Item 1',
  },
  {
    name: 'Item 2',
  },
  {
    name: 'Item 3',
  },
];

function Header({ variant }: HeaderProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const onClickMenu = useCallback(() => {
    setIsExpanded(s => {
      if (!s) {
        toggleBodyScroll('hidden');
      } else {
        toggleBodyScroll('auto');
      }

      return !s;
    });
  }, []);

  const isLight = variant === 'light';

  const headerCn = clsx({
    [css.header]: true,
    [css.headerLight]: isLight,
    [css.headerExpanded]: isExpanded,
  });

  return (
    <header className={headerCn}>
      <div className={css.mobHeader}>
        <LogoText color={isExpanded ? 'primary' : isLight ? 'white' : undefined} />

        <div className={css.mobNav}>
          <ButtonIcon className={css.mobNavIcon} onClick={onClickMenu}>
            <MenuIcon width="100%" />
          </ButtonIcon>
        </div>
      </div>

      <nav className={css.nav}>
        <ul className={css.navList}>
          {NAV_ITEMS.map(({ name }, index) => (
            <li key={index} className={css.navListItem}>
              <Link className={css.navListItemLink} color="inherit" href="#">
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
    </header>
  );
}

export default Header;
