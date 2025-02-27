const colors = ["red", "blue","green","yellow"];
let pattern = [];
let userpattern = [];
let level = 0;
let clickable = false;

const start=document.querySelector(".start");
const condition=document.querySelector(".head");
const buttons=document.querySelectorAll(".xyz");

start.addEventListener("click", startGame);

function startGame() {
    pattern = [];
    userpattern = [];
    level = 0;
    condition.textContent = "Watch the sequence!";
    nextRound();
}

function nextRound() {
    userpattern = [];
    level++;
    clickable = false;
    condition.textContent = `Level ${level}`;
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    pattern.push(randomColor);
    playPattern();
}

function playPattern() {let delay = 500;
    pattern.forEach((color, index) => {
        setTimeout(() => flashButton(color),delay*(index + 1));
    });
    setTimeout(() => {
        clickable = true;
        condition.textContent = "Your turn!";},delay*(pattern.length + 1));
}

function flashButton(color) {const button=document.getElementById(color);
    button.classList.add("flash");
    setTimeout(() => button.classList.remove("flash"),300);
}

buttons.forEach(button => {
    button.addEventListener("click", (e) => {if (!clickable) return;
        const clickedColor = e.target.id;
        userpattern.push(clickedColor);
        flashButton(clickedColor);
        checkPlayerInput();})
});

function checkPlayerInput() {
    const index = userpattern.length - 1;
    
    if (userpattern[index] !== pattern[index]) {
        condition.textContent = "Wrong! Game Over.";
        clickable = false;
        return;
    }
    if (userpattern.length === pattern.length) {
        condition.textContent = "Good job! Next round...";
        setTimeout(nextRound, 1000);
    }}
const help = document.querySelector(".help");
const popup = document.getElementById("pop");
const close = document.querySelector(".close");
help.addEventListener("click", () => popup.style.display = "flex");
close.addEventListener("click", () => popup.style.display = "none")
