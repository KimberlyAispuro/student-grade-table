class App {
    constructor(){
        this.handleGetGradesError = this.handleGetGradesError.bind(this);
        this.handleGetGradesSuccess = this.handleGetGradesSuccess(this);
    }
    handleGetGradesError(error){
        console.log(error);
    }
    handleGetGradesSuccess(grades){
        console.log(grades);
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