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
            var gradesIndex = grades[i];

            this.renderGradeRow(gradesIndex,this.deleteGrade);

            if(grades.length === 0){
                var pEl = document.getElementById('no-grades');
                pEl.classList.remove("d-none");
            } 

            // tableBodyEl.appendChild(renderRow);

            // var tableRow = document.createElement('tr');

            // var studentName = document.createElement('td');
            // studentName.textContent = gradesIndex.name;
            // tableRow.appendChild(studentName);

            // var studentCourse = document.createElement('td');
            // studentCourse.textContent = gradesIndex.course;
            // tableRow.appendChild(studentCourse);

            // var studentGrade = document.createElement('td');
            // studentGrade.textContent = gradesIndex.grade;
            // tableRow.appendChild(studentGrade);

            // tableBodyEl.appendChild(tableRow);
        }
    }
    onDeleteClick(deleteGrade){
        this.deleteGrade = deleteGrade;

    }
    renderGradeRow(data,deleteGrade){
        var tableBodyEl = this.tableElement.querySelector('tbody');

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
        // createButton.addEventListener('click', deleteGrade(data.id));
        createButton.addEventListener('click', function(){
            deleteGrade(data.id);
        });

        tableBodyEl.appendChild(tableRow);
    }
}