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

export const fetchMovieByGenre =async(type,genre_id,page)=>{
    try{
        console.log(type);
        let raw_url="/discover/" + "movie"+"?with_genres="+"18"+"&include_adult=false&include_video=false&language=en-US&page=" +"2"+ "&sort_by=popularity.desc";
        const data=await axios.get(raw_url);
        return data;
    }
    catch(err){
        console.log(err.message);
    }
}