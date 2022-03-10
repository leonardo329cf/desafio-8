import React from 'react';
import ContentLoader from 'react-content-loader';

import './styles.css';

const Loader = ({ ...rest }) => {
  return (
    <ContentLoader
      className="loader"
      backgroundColor="#F5F5F5"
      foregroundColor="#E5E5E5"
    >
      <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
    </ContentLoader>
  );
};

export default Loader;
