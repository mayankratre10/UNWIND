import React, { useState } from 'react';
import './styles.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const movieCard = ({details}) => {

  return (
    <div className='card'>
      <LazyLoadImage src={import.meta.env.VITE_IMAGE_URL+details.poster_path} className='lazy-load'/>
      <div className="rating">{details.vote_average}</div>
    </div>
  )
}

export default movieCard
