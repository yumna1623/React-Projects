import { useState } from 'react';
import './Vote_btn.css';

const Vote_btn = ({ title, onClick }) => {

    

  return (
    <button className='cool-btn' onClick={onClick}>
      {title}
    </button>
  );
};

export default Vote_btn;