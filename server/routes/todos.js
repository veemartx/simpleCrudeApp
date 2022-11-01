const express = require('express');
const router = express.Router();
var mysql = require('mysql');

// myslqli connection
// is better to move the connection to its own file bu
// we will do it here 
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'learning_simpleCrudeApp'
});

connection.connect();

/* get all todos. */
router.get('/', function (req, res) {
    connection.query('SELECT * FROM todos', function (error, results, fields) {
        if (error) throw error;

        // console.log(results);
        res.json(results);
    });

});





/* create one todo*/ 

module.exports = router;
