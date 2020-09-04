var formEl = document.querySelector('form');

var headerEl = document.querySelector('header');

var tableEl = document.querySelector('table');

var pElement = document.querySelector('p');

var gradeForm = new GradeForm(formEl);

var pageHeader = new PageHeader(headerEl);

var gradeTable = new GradeTable(tableEl,pElement);

var loadApp = new App(gradeTable,pageHeader,gradeForm);
loadApp.start();