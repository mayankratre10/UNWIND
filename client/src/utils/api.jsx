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
