import * as dotenv from 'dotenv';
dotenv.config();

import axios from "axios";


const BASE_URL="https://api.themoviedb.org/3";


const headers={
    Authorization: "Bearer " + process.env.TMDB_TOKEN 
}

export const fetchDataFromApi= async (url,query)=>{
    try{
        const {data} = await axios.get(BASE_URL+url,{
            headers:headers,
            query:query,
        });
        return data;
    }
    catch(err){
        console.log(err.message);
    }
}