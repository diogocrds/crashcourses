import React from 'react';
import Banner from '../layout/Banner';
import Features from '../layout/Features';
import Articles from '../layout/Articles';

export default function Homepage() {
  return (
    <React.Fragment>
      {/* ------- Banner ------- */}
      <Banner />
      <Features />
      <Articles />
    </React.Fragment>
  );
}
