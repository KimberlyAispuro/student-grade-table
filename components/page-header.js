class PageHeader{
    constructor(headerElement){
        this.headerElement = headerElement;
    }
    updateAverage(newAverage){
        // console.log(newAverage);
        var badgeEl = this.headerElement.querySelector('span');
        badgeEl.textContent = newAverage.toFixed(2);
    }
}