const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
    {
        question:"Where does The Elephant Gathering (billed as one of the worlds' greatest animal spectacles) take place every year?",
        choice1:"Yala National Park",
        choice2:"Minneriya National Park",
        choice3:"Udawalawe National Park",
        choice4:"Wilpattu National Park",
        answer:1
    },
    {
        question:"Where does The Elephant Gathering (billed as one of the worlds' greatest animal spectacles) take place every year?",
        choice1:"Yala Park",
        choice2:"Minneriya Park",
        choice3:"Udawalawe Park",
        choice4:"Wilpattu Park",
        answer:2
    },
    {
        question:"Where does The Elephant Gathering (billed as one of the worlds' greatest animal spectacles) take place every year?",
        choice1:"YalaNational Park",
        choice2:"MinneriyaNational Park",
        choice3:"UdawalaweNational Park",
        choice4:"WilpattuNational Park",
        answer:3
    },
    {
        question:"Where does The Elephant Gathering (billed as one of the worlds' greatest animal spectacles) take place every year?",
        choice1:"Yala",
        choice2:"Minneriya",
        choice3:"Udawalawe",
        choice4:"Wilpattu",
        answer:4
    }
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //go to the end page
        return window.location.assign('/end.html');
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        getNewQuestion();
    });
});

startGame();    