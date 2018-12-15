import React from 'react';

const ImageDisplay = ({ imageUrl }) => {
  return (
    <div className='fl w-50 mt2 ml2'>
      <img id = 'input-image' alt="food" src={imageUrl} width='500px' height='auto'/>
    </div>
  ); 
}

export default ImageDisplay;
