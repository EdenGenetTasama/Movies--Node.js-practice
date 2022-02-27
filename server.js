const express = require('express');
const app = express();
const port = 2503;
const movieRouter = require('./route/movie-route');
const cores = require('cores');
app.use(cores)
app.use(express.json());

app.use('/' , (req , res)=>{
    res.send("Connection to Server")
})
app.use('/movie' , movieRouter);






app.listen(port);
