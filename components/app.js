class App {
    constructor(gradeTable,pageHeader){
        this.gradeTable = gradeTable;
        this.pageHeader = pageHeader;
        this.handleGetGradesError = this.handleGetGradesError.bind(this);
        this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    }
    handleGetGradesError(error){
        console.log(error);
    }
    handleGetGradesSuccess(grades){
        this.gradeTable.updateGrades(grades);
        var sum = 0;
        for(var i=0; i<grades.length; i++){
            sum += grades[i].grade;
        }
        var average = sum/grades.length;
        this.pageHeader.updateAverage(average);
    }
    getGrades(){
        $.ajax({
            method:"GET",
            url:"https://sgt.lfzprototypes.com/api/grades",
            headers: {
                "X-Access-Token": "NmVKS6NW"
            },
            success: this.handleGetGradesSuccess,
            error: this.handleGetGradesError
        });
    }
    start(){
        this.getGrades();
    }

}