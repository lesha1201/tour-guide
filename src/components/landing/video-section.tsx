import React from 'react';

import CirclesPattern from 'components/circles-pattern';
import Section, { SectionProps } from './section';
import css from './video-section.module.scss';

export type VideoSectionProps = Partial<SectionProps>;

function VideoSection(props: VideoSectionProps) {
  return (
    <Section {...props}>
      <div className={css.videoBox}>
        <CirclesPattern className={css.dotsTopLeft} rows={3} columns={10} />
        <iframe
          src="https://player.vimeo.com/video/399054425?color=005fff&byline=0&portrait=0"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; fullscreen"
        />
        <CirclesPattern className={css.dotsBottomRight} rows={3} columns={10} />
      </div>
    </Section>
  );
}

export default VideoSection;
