//set up db object
const db = require('../data/db-config');

//helper functions

function getProjects () {
    return db('projects');
}

module.exports = {
    getProjects
}