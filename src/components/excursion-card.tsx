import clsx from 'clsx';
import React from 'react';

import { ReactComponent as TimerIcon } from 'assets/icons/timer.svg';
import { ReactComponent as RubleIcon } from 'assets/icons/ruble.svg';
import ExcursionProperty from './excursion-property';
import * as css from './excursion-card.module.scss';

export type ExcursionCardProps = {
  coverImgSrc: string;
  title: string;
  duration: string;
  price: number;
  description: string;
  className?: {
    card?: string;
    cover?: string;
    coverImg?: string;
    content?: string;
    title?: string;
    properties?: string;
  };
};

function ExcursionCard({
  coverImgSrc,
  title,
  duration,
  price,
  description,
  className,
}: ExcursionCardProps) {
  const cn = {
    card: clsx(className?.card, css.card),
    cover: clsx(className?.cover, css.cover),
    coverImg: clsx(className?.coverImg, css.coverImg),
    content: clsx(className?.content, css.content),
    title: clsx(className?.title, css.title),
    properties: clsx(className?.properties, css.properties),
  };

  return (
    <div className={cn.card}>
      <div className={cn.cover}>
        <img className={cn.coverImg} src={coverImgSrc} />
      </div>

      <div className={cn.content}>
        <h2 className={cn.title}>{title}</h2>

        <div className={cn.properties}>
          <ExcursionProperty icon={<TimerIcon width="100%" />}>
            {duration}
          </ExcursionProperty>
          <ExcursionProperty icon={<RubleIcon width="100%" />}>
            {price} руб.
          </ExcursionProperty>
        </div>

        <p>{description}</p>
      </div>
    </div>
  );
}

export default ExcursionCard;
