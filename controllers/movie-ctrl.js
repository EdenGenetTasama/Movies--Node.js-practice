const fs = require('fs')

const getAllInfo = (req, res) => {
  const dataJson = require('../movies.json')
  if (dataJson) return res.send({ dataJson })
  res.status(404).send({ massage: 'sorry not found' })
}

const getAllInfoById = (req, res) => {
  const dataJson = require('../movies.json')
  const movieById = dataJson.find(
    movieId => movieId.id === parseInt(req.params.id)
  )
  if (movieById) return res.send(movieById)
  res.status(404).send({ massage: 'sorry not found' })
}

const postToInfo = (req, res) => {
  const movie = req.body.movie
  //   const movieArray = require('./movies.json')
  //   movieArray.push(movie)
  fs.appendFile('../movies.json', JSON.stringify(movie), () => {})
  console.log(req.body)
  res.send()
}

const putToUpdate = (req, res) => {
  const dataJson = require('../movies.json')
  const idUser = req.params.id
  const dataFind = dataJson.find(dataItem => dataItem.id === parseInt(idUser))
  if (dataFind) {
    dataJson[dataJson.indexOf(dataFind)] = req.body.movie
    fs.writeFile('./movies.json', JSON.stringify(dataJson), () => {})
  }
  res.send()
}

const deleteInfoById = (req, res) => {
  const dataJson = require('../movies.json')
  const DataById = dataJson.find(item => item.id === parseInt(req.body.id))
  if (DataById) {
    dataJson.delete([dataJson.indexOf(DataById)])
    fs.writeFile('../movies.json', JSON.stringify(DataById), () => {})
    return res.send()
  }
}

module.exports = {getAllInfo,getAllInfoById, postToInfo,putToUpdate,deleteInfoById}
