import React from 'react';
import loading from './Loading.gif';
const Loading = () => {
  return (
    <div className="text-center">
      <img width="100px" src={loading} alt="loading" />
    </div>
  );
};
export default Loading;
