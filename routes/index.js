const express = require('express');
const router = express.Router();

const { projects } = require('../data');
const { bio } = require('../data');

router.get('/', (req, res)=>{
  res.render('index', {projects, bio});
});


router.get('/about', (req, res)=>{
  res.render('about', {bio});
});


module.exports = router;
