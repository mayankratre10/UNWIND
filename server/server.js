import express from 'express';
import cors from 'cors'
import { getMovies,getGenreList, getMovieByGenre } from './controller/moviesController.js';

const app =express();
app.use(cors());

app.get("/movie/:type",getMovies);
// app.get("/movie/:id/:type",getMovies);
app.get("/genre/:type",getGenreList);

app.get("/discover/:type",getMovieByGenre)



const PORT =process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log("Sever Running On Port:"+PORT)
})
    