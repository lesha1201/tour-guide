import React from 'react';

import Button from 'components/ui/button';
import Layout from 'components/layout';
import { Container } from 'components/container';

function IndexPage() {
  return (
    <Layout>
      <Container>
        <h1>Hello, World!</h1>
        <Button>Button</Button>
      </Container>
    </Layout>
  );
}

export default IndexPage;
