<<<<<<< HEAD
var formEl = document.querySelector('form');

=======
>>>>>>> master
var headerEl = document.querySelector('header');

var tableEl = document.querySelector('table');

<<<<<<< HEAD
var gradeForm = new GradeForm(formEl);

=======
>>>>>>> master
var pageHeader = new PageHeader(headerEl);

var gradeTable = new GradeTable(tableEl);

<<<<<<< HEAD
var loadApp = new App(gradeTable,pageHeader,gradeForm);
=======
var loadApp = new App(gradeTable,pageHeader);
>>>>>>> master
loadApp.start();