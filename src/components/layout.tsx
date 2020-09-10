import React from 'react';

import Header from './header';
import Footer from './footer';
import * as css from './layout.module.scss';

export type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className={css.wrapper}>
      <Header />
      <main className={css.content}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
