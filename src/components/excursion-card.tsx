import clsx from 'clsx';
import React from 'react';
import Img, { FluidObject } from 'gatsby-image';

import { ReactComponent as TimerIcon } from 'assets/icons/timer.svg';
import { ReactComponent as RubleIcon } from 'assets/icons/ruble.svg';
import ExcursionProperty from './excursion-property';
import css from './excursion-card.module.scss';

export type ExcursionCardProps = {
  coverImage: {
    fluid?: FluidObject;
  };
  title: string;
  price: number;
  description: string;
  duration?: string;
  className?: {
    card?: string;
    cover?: string;
    coverImgWrapper?: string;
    coverImg?: string;
    content?: string;
    title?: string;
    properties?: string;
  };
};

function ExcursionCard({
  coverImage,
  title,
  duration,
  price,
  description,
  className,
}: ExcursionCardProps) {
  const cn = {
    card: clsx(className?.card, css.card),
    cover: clsx(className?.cover, css.cover),
    coverImgWrapper: clsx(className?.coverImgWrapper, css.coverImgWrapper),
    coverImg: clsx(className?.coverImg, css.coverImg),
    content: clsx(className?.content, css.content),
    title: clsx(className?.title, css.title),
    properties: clsx(className?.properties, css.properties),
  };

  return (
    <div className={cn.card}>
      <div className={cn.cover}>
        <div className={cn.coverImgWrapper}>
          {coverImage.fluid && <Img className={cn.coverImg} fluid={coverImage.fluid} />}
        </div>
      </div>

      <div className={cn.content}>
        <h2 className={cn.title}>{title}</h2>

        <div className={cn.properties}>
          {duration && (
            <ExcursionProperty icon={<TimerIcon width="100%" />}>
              {duration}
            </ExcursionProperty>
          )}
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
