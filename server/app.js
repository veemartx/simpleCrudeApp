const createError = require('http-errors');
const express = require('express');
const path = require('path');
var cors = require('cors')



// get the route middlewares 
// we can have the endpoints here but 
// we move them to routes folder for easier management 
const index = require('./routes/index');
const users = require('./routes/users');
const todos = require('./routes/todos');


const app = express();

app.use(cors())


//  set up the middlewares
// json middleware is to read sent json data from the client.
app.use(express.json());
// json middleware is to read sent urlencoded data from the client.
app.use(express.urlencoded({ extended: false }));
// this is to serve static files eg html,css,js, the files are in public folder
app.use(express.static(path.join(__dirname, 'public')));

// router middlewares
app.use('/', index);
app.use('/users', users);

// because we are building a todo app, we will focus on this route and the others are just examples
//we can have as many routes as possibe
app.use('/todos', todos);


// server errors 
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



// port
const port = 3000;


// listen to this port 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})