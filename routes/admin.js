const path = require('path');
const express = require('express');

const rootDir = require('../helpers/path');
const router = express.Router();

const students = [

];

//GET
router.get('/add', (req, res, next) => {
    res.render('add', {
        pageTitle: 'Add Product', 
        path: '/admin/add',
        activeAddStudent: true,
        studentCSS: true,
        formsCSS: true,
    });
    //res.sendFile(path.join(rootDir, 'views', 'add.html'));
});

//POST
router.post('/add', (req,res, next) => {
    students.push({
        name: req.body.name,
        parentage: req.body.parentage,
        roll_no: req.body.roll_no
    });
    res.redirect('/');
});

exports.routes = router;
exports.students = students;