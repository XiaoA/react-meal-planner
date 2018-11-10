import React from 'react';
import './ImageSearchForm.css';

const ImageSearchForm = () => {
  return (
    <div>
      <p className='f3'>
        {"Get a list of the ingredients from a picture of food!"}
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 center' type='text' />
          <button className='w-30 grow f4 link ph2 pv2 dib white bg-light-blue'>Submit</button>
        </div>
      </div>
    </div>
  );
};


export default ImageSearchForm;
