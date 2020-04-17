//set up express object

const express = require('express');
const Projects = require('./router-model.js');
const router = express.Router();

/** ENDPOINTS */

// READ

//read the list of projects

router.get('/', (req, res) =>{
    Projects.getProjects()
        .then(projects => {
            if(!projects){
                res.status(404).json({ error: 'Could not find projects list'})
            } else {
                res.status(201).json({ message: 'Rendering Project list...', projects})
            }
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'Could not retrieve list of projects'})
        })
})

module.exports = router;