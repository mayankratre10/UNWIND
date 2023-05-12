import { fetchDataFromApi } from "../utils/api.js"


export const getMovies = async(req,res)=>{
    console.log(req.url);
    const data=await fetchDataFromApi(req.url);
    res.json(data.results);
}