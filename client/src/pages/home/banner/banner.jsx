import React, { useEffect, useRef, useState } from "react";
import { fetchBannerUrl } from "../../../utils/api";
import ContentWrapper from "../../../components/contentwrapper/contentwrapper";
import "./styles.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const banner = ({setFlag,setSearchInput}) => {
  const bannerImage=useRef();
  const [message,setmessage]=useState("");
  const handleChange = (e)=>{
    setmessage(e.target.value);
  }
  const handleOnclick = ()=>{
    if(message.length>0){
      setFlag(true);
      setSearchInput(message);
    }
    else{
      alert("Please Enter A Query To Search")
    }
  }
  const [backGroundImage, setbackGroundImage] = useState(null);
  useEffect(() => {
    fetchBannerUrl("/movie/upcoming").then((res) => {
      setbackGroundImage(import.meta.env.VITE_IMAGE_URL + res);
    });
  }, []);
  return (
    <div className="banner" ref={bannerImage}>
      <div>
        <LazyLoadImage className="lazy-load" src={backGroundImage} height={bannerImage.current ? bannerImage.current.offsetHeight:600} width={bannerImage.current ? bannerImage.current.offsetWidth:1024}/>
      </div>
      <div className="opacityLayer"></div>
      <ContentWrapper>
        <div className="bannerContent">
          <span className="tittle">Welcome</span>
          <span className="tittle">Millions of TV Shows and Movies</span>
          <div className="searchInput">
            <input type="text" placeholder="Search Movies and TV shows" onChange={(e)=>handleChange(e)} />
            <button onClick={()=>handleOnclick()}>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default banner;
