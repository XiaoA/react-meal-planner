import React from 'react';
import './ImageSearchForm.css';

const ImageSearchForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f3'>
        {"Get a list of the ingredients from a picture of food!"}
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
      <input placeHolder="Paste a food URL here..." className='f4 pa2 w-70 center' type='text' onChange={onInputChange} />
          <button className='w-30 grow f4 link ph2 pv2 dib white bg-light-blue' onClick={onButtonSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};


export default ImageSearchForm;
