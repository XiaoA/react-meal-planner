import React from 'react';

const ImageDisplay = ({ imageUrl }) => {
  return (
    <div className='absolute mt2 ml2'>
      <img alt="food" src={imageUrl} width='500px' height='auto'/>
    </div>
  ); 
}

export default ImageDisplay;
