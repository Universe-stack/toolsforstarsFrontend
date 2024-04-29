import React from 'react';

const BackdropSelect = () => {
  return (
    <div className="backdrop-container z-30 fixed">
      <div className="backdrop-shadow"></div>
      <div className="bg-starsBlack w-screen h-[100%] opacity-25 absolute top-0 left-0"></div>
    </div>
  );
};

export default BackdropSelect;
