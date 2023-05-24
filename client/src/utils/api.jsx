import axios from 'axios'
axios.defaults.baseURL=import.meta.env.VITE_SERVER_URL

export const fetchApiData = async(url)=>{
    const data=await axios.get(url);
    return data;
}
export const fetchBannerUrl = async(url)=>{
    try{
        const {data}=await axios.get(url);
        const {backdrop_path} = data[Math.floor(Math.random()*20)];
        return backdrop_path;
    }
    catch(err){
        console.log(err.message);
    }
}

export const fetchGenreList =async(url)=>{
    try{
        const data=await axios.get(url);
        return data;
    }
    catch(err){
        console.log(err.message);
    }
}

export const fetchMovieByGenre =async(tittle,with_genres,page)=>{
    try{
        let raw_url="/discover/" + tittle ;
        const data=await axios.get(raw_url,{
            params: {
              with_genres:with_genres,
              include_adult:false,
              include_video:false,
              language:'en-US',
              page:page,
              sort_by:'popularity.desc'
            }
          });
        return data;
    }
    catch(err){
        console.log(err.message);
    }
}

export const fetchMovieBySearch =async(searchInput,page)=>{
    try{
        let raw_url="/search/multi";
        
        const {data}=await axios.get(raw_url,{
            params: {
              query:searchInput,
              include_adult:false,
              language:'en-US',
              page:page,
            }
          });
        return data;
    }
    catch(err){
        console.log(err.message);
    }
}

export const fetchMovieDetails = async(tittle,id,type)=>{
    try{
        let raw_url="/details";
        let {data}=await axios.get(raw_url,{
            params: {
              tittle:tittle,
              id:id,
              type:type
            }
          });
        return data;
    }
    catch(err){
        console.log(err.message);
    }
}