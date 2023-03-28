var express = require('express');
var bodyParser= require('body-parser')
var session = require('express-session');
var myrouter = express.Router();
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var Course = require('../models/Course');

myrouter.get('/', function(req, res){
  if (req.session.courseSession == null) {
    req.session.count = 0;
    res.render('index',{count: req.session.count});
  } else {
        var courseModel = req.session.theCourse;
        res.render('details', {course: courseModel});
  }
});

function sessionCounter(req, res, next) {
  //Checking only courseID because all input fields are required.
  if (req.body.courseID) {
    req.session.count ++;
    next();
  } else {
    res.render('index',{count: req.session.count});
  }
}

myrouter.post('/', [urlencodedParser, sessionCounter], function(req, res){
  var courseModel = new Course();
  courseModel.setcourseID(req.body.courseID);
  courseModel.setTitle(req.body.courseTitle);
  courseModel.setTerm(req.body.courseTerm);
  courseModel.setInstructor(req.body.courseInstructor);
  req.session.courseSession = courseModel;
      res.render('details', {course: courseModel});
});

module.exports = myrouter;
