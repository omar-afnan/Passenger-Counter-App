

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0 

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

// Decrement button
const decrementBtn = document.getElementById("decrement-btn"); 
// Reset button
const resetBtn = document.getElementById("reset-btn"); 

// Assign function to decrement button
decrementBtn.onclick = function () {
    count--;
    countEl.textContent = count;
};

// Assign function to reset button
resetBtn.onclick = function () {
    count = 0;
    countEl.textContent = count;
};
