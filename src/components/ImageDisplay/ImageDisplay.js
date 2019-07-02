import React from 'react';

const ImageDisplay = ({ imageUrl }) => {
  return (
    <div className='fl w-100 mt2 ml2'>
      <img id = 'input-image' alt="" src={imageUrl} width='500px' height='auto'/>
    </div>
  ); 
}

export default ImageDisplay;
