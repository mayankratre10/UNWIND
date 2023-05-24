import express from 'express';
import cors from 'cors'
import { getMovies,getGenreList, getMovieByGenre,getMovieBySearch,getMovieDetails } from './controller/moviesController.js';

const app =express();
app.use(cors());

app.get("/details",getMovieDetails)
app.get("/movie/:type",getMovies);
app.get("/genre/:type",getGenreList);

app.get("/discover/:type",getMovieByGenre)
app.get("/search/multi",getMovieBySearch)


const PORT =process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log("Sever Running On Port:"+PORT)
})
    