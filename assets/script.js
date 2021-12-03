var questions = [
    {
        question: "what is Washingtons baseball team?",
        multiChoice: [
            "the Mermaids",
            "The Dolphins",
            "The Mariners",
            "The walruses",
        ],
        answer: "the Mariners"
    },
    {
        question: "what is Texas baseball team?",
        multiChoice: [
            "the Astros",
            "The Cowboys",
            "The Guys",
            "The Pigeons",
        ],
        answer: "the Astros"
    },
    {
        question: "what is New york baseball team?",
        multiChoice: [
            "the City",
            "The Buildings",
            "The Big apples",
            "The Mets",
        ],
        answer: "the Mets"
    },
    {
        question: "what is Massachusetts baseball team?",
        multiChoice: [
            "the East balls",
            "The Mass bats",
            "The Red sox",
            "The Scargs",
        ],
        answer: "the Red sox"
    },
    {
        question: "what is California baseball team?",
        multiChoice: [
            "the Bears",
            "The Heat",
            "The Angels",
            "The Pigeons",
        ],
        answer: "the Angels"
    },
    {
        question: "what is Georgia baseball team?",
        multiChoice: [
            "the Central bats",
            "The Swings",
            "The Braves",
            "The Birds",
        ],
        answer: "the Braves"
    },
    {
        question: "what is philadelphia baseball team?",
        multiChoice: [
            "the Steaks",
            "The Cheese",
            "The Phillies",
            "The Mits",
        ],
        answer: "the Phillies"
    },
    {
        question: "what is Ohio baseball team?",
        multiChoice: [
            "the Cold throws",
            "The Sweaters",
            "The Guardians",
            "The Lions",
        ],
        answer: "the Guardians"
    },
    {
        question: "what is Illinois baseball team?",
        multiChoice: [
            "the Burrss",
            "The Snowcones",
            "The Cubs",
            "The Pandas",
        ],
        answer: "the Cubs"
    },
    {
        question: "what is Minnesota baseball team?",
        multiChoice: [
            "the Bros",
            "The Sibs",
            "The Twins",
            "The dads",
        ],
        answer: "the Twins"
    },
    {
        question: "what is Florida baseball team?",
        multiChoice: [
            "the Dolphins",
            "The Seastars",
            "The Marlins",
            "The Oranges",
        ],
        answer: "the Marlins"
    },
    {
        question: "what is Arizona baseball team?",
        multiChoice: [
            "the Sun rays",
            "The Shades",
            "The Diamondbacks",
            "The Lizards",
        ],
        answer: "the Diamondbacks"
    },
    {
        question: "what is colorado baseball team?",
        multiChoice: [
            "the Rocks",
            "The Rockies",
            "The Guys",
            "The Hieghts",
        ],
        answer: "the Rockies"
    },
    {
        question: "what is Kansas baseball team?",
        multiChoice: [
            "the No place like home",
            "The Royals",
            "The Midtown",
            "The Pigeons",
        ],
        answer: "the Royals"
    },
    {
        question: "what is D.C. baseball team?",
        multiChoice: [
            "the Presidents",
            "The Capitals",
            "The Guys",
            "The Nationals",
        ],
        answer: "the Nationals"
    },
    {
        question: "what is Connecticuts baseball team?",
        multiChoice: [
            "the East side",
            "The Toys",
            "The Reds",
            "The Pigeons",
        ],
        answer: "the Reds"
    },
    {
        question: "what is Milwaukee baseball team?",
        multiChoice: [
            "the players",
            "The homes",
            "The pirates",
            "The Brewers",
        ],
        answer: "the Brewers"
    },
    {
        question: "what is Texas baseball team?",
        multiChoice: [
            "the Astros",
            "The Cowboys",
            "The Guys",
            "The Pigeons",
        ],
        answer: "the Astros"
    },
    {
        question: "what is Texas baseball team?",
        multiChoice: [
            "the Astros",
            "The Cowboys",
            "The Guys",
            "The Pigeons",
        ],
        answer: "the Astros"
    },
    {
        question: "what is Texas baseball team?",
        multiChoice: [
            "the Astros",
            "The Cowboys",
            "The Guys",
            "The Pigeons",
        ],
        answer: "the Astros"
    },
    {
        question: "what is Texas baseball team?",
        multiChoice: [
            "the Astros",
            "The Cowboys",
            "The Guys",
            "The Pigeons",
        ],
        answer: "the Astros"
    },

];

var contentBoxEl = document.getElementById('.content')

startGameButton.onclick = startGame;

function startGame() {
    clearPage();
    countdown();
    addQuestions();
}

function clearPage() {
    document.getElementById("header").innerHTML = "";
}

var timerEl = document.getElementById("countdown");
var contentEl = document.getElementById("content");

function countdown() {
    var timeLeft = 60;
    var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
      }
    }, 1000);
}

var quizPoint = 0;

function addQuestions() {
    // Create question headers
    var question = document.createElement("div");
    question.textContent = questions[quizPoint].question;
    question.className = "content";
    contentEl.appendChild(question);
    
    // Loop through the multiple choice answers and create buttons for them.
    for(var i=0; i<4; i++) {
        var multiChoice = document.createElement("button");
        var lineBreak = document.createElement("br");
        multiChoice.textContent = questions[quizPoint].multiChoice[i];
        multiChoice.className = "multiChoice";
        contentEl.appendChild(multiChoice);
        contentEl.appendChild(lineBreak);
        multiChoice.addEventListener("click",nextQuestion)
    };
};

function nextQuestion(event) {
    var userAnswer = event.target.innerText;
    var answer = questions[quizPoint].answer;
    var result = document.createElement("h2");

    if(userAnswer == answer) {
        console.log("correct");
        result.textContent = answer + " was correct! ";
        result.className = "result";
    } else {
        console.log("incorrect");
        result.className = "result";
    };
    quizPoint++;
    contentEl.innerHTML = "";
    contentEl.appendChild(result);
    addQuestions();

};





startGameButton.addEventListener("click",countdown);
