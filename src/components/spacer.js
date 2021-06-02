import React from 'react';

// Purpose of this component is to provide horizontal and vertical spacing when possible instead of using margins
const Spacer = ({ width, height }) => {
  return <div style={{ width: `${width}px`, height: `${height}px` }} />;
};

export default Spacer;
