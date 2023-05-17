import React, { useEffect, useState } from "react";
import "./styles.scss";
import { fetchGenreList } from "../../utils/api";
import ExploreSection from "../exploreSection/exploreSection"
const movie = ({tittle}) => {
  const [loading, setloading] = useState(false);
  const [genreList, setGenreList] = useState(null);
  useEffect(() => {
    fetchGenreList("/genre/"+tittle).then((data)=>{
      setGenreList(data.data)
    }).catch((err)=>{
      console.log(err.message)
    })
  }, []);
  useEffect(()=>{
    setloading(true);
  },[genreList])
  return (
    <>
    <h1>{tittle}</h1>
      {genreList  && (
        <div className="filterBanner">
          <h1 className="heading">All {tittle} With Genres</h1>
          {genreList && <ExploreSection tittle={tittle} genreList={genreList} />}
        </div>
      )}
      {!loading && <h1 className="loading">Loading.........</h1>}
    </>
  );
};

export default movie;
