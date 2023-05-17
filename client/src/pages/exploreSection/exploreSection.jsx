import React, { useEffect, useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component'
import "./styles.scss";
import Card from "../../components/card/movieCard";
import { fetchMovieByGenre } from "../../utils/api";
const exploreSection = ({ tittle, genreList }) => {
  const [genre,setGenre]=useState("Action");
  const [page,setPage]=useState(1);
  const [movieList,setMovies]=useState(null);
  const fetchNewData =()=>{
    fetchMovieByGenre("movie","18","1").then((data)=>{
      console.log(data.data.results);
      if(movieList!==null)setMovies([...movieList,...data.data.results]);
      else setMovies(data.data.results)
    })
  }


  useEffect(()=>{
    fetchNewData()
  },[])

  return (
    <>
    {movieList && <InfiniteScroll
      dataLength={movieList.length}
      next={fetchNewData}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Sorry We Are Out of Suggestions</b>
        </p>
      }
    >
    <div className="section">
      <h1>{tittle}</h1>
      {
        movieList.map((item, index) => {
          return (<Card key={index} cardClass={"cardOverride"} details={item}/>);
        })
      }
    </div >
     </InfiniteScroll>}
     {!movieList && <Card cardClass={"cardOverride"}/>}
     </>
  );
};

export default exploreSection;
