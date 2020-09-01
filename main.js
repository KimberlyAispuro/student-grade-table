var formEl = document.querySelector('form');

var headerEl = document.querySelector('header');

var tableEl = document.querySelector('table');

var gradeForm = new GradeForm(formEl);

var pageHeader = new PageHeader(headerEl);

var gradeTable = new GradeTable(tableEl);

var loadApp = new App(gradeTable,pageHeader,gradeForm);
loadApp.start();