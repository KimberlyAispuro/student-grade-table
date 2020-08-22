var tableEl = document.querySelector('table');

var gradeTable = new GradeTable(tableEl);

var loadApp = new App(gradeTable);
loadApp.start();