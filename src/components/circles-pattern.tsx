import React, { useMemo } from 'react';

export type CirclesPatternProps = React.SVGAttributes<SVGElement> & {
  rows: number;
  columns: number;
  space: number;
  size: number;
};

function calculateLength({
  count,
  size,
  space,
}: {
  count: number;
  size: number;
  space: number;
}) {
  return count * size + space * 2 * Math.max(count - 1, 0);
}

function CirclesPattern({ rows, columns, space, size, ...rest }: CirclesPatternProps) {
  const height = useMemo(() => calculateLength({ count: rows, size, space }), [
    rows,
    size,
    space,
  ]);

  const width = useMemo(() => calculateLength({ count: columns, size, space }), [
    columns,
    size,
    space,
  ]);

  const radius = size / 2;

  const patternWidthPercent = 100 / columns;
  const patternHeightPercent = 100 / rows;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...rest}>
      <defs>
        <pattern
          id="Pattern"
          width={`${patternWidthPercent}%`}
          height={`${patternHeightPercent}%`}
          patternUnits="userSpaceOnUse"
        >
          <circle
            cx={`${patternWidthPercent / 2}%`}
            cy={`${patternHeightPercent / 2}%`}
            r={radius}
            fill="currentColor"
          />
        </pattern>
      </defs>

      <rect fill="url(#Pattern)" width="100%" height="100%" />
    </svg>
  );
}

CirclesPattern.defaultProps = {
  size: 6,
  space: 12,
};

export default CirclesPattern;
