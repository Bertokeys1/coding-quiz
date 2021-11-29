var timerEl = document.getElementById('timer')
var mainEl = document.getElementById('page')
document.getElementById('start').addEventListener('click', start);

var startTime = 100;

var questions = [
    {
        question = "what is Washingtons baseball team?",
        multiChoice = [
            "the Mermaids",
            "The Dolphins",
            "The Mariners",
            "The walreses",
        ],
        answer: "the Mariners"
    },
    {
        questions = "what is washingtons baseball team?",
        multiChoice = [
            "the Mermaids",
            "The Dolphins",
            "The Mariners",
            "The walreses",
        ],
        answer: "the Mariners"
    },

];

var contentBoxEl = document.getElementById('.content')

var Welcome = document.createElement("h1");
var instructions = document.createElement("h2");
var startGame = document.createElement("button");

Welcome.textContent = "Welcome to the baseball quiz!";

instructions.textContent = "Hit the start button to test your baseball team knowledge!";

startGame.textContent = "Start Game";

contentBoxEl.appendChild(Welcome);
contentBoxEl.appendChild(instructions);
contentBoxEl.appendChild(startGame);

welcome.className = "contentHeader";
welcome.id = "welcomeHeader";
instructions.setAttribute("style", "margin:auto; width:80%; padding:15px 0px; line-height: 1.5;");
instructions.id = "instructions";
startGame.id = "startGameButton";

var startGameButton = document.querySelector('#startGameButton');
var welcomeEl = document.querySelector('#welcomeHeader');
var instructionsEl = document.querySelector('#instructions')

var timer = document.getElementById('countdown');
var timeLeft = 0;