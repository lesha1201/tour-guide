import React from 'react';

import { CSS_VARS } from 'constants/style';

export type LogoColor = 'primary' | 'primary-dark' | 'dark' | 'white' | 'white-primary';

export type LogoProps = React.SVGAttributes<SVGElement> & {
  color: LogoColor;
};

const variants = {
  primary: {
    primary: CSS_VARS.color.primary,
    secondary: CSS_VARS.color.secondary,
  },
  'primary-dark': {
    primary: CSS_VARS.color.primary,
    secondary: CSS_VARS.color.black,
  },
  dark: {
    primary: CSS_VARS.color.black,
    secondary: CSS_VARS.color.secondary,
  },
  white: {
    primary: CSS_VARS.color.white,
    secondary: CSS_VARS.color.secondary,
  },
  'white-primary': {
    primary: CSS_VARS.color.primary,
    secondary: CSS_VARS.color.primary,
  },
};

function Logo({ color, ...rest }: LogoProps) {
  const colors = variants[color];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 156.55 122.9"
      width="100%"
      height="100%"
      {...rest}
    >
      <path
        fill={colors.secondary}
        d="M27.99 42.64s4.82-16.16 20.7-19.85c15.87-3.68 24.28 8.98 24.28 8.98S53.17 63.9 41.8 62.84 28 42.64 28 42.64z"
      />
      <path
        fill={colors.primary}
        d="M52.04 85.72s-2.3-8.4-15.77 8.53c-3.07 3.85 1.65 6.83 5.03 2.17 4.28-5.92 7.94-7.5 9.34-7.19 1.04.24 1.5.8 1.31 5.4-.07 1.88 2.22 1.77 3.3.84 2.49-2.13 6.54-5.53 7.11-7.64s-.9-1.66-.59-2.59 1.3-2.28 2.41-2.08.76 2.21 1.75 3.17 2.8 2.07 4.14 2.26c1.35.2 2.58-1.18 3.52-.3s.25 1.99-.33 4.04c-.59 2.06-5.06 6.23-3.7 7.48 1.36 1.25 12.92-11.69 14.8-12.33s3.05.89 2.62 3.35.26 5.24 1.44 6.28 3 .39 4.2-.86c1.2-1.24 8.4-8.62 11.06-10.23 2.67-1.6 4.42-1.49 4.47.9.05 2.4-3.66 7.83-3.98 8.43s-.87 3.32 1.9.64 5.15-5.84 7.9-6.4 4.57-.11 5.02 1.6-.9 4.82-1 6.37c-.13 1.55 1.44 2.78 4.8.17 2.53-1.97 4.17-2.49 6.91-5.38 3.62-3.8 7.18-7.12 11.52-9.22 3.78-1.83 10.07-3.41 10.51-1.38.37 1.71-.55 3.65-1.75 3.86s.14-2.6-1.51-2.63c-.8 0-5.7 1.42-9.74 5.17-3.7 3.45-5.74 5.9-6.54 7.8-.76 1.78 1.03 3.6 3.02 2.23 1.98-1.36 9.21-8.79 11.49-9.4 2.28-.61 3.02.57 3.08 1.53.07.95-1.26 4.7.32 5.67s3.92-2.79 4.42-2.2c.51.57-.5 4.33-2.66 5.66s-3.51 1.74-4.62.02c-1.11-1.71-1.36-3.98-2-4.96-.64-.98-2.33-.26-3.03.29-.7.55-6.2 6.72-7.77 7.23s-2.98.58-4.35-.24-2.1-3.03-2.36-3.8-1.24-1.02-1.96-.34c-.72.68-4.36 4.15-5.88 5.14-1.53 1-3.54 1.66-5.05.13s.55-8.1-.03-8.98c-.58-.88-2.48-.14-3.34.4-.86.54-7.15 7.9-9.61 9.05-2.46 1.15-3.74.42-4.03-.42-.29-.83 3.03-7.84 3.58-9.81.55-1.98-1.53-.46-2.94.83s-5.48 5.72-7.4 6.96-3.19.43-4.04-.02c-.85-.45-3.2-4.9-3.68-6.04s-1.96-.99-2.88-.53c-.92.47-10.67 9.03-12.82 9.23-2.14.2-3.3-1.54-2.08-3.24s3.52-8.35 3.35-9.25c-.17-.9-3.72-2.54-4.53-1.69-.8.86-11.26 11.22-11.84 11.57s-1.54.37-2.27-.94c-.74-1.3-1.34-4.7-2.06-5.17-.72-.47-2.37-.5-3.45.44-1.07.94-4.11 5.44-6.6 6.43-2.5 1-5.07.6-6.26-1.4-1.18-1.99-.87-4.52 1.5-8.33 1.23-1.98 5.01-5.87 9.1-8.35 3.11-1.88 8.39-2.53 9.62-1.8 2.57 1.49-.1 3.87-.1 3.87zm27.76-8.26c-.85 1.23.16 1.91 1.2 2.25s2.89.54 3.77.2c.88-.36 1.18-2.18.48-3.16s-4.28-.79-5.45.7zm25.8-16.79c.44.03 6 1 7.36 1.87s1.1 1.75 1.94 2.64 1.35 1.79 3.1 1.97c1.76.18.4 1.33 2 1.87 1.62.53 4.28-1.08 5.69-1.34s2.84-.4 4 .4 5.12 3.71 5.12 3.71-4.3-1.4-5.72-1.94-3.04-.47-4.47-.2-3.34.8-4.31 1.44-1.56 2.26-2.27 2.22c-.7-.03-.55-2.56-1.1-3.5-2.91-4-7.02-6.43-11.33-9.14zm21.2-11.44c.15-.77 2.43-3.54 4.32-3.91 1.9-.37 4.65.12 6.58-.98s1.83-4.05 3.77-5.46 6.75-2.32 6.75-2.32-3.85 2.13-5.16 3.62-2.37 3.36-2.67 4.72.72 2.25-.01 2.89c-.73.63-2-.72-3.45-.98s-2.74.08-4.79.42c-2.04.35-5.33 2-5.33 2zM20.95 108.28h135.6l-6.15 4.33H20.94z"
      />
      <path fill={colors.secondary} d="M20.95 108.28h135.6l-3.2 2.26H20.94z" />
      <path
        fill={colors.primary}
        d="M.43 107.58c-.51-4.23-2.26-83.73 8.25-101.31 2.67-4.48 15.77-12.93 14.99 3.11-.25 5 2.59 51.5 18.13 53.46 10.77.13 35.61-38.55 41.27-45.62 4.11-5.14 10.88-5.62 11.54-.2C96.73 34.3 78.57 72.6 75.74 72.33c-4.9-.44-3.3-16.76-1.52-23.84.46-1.83-1.3-2.96-3.43-1.08-2.57 2.29-23.67 30.65-34.68 29.47-8.39-.9-12.04-11.8-14.43-15.57-1.43-2.25-4.38-2.55-4.95.59-2.07 11.44-4.5 28.45-4.54 43.04 0 2.71 4.54 3 5.67 6.15 1.38 3.85-.06 11.24-4.96 11.72-9.43.93-11.62-8.35-12.47-15.23z"
      />
    </svg>
  );
}

Logo.defaultProps = {
  color: 'primary',
};

export default Logo;
