const movieRouter = require('express').Router();
const requestHandler = require('../controllers/movie-ctrl');

movieRouter.get('/', requestHandler.getAllInfo)

movieRouter.get('/:id', requestHandler.getAllInfoById)

//////POST :

movieRouter.post('/', requestHandler.postToInfo)

///PUT:

movieRouter.put('/:id', requestHandler.putToUpdate)

//DELETE
movieRouter.delete('/:id', requestHandler.deleteInfoById)

module.exports=movieRouter ; 