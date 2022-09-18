const question = document.getElementById('question');
//selects data from html choice-text class and creates new array
const choices = Array.from(document.getElementsByClassName('choice-text')); 

//Object variable
let currentQuestion = {};
//Variable for accepting answers
let acceptingAnswers = false; //to create short delay after answering before revealing outcome
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
        answer: 1
    },
    {
        question:
            "What is the correct syntax for referring to an external script called 'xxx.js'?",
        choice1: "<script href='xxx.js'>",
        choice2: "<script name='xxx.js'>",
        choice3: "<script src='xxx.js'>",
        choice4: "<script file='xxx.js'>",
        answer: 3
    },
    {
        question: " How do you write 'Hello World' in an alert box?",
        choice1: "msgBox('Hello World');",
        choice2: "alertBox('Hello World');",
        choice3: "msg('Hello World');",
        choice4: "alert('Hello World');",
        answer: 4
    }
];

//CONSTANTS
const CORRECT_BONUS = 5; //points received for correct answers
const MAX_QUESTIONS = 3; //how many questions user will be asked before end of quiz

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]; //creates full copy so as to not change original
    getNewQuestion();
};

getNewQuestion = () => {

    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //go to the end of page
        return window.location.assign('/correct.html');
    }

    questionCounter++;
    
    const questionIndex = Math.floor(Math.random() * availableQuestions.length); //brings up random question from available questions
    currentQuestion = availableQuestions[questionIndex];
    question.innerHTML = currentQuestion.question; //pushes random question into HTML

    choices.forEach((choice) => { //pushes answers into data-number sets in HTML
        const number = choice.dataset['number'];
        choice.innerHTML = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1); //removes asked question so question isn't repeated
    acceptingAnswers = true;
};

//grabs user answer choice information to see which one was selected
choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
       if(!acceptingAnswers) return;

       acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number']; 

       getNewQuestion(); //after answer is selected we get a new question
    });
});
