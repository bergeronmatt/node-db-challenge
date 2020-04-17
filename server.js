//set up express object
const express = require('express');
const Router = require('./post-router/router');

//set up server object
const server = express();

//set up middleware
server.use(express.json());
server.use('/api/projects', Router);

//sanity test
server.get('/', (req, res) => {
    res.status(200).json({api: 'pattern is clear Ghost Rider'});
});

module.exports = server;