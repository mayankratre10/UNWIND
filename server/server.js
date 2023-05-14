import express from 'express';
import cors from 'cors'
import { getMovies } from './controller/moviesController.js';

const app =express();
app.use(cors());

app.get("/movie/:type",getMovies);
app.get("/movie/:id/:type",getMovies);



const PORT =process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log("Sever Running On Port:"+PORT)
})
    