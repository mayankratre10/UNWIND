import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "./styles.scss";
import Card from "../../components/card/movieCard";
import { fetchMovieByGenre } from "../../utils/api";
import { AiFillCloseCircle } from "react-icons/ai";


const exploreSection = ({ tittle, genreList }) => {

  const [genre, setGenre] = useState("Select-Genre");
  const [page, setPage] = useState(1);
  const [movieList, setMovies] = useState(null);
  const [selectedGenre,setSelectedGenre] = useState([]);
  const fetchNewData = () => {
    let with_genres ="";
      genreList.map((item,index)=>{
        if(selectedGenre.includes(item.name)===true)(with_genres+=item.id.toString()+",");
      })
      if(with_genres.length>0)with_genres= with_genres.slice(0,with_genres.length-1);
    
    fetchMovieByGenre(tittle, with_genres, page).then((data) => {
      if (movieList !== null) setMovies([...movieList, ...data.data.results]);
      else setMovies(data.data.results);
      setPage(page + 1);
    });
  };

  const addGenre = (e)=>{
    let flag=selectedGenre.includes(e.target.value);
    if(e.target.value==="Select-Genre")flag=true;
    setGenre(e.target.value);
    if(!flag){
      setSelectedGenre([...selectedGenre,e.target.value]);
      setPage(1);
      setMovies([])
    }
  }

  const deleteGenre =(itemD)=>{
    let narr=selectedGenre.filter((item)=>{
      return item!==itemD;
    })
    setPage(1);
      setMovies([])
    setSelectedGenre(narr);

  }

  useEffect(() => {
    fetchNewData();

  }, []);
  useEffect(() => {
    setPage(1);
    setMovies(null);
    fetchNewData();

  }, [selectedGenre]);

  useEffect(() => {
    setGenre("Select-Genre");
    setPage(1);
    setMovies(null);
    setSelectedGenre([]);
    fetchNewData();
  }, [genreList]);


  return (
    <>
      { movieList && (
        <InfiniteScroll
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
              <h1>
                 {tittle === "movie" ? "Movies" : "TVShows"}
              </h1>
            <div className="heading">
              <div className="selectedGenre">
                {selectedGenre.map((item,index)=>{
                  return (<span key={index} className="genreItems"> <p>{item}</p><AiFillCloseCircle  onClick={()=>{deleteGenre(selectedGenre[index])}} className="icon"/> </span>)
                })}
              </div>
              <div className="filters">
                  <select  onChange={(event)=>{addGenre(event)}} className="filterItem">
                  <option>Select-Genre</option>
                    {(genreList.map((item,index)=>{
                      return <option key={index} value={item.name}>{item.name}</option>
                    }))}
                  </select>
              </div>
            </div>
            {movieList.map((item, index) => {
              return (
                <Card key={index} cardClass={"cardOverride"} details={item} />
              );
            })}
          </div>
        </InfiniteScroll>
      )}
      {!movieList && <Card cardClass={"cardOverride"} />}
    </>
  );
};

export default exploreSection;
