import React from 'react';

import { ReactComponent as TimerIcon } from 'assets/icons/timer.svg';
import { ReactComponent as RubleIcon } from 'assets/icons/ruble.svg';
import { Mdx, MdxFrontmatter } from 'types/graphql';
import ExcursionProperty from 'components/excursion-property';
import MDX from 'components/mdx';
import css from './excursion-content.module.scss';

export type ExcursionContentProps = {
  body: Mdx['html'];
  price: NonNullable<MdxFrontmatter['price']>;
  duration?: NonNullable<MdxFrontmatter['duration']>;
};

function ExcursionContent({ duration, price, body }: ExcursionContentProps) {
  return (
    <div className={css.content}>
      <div className={css.properties}>
        {duration && (
          <ExcursionProperty icon={<TimerIcon width="100%" />}>
            {duration}
          </ExcursionProperty>
        )}
        <ExcursionProperty icon={<RubleIcon width="100%" />}>
          {price} руб.
        </ExcursionProperty>
      </div>

      {body && <MDX>{body}</MDX>}
    </div>
  );
}

export default ExcursionContent;
