const express = require('express');
const { projects } = require('./data');
const { bio } = require('./data');

const app = express();

const routes = require('./routes');
const projectRoutes = require('./routes/projects');

//import static files to /static
app.use('/static', express.static('public'));

//import top level routes
app.use(routes);
//import project routes
app.use(projectRoutes);

app.set('view engine', 'pug');

//handle page not found
app.use((req, res, next)=>{
  const err = new Error('Page Not Found');
  err.status = 404;
  next(err);
});

//handle server errors
app.use((req, res, next)=>{
  const err = new Error('Server Error');
  err.status = 500;
  next(err);
});

//error handler
app.use((err, req, res, next)=>{
  res.locals.error = err;
  res.status(err.status);

  if(err.status === 404){
    res.render('project-not-found', {err});
  }
  else{
    res.render('error', {err});
  }
});


app.listen(process.env.PORT || 3000,()=>{
  console.log('The application is running on port 3000!');
})
