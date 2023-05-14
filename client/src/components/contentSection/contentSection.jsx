import React from 'react'
import Card from '../card/movieCard'
import './styles.scss'
const ContentSection = () => {



  return (
    <div className='container'>
      <div className='contentType'>Trending</div>
      <div className="content">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}

export default ContentSection
