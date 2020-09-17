var formEl = document.querySelector('form');

var headerEl = document.querySelector('header');

var tableEl = document.querySelector('table');

var noGradesElement = document.getElementById('no-grades');

var gradeForm = new GradeForm(formEl);

var pageHeader = new PageHeader(headerEl);

var gradeTable = new GradeTable(tableEl,noGradesElement);

var loadApp = new App(gradeTable,pageHeader,gradeForm);
loadApp.start();