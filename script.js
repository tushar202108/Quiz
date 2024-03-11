const Question = [
    {
        question: "Who heads the RBI??",
        answer: [
            { Text: "Finance Minister", Correct: false },
            { Text: "Prime Minister", Correct: false },
            { Text: "Governor", Correct: true },
            { Text: "President", Correct: false },
        ]
    },
    {
        question: "Where is India’s Silicon Valley located?",
        answer: [
            { Text: "Chennai", Correct: false },
            { Text: "Banglore", Correct: false },
            { Text: "New Delhi", Correct: false },
            { Text: "Kerala", Correct: true },
        ]
    },
    {
        question: "What is the most populous state in India?",
        answer: [
            { Text: "Uttar Pradesh", Correct: true },
            { Text: "Madhya Pradesh", Correct: false },
            { Text: "Rajasthan", Correct: false },
            { Text: "Maharasthra", Correct: false },
        ]
    },
    {
        question: "What is the least populous state in India",
        answer: [
            { Text: "Sikkim", Correct: true },
            { Text: "Aizwal", Correct: false },
            { Text: "Goa", Correct: false },
            { Text: "Mizoram", Correct: false },
        ]
    },
    {
        question: "What is the least developed state in India?",
        answer: [
            { Text: "Uttar Pradesh", Correct: true },
            { Text: "Madhya Pradesh", Correct: false },
            { Text: "Rajasthan", Correct: false },
            { Text: "Maharasthra", Correct: false },
        ]
    },
    {
        question: "What is the current inflation rate in India?",
        answer: [
            { Text: "8.7%", Correct:false },
            { Text: "5.5%", Correct: false },
            { Text: "6.7%", Correct: true },
            { Text: "5.1%", Correct: false },
        ]
    },
    {
        question: "Which Country has world best education system ?",
        answer: [
            { Text: "China", Correct: false },
            { Text: "India", Correct: false },
            { Text: "Russia", Correct: false },
            { Text: "Sweden", Correct: true },
        ]
    },
    {
        question: "What is the name of the largest ocean in the world?",
        answer: [
            { Text: "Pacific Ocean", Correct: true },
            { Text: "indian Ocean", Correct: false },
            { Text: "Atlantic Ocean", Correct: false },
            { Text: "Arctic Ocean", Correct: false },
        ]
    },
    {
        question: "What is the name of the hottest planet in the solar system?",
        answer: [
            { Text: "Mercury", Correct: false },
            { Text: "Neptune", Correct: false },
            { Text: "Earth", Correct: false },
            { Text: "Venus", Correct: true },
        ]
    },
    {
        question: "What is the name of the longest river in the world?",
        answer: [
            { Text: "Ganga", Correct: false },
            { Text: "Amazon", Correct: false },
            { Text: "Nile", Correct: true },
            { Text: "Yamuna", Correct: false },
        ]
    },
];


let question = document.getElementById('questions');
let AnswerButton = document.getElementById('Answer-button');
let Next = document.getElementById('next')

let CurrentQus = 0;
let Score = 0;

function startquiz() {
    CurrentQus = 0,
        Score = 0,
        Next.innerHTML = "NEXT",
        showQus();
}
function showQus() {
    resetState();
    let CurrentQuestion = Question[CurrentQus];
    let QusNo = CurrentQus + 1;
    question.innerHTML = QusNo + "." + CurrentQuestion.question;

    CurrentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.Text;
        button.classList.add('buton');
        AnswerButton.appendChild(button);
        if(answer.Correct){
            button.dataset.Correct = answer.Correct;
        }
        button.addEventListener("click",selectAnswer)

    });
}


function resetState() {
    Next.style.display = "none";
    while (AnswerButton.firstChild) {
        AnswerButton.removeChild(AnswerButton.firstChild)

    }
}

function selectAnswer(e){
    const selectedAnswer = e.target;
    const  isCorrect = selectedAnswer.dataset.Correct==="true";
    if(isCorrect)
    {
        selectedAnswer.classList.add("correct");
        Score++;
    }
    else {
        selectedAnswer.classList.add("incorrect"); 
    }
    Array.from(AnswerButton.children).forEach(button =>{
        if(button.dataset.Correct==="true"){
            button.classList.add("correct");
        }
        button.disabled ="true";
    });
    Next.style.display ="block";
}

function showScore(){
    resetState();
    question.innerHTML = `Your score ${Score} out of ${Question.length}!`; 
    Next.innerHTML="Play Again";
    Next.style.display ="block";
}

function handleNextButton(){
    CurrentQus++;
    if(CurrentQus<Question.length)
    {
        showQus();
    }
    else{
        showScore();
    }
}

Next.addEventListener("click", ()=>{
    if(CurrentQus < Question.length)
    {
        handleNextButton();
    }
    else {
        startquiz();
    }
})


startquiz();
