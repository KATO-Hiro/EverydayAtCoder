import React from 'react';

const markStyle = {
  display: 'inline-block',
  height: '12px',
  width: '12px',
  borderRadius: '50%',
  background: 'green',
  // verticalAlign: 'center',
  // boder: '1px solid red',
  // background: 'webkitLinearGradient('bottom', 'red 0%', 'red 15%', 'rgba(255, 255, 255, 0.0) 15%', 'rgba(255, 255, 255, 0.0) 15%',)',
};

const ratingColorMark = (props: any) => (
  <div style={markStyle}></div>
);

export default ratingColorMark;
