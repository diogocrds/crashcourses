import React from 'react';
import Banner from '../layout/Banner';
import Features from '../layout/Features';
import Posts from '../layout/Posts';

export default function Homepage() {
  return (
    <React.Fragment>
      {/* ------- Banner ------- */}
      <Banner />
      <Features />
      <Posts />
    </React.Fragment>
  );
}
