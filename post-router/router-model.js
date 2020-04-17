//set up db object
const db = require('../data/db-config');

//helper functions

/** PROJECT FUNCTIONS */

// get all projects
function getProjects () {
    return db('projects');
}

// get project by id
function findProject (id){
    return db('projects').where({id}).first()
}

// add new project
function addProject(project){
    return db('projects')
        .insert(project, 'id')
        .then(([id]) => {
            return findProject(id)
        })
}


/** TASKS FUNCTIONS */

// get task associated with a project
function getTasks (id) {
    return db('projects AS p')
        .join('tasks AS t', 't.project_id', 'p.id')
        .select('p.name', 't.description', 't.notes')
        .where('p.id', id)
}

// find specfic task by id
function findTask(id){
    return db ('tasks').where({id}).first()
}

//add new task
function addTask(task){
    return db('tasks')
        .insert(task)
        .then(ids => ({id : ids[0]}))
}

/** RESOURCE FUNCTIONS */

// get resource list

function getResources () {
    return db('resources');
}

// add resource
function addResources (resource) {
    return db("resources ")
        .insert(resource)
        .then(ids => ({ id: ids[0] }));
}


module.exports = {
    getProjects,
    addProject,
    findProject,
    getTasks,
    addTask,
    findTask,
    getResources,
    addResources,
    
}