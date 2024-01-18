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
const inBox = document.getElementById("in");
const outBox = document.getElementById("out");

inBox.addEventListener("change", changeOut);

function changeOut() {
    const x = inBox.value;
    outBox.innerText = x*x
}

const inBox2 = document.getElementById("in2");
const outBox2 = document.getElementById("out2");

const selecter = document.getElementById("mathStuff")

inBox2.addEventListener("change", equations);

function equations() {
    const y = inBox2.value;
    if (selecter.value == "square") {
        outBox2.innerText = y*y
    }
    else if (selecter.value == "double") {
        outBox2.innerText = y*2

    }
    else if (selecter.value == "algrabr") {
        outBox2.innerText = 2*y + 7
    }
    else if (selecter.value == "cube") {
        outBox2.innerText = y*y*y
    }
    else {
        outBox2.innerText = 0
    }
} 