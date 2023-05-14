import { fetchDataFromApi } from "../utils/api.js"


export const getMovies = async(req,res)=>{
    try{
        const data=await fetchDataFromApi(req.url);
        res.json(data.results);
    }
    catch(err){
        res.json(err.message);
    }
}
