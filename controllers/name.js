const namesRouter = require('express').Router()
const Names = require('../models/names')


namesRouter.get('/', async(request, response) => {
  const names = await Names
    .find({})
    console.log(names)

  response.json(names.map(x => x.toJSON()))

})

namesRouter.post('/', async (request, response) => {

    const name = new Names({
        name: request.body.name,
        score: request.body.score
    })
    try {
      const result = await name.save()
      response.status(201).json(result)
      console.log(result)
    } catch (err) {
      console.log(err.message)
    }
})

module.exports = namesRouter