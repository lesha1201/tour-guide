import React from 'react';

import Link, { LinkProps } from 'components/ui/link';
import * as css from './contact-item.module.scss';

export type ContactItemProps = Omit<LinkProps<'a'>, 'as'> & {
  icon: React.ReactNode;
  children: React.ReactNode;
};

function ContactItem({ icon, children, ...rest }: ContactItemProps) {
  return (
    <Link className={css.base} {...rest}>
      <div className={css.icon}>{icon}</div>
      <div>{children}</div>
    </Link>
  );
}

export default ContactItem;
