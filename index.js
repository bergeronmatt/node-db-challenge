//set up server object
const server = require('./server.js');

//set up PORT object
const PORT = process.env.PORT || 5000;

//listen to server
server.listen(PORT, () => {
    console.log(`\n===API RUNNING ON http://localhost:${PORT}===\n`)
});