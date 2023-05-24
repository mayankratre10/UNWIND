import React, { useEffect, useState } from 'react'
import Banner from './banner/banner'
import ContentSection from '../../components/contentSection/contentSection'
import Card from '../../components/card/movieCard'
import InfiniteScroll from "react-infinite-scroll-component"; 
import { fetchApiData,fetchMovieBySearch } from '../../utils/api';
import './styles.scss'
const home = () => {
  const [now_playing,setnow_playing]=useState(null);
  const [upcoming,setupcoming]=useState(null);
  const [popular,setpopular]=useState(null);
  const [top_rated,settop_rated]=useState(null);
  const [flag,setFlag]=useState(false);
  const [searchInput,setSearchInput] =useState(null);
  const [movieList,setMovieList] = useState([]);
  const [page,setpage] = useState(1);
  useEffect(()=>{ 
      fetchApiData('/movie/now_playing').then((data)=>{
        setnow_playing(data.data)
      }).catch((err)=>{err.message})
      
      fetchApiData('/movie/upcoming').then((data)=>{
        setupcoming(data.data)
      }).catch((err)=>{err.message})
      
      fetchApiData('/movie/popular').then((data)=>{
        setpopular(data.data)
      }).catch((err)=>{err.message})
      
      fetchApiData('/movie/top_rated').then((data)=>{
        settop_rated(data.data)
      }).catch((err)=>{err.message})
          
    },[]);
  
  useEffect(()=>{
    setMovieList([]);
    setpage(1);
    fetchMovieBySearch(searchInput,page).then((data)=>{
      setMovieList(data.results);
      console.log(data.results)
    })
  },[searchInput])
  useEffect(()=>{
    fetchMovieBySearch(searchInput,page).then((data)=>{
      setMovieList([...movieList,...data.results]);
    })
  },[page])
  return (
    <div>
      <Banner setFlag={setFlag} setSearchInput={setSearchInput} />
      {!flag && now_playing && <ContentSection items={now_playing} tittle={"On Cinema"}/>}
      {!flag && upcoming && <ContentSection items={upcoming} tittle={"Up Coming"}/>}
      {!flag && popular && <ContentSection items={popular} tittle={"Popular"}/>}
      {!flag && top_rated && <ContentSection items={top_rated} tittle={"Top Rated"}/>}
      { flag && (
        <InfiniteScroll
          dataLength={movieList.length}
          next={()=>setpage(page+1)}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Sorry We Are Out of Suggestions</b>
            </p>
          }
        >
          <div className="movieSection">
            {movieList.map((item, index) => {
              return (
                <Card key={index} cardClass={"cardOverride"} details={item} />
              );
            })}
          </div>
        </InfiniteScroll>
      )}
      {!movieList && <Card cardClass={"cardOverride"} />}
    </div>
  )
}

export default home
