// Write your "projects" router here!
const express = require('express')
const Projects = require('./projects-model')
const { validateProjectId, validateProject } = require('./projects-middleware')

const router = express.Router()

router.get('/', (req, res, next) => {
    console.log('running')
    Projects.get()
    .then(projects => res.json(projects))
    .catch(next)
})

router.get('/:id', validateProjectId, (req, res) => {
    console.log('running id')
    res.json(req.project)
})


module.exports = router