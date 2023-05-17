import React, { useEffect, useState } from 'react'
import Banner from './banner/banner'
import ContentSection from '../../components/contentSection/contentSection'
import { useSelector,useDispatch } from 'react-redux'
import {store_nowMovies,store_popularMovies,store_topMovies,store_upcomingMovies} from '../../store/movieTypeSlice';
import { fetchApiData } from '../../utils/api';
const home = () => {
  const [now_playing,setnow_playing]=useState(null);
  const [upcoming,setupcoming]=useState(null);
  const [popular,setpopular]=useState(null);
  const [top_rated,settop_rated]=useState(null);
  useEffect(()=>{ 
      fetchApiData('/movie/now_playing').then((data)=>{
        // dispatch(store_nowMovies(data.data));
        setnow_playing(data.data)
      }).catch((err)=>{err.message})
      
      fetchApiData('/movie/upcoming').then((data)=>{
        // dispatch(store_upcomingMovies(data.data));
        setupcoming(data.data)
      }).catch((err)=>{err.message})
      
      fetchApiData('/movie/popular').then((data)=>{
        // dispatch(store_popularMovies(data.data));
        setpopular(data.data)
      }).catch((err)=>{err.message})
      
      fetchApiData('/movie/top_rated').then((data)=>{
        // dispatch(store_topMovies(data.data));
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
