//@ts-nocheck

import React from 'react';
import ReactStarsRating from 'react-awesome-stars-rating';

const onChange = ({value, isEdit}) => {
  console.log(`React Stars Rating value is ${value}`);
};

const ReactStars = ({ value, isEdit }) => {
  return <ReactStarsRating onChange={onChange} value={value} className="flex" count={5} isEdit={isEdit} secondaryColor="#000000" />;
};

export default ReactStars;
