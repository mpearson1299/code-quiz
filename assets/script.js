var startingMinutes = 5;
var time = startingMinutes * 60;
var startButton = document.querySelector("#start");
var countdownEl = document.getElementById("countdown");
var questions = [
    {
        prompt: "How to declare a variable using JavaScript?\n(a) Use var\n\ (b) Use const\n(c) Use Let",
        answer: "a"
    },
    {
        prompt: "How to create an array using javascript?\n(a) use var\n\ (b) use [] and put what you want inside the brackets with quotaion marks\n(c) use () and put what you want inside the brackets with quotation marks",
        answer: "b"
    },
    {
        prompt: "How to create a function using JavaScript?\n(a) use []\n\ (b) write function then name your function and put () after it then {}\n(c) just write funtion",
        answer: "b"
    }
]
var score = 0;

for(var i=0; i < questions.length; i++) {
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer) {
        score++;
        alert("Correct!");
    } else {
        alert("Wrong!");
        decreaseTimer();
    }
}
alert("you got " + score + "/" + questions.length)

var timer = setInterval(startTimer, 1000);

function startTimer() {
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
    displayQuestion();
    if(timer === 0) {
        clearInterval(timer)
    }
    
}

function decreaseTimer() {
    time -= 10;
    console.log("incorrect answer! 10secs deducted from the time.")
}






startButton.addEventListener("click", startTimer);