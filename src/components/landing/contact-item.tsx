import React from 'react';

import * as css from './contact-item.module.scss';

export type ContactItemProps = {
  icon: React.ReactNode;
  children: React.ReactNode;
};

function ContactItem({ icon, children }: ContactItemProps) {
  return (
    <div className={css.base}>
      <div className={css.icon}>{icon}</div>
      <div>{children}</div>
    </div>
  );
}

export default ContactItem;
