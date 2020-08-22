class GradeTable{
    constructor(tableElement){
        this.tableElement = tableElement;
    }
    updateGrades(grades){
        console.log(grades);
        
        // var tableBodyEl = this.tableElement.querySelector('tbody');
        // tableBodyEl.textContent = " ";

        // for(var i=0; i<grades.length; i++){
        //     var grades = grades[i];

        //     var tableRow = document.createElement('tr');

        //     var studentName = document.createElement('td');
        //     studentName = textContent = grades.name;
        //     tableRow.appendChild(studentName);

        //     var studentCourse = document.createElement('td');
        //     studentCourse.textContent = grades.course;
        //     tableRow.appendChild(studentCourse);

        //     var studentGrade = document.createElement('td');
        //     studentGrade.textContent = grades.grade;
        //     tableRow.appendChild(studentGrade);

        //     tableBodyEl.appendChild(tableRow);
        // }
    }
}