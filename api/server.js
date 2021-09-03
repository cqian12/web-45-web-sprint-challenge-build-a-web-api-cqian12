const express = require('express');
const server = express();
const cors = require('cors')
const morgan = require('morgan')
const projects = require('./projects/projects-router')
const actions = require('./actions/actions-router')

server.use(express.json())
server.use('/api/projects', projects)
server.use('/api/actions', actions)

// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!

module.exports = server;
