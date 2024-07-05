const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Rome",
        correct: "c"
    },
    {
        question: "Who is the CEO of Tesla?",
        a: "Bill Gates",
        b: "Elon Musk",
        c: "Steve Jobs",
        d: "Mark Zuckerberg",
        correct: "b"
    },
    {
        question: "What is the most used programming language in 2021?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d"
    },
    {
        question: "Who won the 2022 FIFA World Cup?",
        a: "Germany",
        b: "Brazil",
        c: "France",
        d: "Argentina",
        correct: "d"
    },
    {
        question: "What does HTML stand for?",
        a: "Hyper Text Markup Language",
        b: "Home Tool Markup Language",
        c: "Hyperlinks and Text Markup Language",
        d: "Hyperlinking Text Markup Language",
        correct: "a"
    },
    {
        question: "Which language is used for styling web pages?",
        a: "HTML",
        b: "JQuery",
        c: "CSS",
        d: "XML",
        correct: "c"
    },
    {
        question: "Which is not a JavaScript Framework?",
        a: "Python Script",
        b: "JQuery",
        c: "Django",
        d: "NodeJS",
        correct: "a"
    },
    {
        question: "Which is used for Connect To Database?",
        a: "HTML",
        b: "PHP",
        c: "CSS",
        d: "JS",
        correct: "b"
    },
    {
        question: "Which of the following is not a programming language?",
        a: "Python",
        b: "Java",
        c: "HTML",
        d: "JavaScript",
        correct: "c"
    },
    {
        question: "What does CSS stand for?",
        a: "Cascading Style Sheets",
        b: "Colorful Style Sheets",
        c: "Creative Style Sheets",
        d: "Computer Style Sheets",
        correct: "a"
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        a: "font",
        b: "styles",
        c: "class",
        d: "style",
        correct: "d"
    },
    {
        question: "What does SQL stand for?",
        a: "Stylish Question Language",
        b: "Structured Query Language",
        c: "Statement Question Language",
        d: "Structured Query List",
        correct: "b"
    },
    {
        question: "Which of the following is a server-side JavaScript object?",
        a: "Function",
        b: "File",
        c: "FileUpload",
        d: "Date",
        correct: "c"
    }
];


const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if(currentQuiz==quizData.length-1){
            document.querySelector("#submit").innerHTML="Submit";
        }
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
