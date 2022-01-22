import React, { useCallback, useMemo, useState } from 'react';
import _ from 'lodash';

import { TestimonialFragment } from 'types/graphql';
import { Button } from 'components/ui';
import Testimonial from 'components/testimonial';
import css from './testimonials.module.scss';

type TestimonialsProps = {
  testimonials: TestimonialFragment[];
};

const TESTIMONIALS_GROUP_SIZE = 3;

function Testimonials({ testimonials }: TestimonialsProps) {
  const groupsCount = Math.ceil(testimonials.length / TESTIMONIALS_GROUP_SIZE);

  const groups = useMemo(
    () => _.chunk(testimonials, TESTIMONIALS_GROUP_SIZE),
    [testimonials],
  );

  const [shownGroupsCount, setShownGroupsCount] = useState(1);

  const shownGroups = groups.slice(0, shownGroupsCount);

  const onClickMore = useCallback(() => {
    setShownGroupsCount(s => s + 1);
  }, []);

  return (
    <div>
      {shownGroups.map((group, index) => (
        <div key={index} className={css.testimonialsGroup}>
          {group.map((item, itemIndex) => (
            <div key={itemIndex} className={css.testimonialItem}>
              <Testimonial testimonial={item} />
            </div>
          ))}
        </div>
      ))}

      {groupsCount > 1 && shownGroupsCount < groupsCount && (
        <Button
          className={css.moreTestimonialsButton}
          onClick={onClickMore}
          size="lg"
          isRounded
        >
          Показать ещё
        </Button>
      )}
    </div>
  );
}

export default Testimonials;
