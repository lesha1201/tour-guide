import React from 'react';

import Layout from 'components/layout';
import Header from 'components/header';
import Footer from 'components/footer';
import ExcursionsContent from 'components/excursions/content';

function ExcursionsPage() {
  return (
    <Layout
      header={<Header variant="default" />}
      content={<ExcursionsContent />}
      footer={<Footer />}
    />
  );
}

export default ExcursionsPage;
