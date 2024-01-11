const numberBox = document.getElementById("guess");
const feedbackBox = document.getElementById("feedback");

const newNumber = Math.ceil(Math.random()*100);

numberBox.addEventListener("change", checkNumber);

function checkNumber() {
    const guess = numberBox.value;
    if (guess < newNumber) {
        feedbackBox.innerText = "too low"
    }
    else if (guess > newNumber) {
        feedbackBox.innerText = "too big";
    }
    else {
        feedbackBox.innerText = "just right";
    }
}
