// COUNTER PROGRAM

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;


// this function increases counter
increaseBtn.onclick = function() {
    count++;
    countLabel.textContent = count;
}

// this function decreases counter
decreaseBtn.onclick = function() {
    count--;
    countLabel.textContent = count;
}

// this function resets counter
resetBtn.onclick = function() {
    count = 0;
    countLabel.textContent = count; 
}