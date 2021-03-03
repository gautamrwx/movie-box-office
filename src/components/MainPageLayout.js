import React from 'react';
import Navigator from './Navigator';
import Title from './Title';

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title title="Box Office" subtitle="Are You Looking For A Movie ?" />
      <Navigator />
      {children}
    </div>
  );
};

export default MainPageLayout;
