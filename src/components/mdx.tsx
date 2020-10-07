import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider, MDXProviderProps } from '@mdx-js/react';

import { Link } from './ui';
import * as css from './mdx.module.scss';

export type MarkdownProps = {
  children: string;
};

const MDX_COMPONENTS: MDXProviderProps['components'] = {
  a: Link,
};

function MDX({ children }: MarkdownProps) {
  return (
    <MDXProvider components={MDX_COMPONENTS}>
      <div className={css.base}>
        <MDXRenderer>{children}</MDXRenderer>
      </div>
    </MDXProvider>
  );
}

export default MDX;
