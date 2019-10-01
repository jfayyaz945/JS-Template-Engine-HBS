const path = require('path');
const express = require('express');

const rootDir = require('../helpers/path');
const adminData= require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    const students = adminData.students
    res.render('student', {
        prods: students, 
        pageTitle: 'Student', 
        path: '/', 
        hasProducts: students.length > 0,
        activeStudent: true,
        studentCSS: true,
    });
});

module.exports = router;