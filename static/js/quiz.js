let quizQuestionAnswer = {
    "What were the Chicago Cubs originally called?": 
    "white stockings",
    "Which Cubs pitcher retired the last batter in Game 7 of the 2016 World Series?": 
    "mike montgomery",
    "Which Cubs pitcher was on the wrong end of Babe Ruth's famous called shot?": 
    "charlie root",
    "Which player was nicknamed Mr. Cub?": 
    "ernie banks",
    "What animal supposedly kept the Cubs from reaching the World Series for 71 years?": 
    "goat",
    "Which Cubs pitcher recorded the most strikeouts in a single game?": 
    "kerry wood",
    "When the Cubs won the 2016 World Series, they ended a ____ year drought?": 
    "108",
    "Wrigley Field wasn’t always called Wrigley Field. What was its name when the Cubs first started playing there in 1916?": 
    "weeghman park",
    "Which Cubs player hit the most home runs in a single season?": 
    "sammy sosa",
    "Which Cubs player was the MVP in the 2016 World Series?": 
    "ben zobrist"
};

let quiz = document.getElementById("quiz");
let cubsQuestions = document.getElementById("cubsQuestions");
let main = document.getElementById("custom")

let c = 1;

for (var question in quizQuestionAnswer) {
    let questionSentence = document.createElement('li');
    questionSentence.classList.add('list-group-item');
    questionSentence.innerHTML = `
    <div class="card" id="question${c}">
        <div class="card-header" id="header${c}"> Question ${c} </div>
        <div class="card-body">
            <div id="body${c}">${question}</div>
            <input type="text" placeholder="" id="answer${c}" class="form-control">
        </div>
    </div>
    `;
    c++;

    cubsQuestions.append(questionSentence);
}

quiz.addEventListener('submit', function (event) {
    event.preventDefault();
    let score = 0;
    var i = 1;
    while (i < c) {
        let question = document.getElementById(`header${i}`);
        let key = document.getElementById(`body${i}`);
        let answer = document.getElementById(`answer${i}`).value;
        let text = key.textContent;
        console.log(text);
        console.log(answer);
        console.log(quizQuestionAnswer[text]);
        if (answer.toUpperCase() == quizQuestionAnswer[text].toUpperCase()) {
            score++;
            question.classList.add('bg-success')
        }
        else {
            question.classList.add('bg-danger')
        };
        i++;
    }
   
})