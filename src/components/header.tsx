import React from 'react';
import clsx from 'clsx';

import Link from './ui/link';
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
  const headerCn = clsx({
    [css.header]: true,
    [css.headerLight]: variant === 'light',
  });

  return (
    <header className={headerCn}>
      <LogoText />

      <nav className={css.nav}>
        <ul className={css.navList}>
          {NAV_ITEMS.map(({ name }, index) => (
            <li key={index} className={css.navListItem}>
              <Link className={css.navListItemLink} href="#">
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className={css.ctaBlock}>
        <Link href="tel:+79001001010" withUnderline>
          +7 (900) 100 10 10
        </Link>
      </div>

      <div className={css.mobNav}>Burger Icon</div>
    </header>
  );
}

export default Header;
