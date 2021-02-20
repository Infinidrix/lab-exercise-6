const es5Solution = document.querySelector("#es5-solution");
const es6Arrows = document.querySelector("#es6-arrow");

document.addEventListener("DOMContentLoaded", () => {
    normalFunction();
    arrowFunction();
})

function normalFunction(){
    this.result = "The right value"
    var self = this;
    setTimeout(function () {
        es5Solution.textContent = self.result;
    }, 200)
}


function arrowFunction(){
    this.result = "The right value"
    var self = this;
    setTimeout(() => {
        es6Arrows.textContent = this.result;
    });
}