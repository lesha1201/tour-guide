import React from 'react';

import css from './layout.module.scss';

export type LayoutProps = {
  header: React.ReactNode;
  content: React.ReactNode;
  footer: React.ReactNode;
};

function Layout({ header, content, footer }: LayoutProps) {
  return (
    <div className={css.wrapper}>
      {header}
      <main className={css.content}>{content}</main>
      {footer}
    </div>
  );
}

export default Layout;
