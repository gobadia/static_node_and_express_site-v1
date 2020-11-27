const express = require('express');
const router = express.Router();

const { projects } = require('../data');
const { bio } = require('../data');

router.get('/projects/:id', (req, res)=>{
  //get id from url
  const projId = req.params.id;
  //get the project by ID
  const project = projects[projId];
  if(project === undefined){
    //if project doesn't exist, trigger 404 error
    const err = new Error("Project Doesn't Exist");
    err.status = 404;
    res.render('page-not-found', {err});
  }
  else{
    //if project found, render project
  res.render('project', {project});
  }
});

module.exports = router;
