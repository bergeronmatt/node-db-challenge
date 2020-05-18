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
                console.log(projects)
                res.status(201).json({ message: 'Rendering Project list...', projects})
            }
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'Could not retrieve list of projects'})
        })
})


//read the list of tasks associated with a project

router.get('/:id/tasks', (req, res) => {
    const id = req.params.id;
    Projects.findProject(id)
        .then(project => {
            if(!project){
                res.status(404).json({error: "The project for the task search could not be identified by the given id, please try again."})
            } else {
                Projects.getTasks(id)
                    .then(task => {
                        res.status(201).json({message: 'loading task', task})
                    })
            }
        })
        .catch(err =>{
            res.status(500).json({errorMessage: 'Could not render the project for the task search.'})
        })
})

//read the list of resources

router.get('/resources', (req, res) => {
    Projects.getResources()
        .then(resources => {
            if(!resources){
                res.status(404).json({ error: 'Could not find resources list'})
            } else {
                console.log(resources)
                res.status(201).json({ message: 'Rendering Resource list...', resources})
            }
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'Could not retrieve list of projects'})
        })
})

/** CREATE */

//create project

router.post('/', (req, res) => {
    const newProject = req.body
    if(!newProject){
        res.status(400).json({ error: 'Project alread exists'})
    } else {
        Projects.addProject(newProject)
            .then(project => {
                res.status(201).json({ message: 'Project added', project})
            })
            .catch(err =>{
                res.status(500).json({errorMessage: 'The project could not be saved to the database.', err})
            })
    }
})

//create task to a specific project

router.post('/:id/task', (req, res) => {
    const body = req.body;
    Projects
        .addTask(body)
        .then((add) => {
            res.status(201).json(add);
        }).catch((err) => {
            res.status(500).json({ message: "There was an error adding a task" })
        });
})

//create resource

router.post('/resources', (req, res) => {
    const body = req.body;
    Projects.addResources(body)
        .then((add) => {
            res.status(201).json(add);
        }).catch((err) => {
            res.status(500).json({ message: "There was an error adding a resource" })
        });
})

module.exports = router;