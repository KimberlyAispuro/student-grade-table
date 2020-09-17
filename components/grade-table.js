class GradeTable{
    constructor(tableElement,noGradesElement){
        this.tableElement = tableElement;
        this.noGradesElement = noGradesElement;
    }
    updateGrades(grades){
        console.log(grades);
        
        var tableBodyEl = this.tableElement.querySelector('tbody');
        tableBodyEl.textContent = " ";

        for(var i=0; i<grades.length; i++){
            var grade = grades[i];

            var updatedGrades = this.renderGradeRow(grade,this.deleteGrade);
            tableBodyEl.appendChild(updatedGrades);
        }
        
        if(grades.length > 0){
            this.noGradesElement.classList.add("d-none");
        } else{
            this.noGradesElement.classList.remove("d-none");
        }
    }
    onDeleteClick(deleteGrade){
        this.deleteGrade = deleteGrade;

    }
    renderGradeRow(data,deleteGrade){
        
        var tableRow = document.createElement('tr');

        var studentName = document.createElement('td');
        studentName.textContent = data.name;
        tableRow.appendChild(studentName);

        var studentCourse = document.createElement('td');
        studentCourse.textContent = data.course;
        tableRow.appendChild(studentCourse);

        var studentGrade = document.createElement('td');
        studentGrade.textContent = data.grade;
        tableRow.appendChild(studentGrade);

        var operationsCol = document.createElement('td');
        tableRow.appendChild(operationsCol);

        var createButton = document.createElement('button');
        createButton.classList = 'btn btn-danger';
        createButton.textContent = 'Delete';
        operationsCol.appendChild(createButton);
        createButton.addEventListener('click', function(){
            deleteGrade(data.id);
        });
        return tableRow;
    }
}