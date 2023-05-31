import React, { useRef, useState } from 'react';
import './styles.scss'
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const movieCard = ({details,cardClass}) => {
  const navigate = useNavigate();
  const cardRef=useRef();
  return (
    <div className={(cardClass ?  cardClass: "card") } ref={cardRef} onClick={()=>navigate('/UNWIND/details/'+details.id+"?tittle=movie")}> 
      {details && <LazyLoadImage src={import.meta.env.VITE_IMAGE_URL+details.poster_path} className='lazy-load'/>}
      {details && <div className="rating">{details.vote_average.toFixed(1)}</div>}
    </div>
  )
}

export default movieCard
