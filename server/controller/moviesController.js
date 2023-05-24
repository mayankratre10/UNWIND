import { fetchDataFromApi} from "../utils/api.js"


export const getMovies = async(req,res)=>{
    try{
        const data=await fetchDataFromApi(req.url);
        res.json(data.results);
    }
    catch(err){
        res.json(err.message);
    }
}

export const getMovieDetails = async(req,res)=>{
    try{
        let url="/"+req.query.tittle+"/"+req.query.id;
        if(req.query.type){
            url+=req.query.type
        }
        const data=await fetchDataFromApi(url);
        res.json(data);
    }
    catch(err){
        res.json(err.message);
    }
}

export const getGenreList = async(req,res)=>{
    try{
        const {genres} = await fetchDataFromApi(req.url+"/list")
        res.json(genres)
    }   
    catch(err){
        res.json(err.message);
    }
}

export const getMovieByGenre =async (req,res)=>{
    try{
        const data =await fetchDataFromApi(req.url,req.query);
        res.json(data);
    }   
    catch(err){
        res.json(err.message);
    }
}

export const getMovieBySearch =async (req,res)=>{
    try{
        const data =await fetchDataFromApi(req.url,req.query);
        res.json(data);
    }   
    catch(err){
        res.json(err.message);
    }
}