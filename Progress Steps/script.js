var currentActive = 1;

var prevButton = document.querySelector(".prev");
prevButton.addEventListener("click", () => {
    currentActive--;
    update();
})

var nextButton = document.querySelector(".next");
nextButton.addEventListener("click", () => {
    currentActive++;
    update();
})

var circles = document.querySelectorAll(".circle");
var progress = document.querySelector(".progress");

var update = () => {

    circles.forEach((circle, index) => {
        if(index < currentActive) {
            circle.classList.add("active")
        } else {
            circle.classList.remove("active");
        }
    })

    var actives = document.querySelectorAll(".active");
    progress.style.width = (((actives.length - 1)/ (circles.length - 1)) * 100) + "%";

    if(currentActive === 1) {
        prevButton.disabled = true;
    } else if(currentActive === 4) {
        nextButton.disabled = true;
    } else {
        prevButton.disabled = false;
        nextButton.disabled = false;
    }
}