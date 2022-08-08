const question = document.getElementById('question');
//selects data from html choice-text class and creates new array
const choices = Array.from(document.getElementsByClassName('choice-text')); 

//Object variable
let currentQuestion = {};
//Variable for accepting answers
let acceptingAnswers = true; //to create short delay after answering before revealing outcome
let score = 0;
let questionCounter = 0;
//for hard coded questions and answers
let availableQuestions = []; 

let questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript??',
        choice1: '<script>',
        choice2: '<javascript>',
        choice3: '<js>',
        choice4: '<scripting>',
        answer: 1,
    },
    {
        question:
            "What is the correct syntax for referring to an external script called 'xxx.js'?",
        choice1: "<script href='xxx.js'>",
        choice2: "<script name='xxx.js'>",
        choice3: "<script src='xxx.js'>",
        choice4: "<script file='xxx.js'>",
        answer: 3,
    },
    {
        question: " How do you write 'Hello World' in an alert box?",
        choice1: "msgBox('Hello World');",
        choice2: "alertBox('Hello World');",
        choice3: "msg('Hello World');",
        choice4: "alert('Hello World');",
        answer: 4,
    },
];

//CONSTANTS
const CORRECT_BONUS = 5; //points received for correct answers
const MAX_QUESTIONS = 15; //how many questions user will be asked before end of quiz

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]; //creates full copy so as to not change original
    getNewQuestion();
};

getNewQuestion = () => {

    questionCounter++;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length); //cycles through questions
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question; //pushes the question into DOM

}
