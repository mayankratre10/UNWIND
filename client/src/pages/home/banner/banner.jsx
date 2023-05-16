import React, { useEffect, useRef, useState } from "react";
import { fetchBannerUrl } from "../../../utils/api";
import ContentWrapper from "../../../components/contentwrapper/contentwrapper";
import "./styles.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";


const banner = () => {
  const bannerImage=useRef();
  const [backGroundImage, setbackGroundImage] = useState(null);
  useEffect(() => {
    fetchBannerUrl("/movie/upcoming").then((res) => {
      setbackGroundImage(import.meta.env.VITE_IMAGE_URL + res);
      temp()
    });
  }, []);
  const temp =()=>{
    console.log(bannerImage.current.offsetHeight);
  }
  return (
    <div className="banner" ref={bannerImage}>
      <div>
        <LazyLoadImage className="lazy-load" src={backGroundImage} height={bannerImage.current ? bannerImage.current.offsetHeight:600} width={bannerImage.current ? bannerImage.current.offsetWidth:1024} onClick={()=>temp()}/>
      </div>
      <div className="opacityLayer"></div>
      <ContentWrapper>
        <div className="bannerContent">
          <span className="tittle">Welcome</span>
          <span className="tittle">Millions of TV Shows and Movies</span>
          <div className="searchInput">
            <input type="text" placeholder="Search Movies and TV shows" />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default banner;
