import React, { useEffect } from 'react'
import './styles.scss'
import Card from '../card/movieCard'
import Carousel from 'react-multi-carousel';
import responsive from '../../assets/carouselResponsive';

import 'react-multi-carousel/lib/styles.css';
const ContentSection = ({items,tittle}) => {
  return (
    <div className='contentSection'>
    <div className="tittle">{tittle}</div>
        <Carousel responsive={responsive} itemClass='content' autoPlay={true} autoPlaySpeed={3000} shouldResetAutoplay={true}   slidesToSlide={2}  focusOnSelect={true} rewind={true} rewindWithAnimation={true} customTransition='transform 1000ms ease-in-out'>
          {items ? items.map((item,index)=>{
            return(<Card key={item.id} details={item}/>)
          }):<div>1</div>}
        </Carousel>
    </div>
  )
}

export default ContentSection
