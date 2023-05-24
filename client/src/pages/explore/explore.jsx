import React, { useEffect, useState } from "react";
import "./styles.scss";
import { fetchGenreList } from "../../utils/api";
import ExploreSection from "../exploreSection/exploreSection"
const explore = ({tittle}) => {
  const [loading, setloading] = useState(false);
  const [genreList, setGenreList] = useState(null);
  useEffect(() => {
    fetchGenreList("/genre/"+tittle).then((data)=>{
      setGenreList(data.data)
    }).catch((err)=>{
      console.log(err.message)
    })
  }, [tittle]);
  useEffect(()=>{
    setloading(true);
  },[genreList])
  return (
    <>
      {genreList  && (
        <div className="filterBanner">
          {genreList && <ExploreSection tittle={tittle} genreList={genreList} />}
        </div>
      )}
      {!loading && <h1 className="loading">Loading.........</h1>}
    </>
  );
};

export default explore;
