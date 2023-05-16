import React, { useEffect, useState } from 'react'
import Banner from './banner/banner'
import ContentSection from '../../components/contentSection/contentSection'
import { useSelector,useDispatch } from 'react-redux'
import { fetchMovies } from '../../store/movieTypeSlice'
import { fetchApiData } from '../../utils/api'
const home = () => {
  
  const [now_playing,setnow_playing]=useState(null);
  const [upcoming,setupcoming]=useState(null);
  const [popular,setpopular]=useState(null);
  const [top_rated,settop_rated]=useState(null);
  useEffect(()=>{ 
          fetchApiData('/movie/now_playing').then((data)=>{
            setnow_playing(data.data)
          }).catch((err)=>{err.message})

          fetchApiData('/movie/upcoming').then((data)=>{
            setupcoming(data.data)
            console.log(data.data);
          }).catch((err)=>{err.message})

          fetchApiData('/movie/popular').then((data)=>{
            setpopular(data.data)
          }).catch((err)=>{err.message})

          fetchApiData('/movie/top_rated').then((data)=>{
            settop_rated(data.data)
          }).catch((err)=>{err.message})

  },[]);

  return (
    <div>
      <Banner/>
      {now_playing && <ContentSection items={now_playing} tittle={"On Cinema"}/>}
      {upcoming && <ContentSection items={upcoming} tittle={"Up Coming"}/>}
      {popular && <ContentSection items={popular} tittle={"Popular"}/>}
      {top_rated && <ContentSection items={top_rated} tittle={"Top Rated"}/>}
    </div>
  )
}

export default home
