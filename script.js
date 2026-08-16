 let startpage=document.querySelector("main");
 let choicepage=document.getElementById("choicepage");
 let levelpage=document.getElementById("levelpage");
 let questionpage=document.getElementById("questionpage");
 let quizpage=document.getElementById("quizpage");
 let takequestionpage=document.getElementById("takequestionpage");
 let resultpage=document.getElementById("resultpage")
 let questions=[];
 let quizzes=[];
 let fixedQuizzes = [
    {
        name: "C++",
        level: "Easy",
        questions: [
             {
            question: "Which symbol is used to end a statement in C++?",
            A: ";",
            B: ":",
            C: ".",
            D: ",",
            correctanswer: "A"
        },
        {
            question: "Which function is the starting point of a C++ program?",
            A: "start()",
            B: "main()",
            C: "begin()",
            D: "run()",
            correctanswer: "B"
        },
        {
            question: "Which data type is used to store whole numbers?",
            A: "float",
            B: "string",
            C: "int",
            D: "char",
            correctanswer: "C"
        },
        {
            question: "Which operator is used for addition?",
            A: "*",
            B: "+",
            C: "/",
            D: "%",
            correctanswer: "B"
        },
        {
            question: "Which keyword is used to create a variable that cannot be changed?",
            A: "fixed",
            B: "static",
            C: "const",
            D: "unchange",
            correctanswer: "C"
        }
            
        ]
    },

    {
        name: "C++",
        level: "Medium",
        questions: [
             {
            question: "Which loop is commonly used when the number of iterations is known?",
            A: "for",
            B: "while",
            C: "do-while",
            D: "if",
            correctanswer: "A"
        },
        {
            question: "What does a function return when its return type is void?",
            A: "An integer",
            B: "A string",
            C: "Nothing",
            D: "A Boolean",
            correctanswer: "C"
        },
        {
            question: "Which operator is used to access a member of an object?",
            A: ".",
            B: "->",
            C: "::",
            D: "#",
            correctanswer: "A"
        },
        {
            question: "Which container stores elements in a dynamic array?",
            A: "stack",
            B: "vector",
            C: "queue",
            D: "map",
            correctanswer: "B"
        },
        {
            question: "What is the index of the first element in a C++ array?",
            A: "0",
            B: "1",
            C: "-1",
            D: "2",
            correctanswer: "A"
        }
    
        ]
    },

    {
        name: "C++",
        level: "Hard",
        questions: [
             {
            question: "Which concept allows a derived class to provide a specific implementation of a function from its base class?",
            A: "Encapsulation",
            B: "Inheritance",
            C: "Polymorphism",  
            D: "Abstraction",
            correctanswer: "C"
        },
        {
            question: "Which keyword is used to allocate memory dynamically in C++?",
            A: "malloc",
            B: "new",
            C: "create",
            D: "alloc",
            correctanswer: "B"
        },
        {
            question: "Which data structure follows the LIFO principle?",
            A: "Queue",
            B: "Array",
            C: "Stack",
            D: "Tree",
            correctanswer: "C"
        },
        {
            question: "What is the main purpose of a virtual function?",
            A: "Prevent inheritance",
            B: "Enable runtime polymorphism",
            C: "Create variables",
            D: "Allocate memory",
            correctanswer: "B"
        },
        {
            question: "What does a pointer store?",
            A: "A function",
            B: "A character",
            C: "The address of another variable",
            D: "Only integers",
            correctanswer: "C"
        }
            
        ]
    }
];


 let startbutton =document.getElementById("startbutton");
startbutton.onclick=startquiz;

function startquiz(){
    let username=document.getElementById("username").value;

    if(username===""){
        alert("please enter your name!");
        return;
    }
    let welcommessage=document.getElementById("welcomemessage");
    welcommessage.textContent="welcome, "+username+"!";

    startpage.style.display="none";
    choicepage.style.display="block";
}
//======================================================================================================
let creatquiz=document.getElementById("creatquiz");
creatquiz.onclick=creatQuiz;

function creatQuiz(){
    
choicepage.style.display="none";
levelpage.style.display="block";
}

let createnext=document.getElementById("createnext");
createnext.onclick=createNext;


function createNext(){
    
    let quizname=document.getElementById("quizname").value;

if(quizname===""){
    alert("please enter your Quiz Name!");
    return;
}
levelpage.style.display="none";
questionpage.style.display="block";
}

let addquestionbutton = document.getElementById("addquestion");

addquestionbutton.onclick = addquestion;

function addquestion(){
    let question=document.getElementById("question").value;
    let A=document.getElementById("A").value;
    let B=document.getElementById("B").value;
    let C=document.getElementById("C").value;
    let D=document.getElementById("D").value;

    if(question==""||A==""||B==""||C==""||D==""){
        alert("pleas fillin allfields!");
        return;
    }

    let correctanswer= document.querySelector('input[name="correctanswer"]:checked');
    if(correctanswer==null){
        alert("please enter the correct answer!");
        return;
    }

    let correct=correctanswer.value;

    let newquestion ={

        question:question,
        A: A,
        B: B,
        C: C,
        D: D,
        correctanswer: correct
    };

    questions.push(newquestion);

    document.getElementById("question").value="";
    document.getElementById("A").value="";
    document.getElementById("B").value="";
    document.getElementById("C").value="";
    document.getElementById("D").value="";    
    correctanswer.checked=false;
}

let savebutton=document.getElementById("savequiz");
savebutton.onclick= savequiz;

function savequiz(){
    if(questions.length !=5){
        alert("You must add exactly 5 questions to save the quiz");
        return;
    }
    let quiz = {
    name: document.getElementById("quizname").value,
    level: document.getElementById("levelselect").value,
    questions: questions
     };

    quizzes.push(quiz);
    alert("Quiz saved successfully!");
    questions=[];
    questionpage.style.display = "none";
    choicepage.style.display = "block";
}
//==============================================================================================================
let takequiz=document.getElementById("takequiz");
takequiz.onclick=takeQuiz;

function takeQuiz(){
    
    choicepage.style.display="none";
    levelpage.style.display="block";

    document.getElementById("quizname").style.display="none";
    document.getElementById("createnext").style.display="none";
    document.getElementById("takenext").style.display="inline-block";
    document.getElementById("leveltitle").textContent="Select the level of the quiz you want to take:";
}
let takenext=document.getElementById("takenext");
takenext.onclick=takeNext;

function takeNext(){
    let selectedlevel=document.getElementById("levelselect").value;
    let availablequizzes=fixedQuizzes.filter(function(quiz){
        return quiz.level===selectedlevel;});

    let userquizzes = quizzes.filter(function(quiz){
    return quiz.level === selectedlevel;});

    availablequizzes = availablequizzes.concat(userquizzes);


    if(availablequizzes.length===0){
        alert("Sorry, there are no quizzes available for this level")
        return;
    }

    let quizlist=document.getElementById("quizlist");
    quizlist.innerHTML="";
    
   availablequizzes.forEach(function(quiz){
    let quizitem=document.createElement("div");
    quizitem.className="quizitem";

    let quizname=document.createElement("span");
    quizname.textContent=quiz.name;

    let attemptbutton=document.createElement('button');
    attemptbutton.textContent="Attempt Quiz";
    attemptbutton.className = "attemptbutton";

    quizitem.appendChild(quizname);
    quizitem.appendChild(attemptbutton);
    attemptbutton.onclick = function(){
    startQuiz(quiz);};

    quizlist.appendChild(quizitem);
   });

   levelpage.style.display="none";
   quizpage.style.display="block";
}

let currentQuiz;
function startQuiz(quiz){
    currentQuiz = quiz;

    quizpage.style.display="none";
    takequestionpage.style.display="block";

    let quiztitle = document.getElementById("quiztitle");
    quiztitle.textContent = quiz.name;

    document.querySelectorAll('input[type="radio"]').forEach(function(radio){
    radio.checked = false;});


     showQuestions();
}

function showQuestions(){

    for(let i = 0; i < 5; i++){

        let question = currentQuiz.questions[i];

        document.getElementById("q" + (i + 1)).textContent =
            (i + 1) + ". " + question.question;

        document.getElementById("q" + (i + 1) + "ALabel").textContent = question.A;
        document.getElementById("q" + (i + 1) + "BLabel").textContent = question.B;
        document.getElementById("q" + (i + 1) + "CLabel").textContent = question.C;
        document.getElementById("q" + (i + 1) + "DLabel").textContent = question.D;
    }
}

let submitquiz = document.getElementById("submitquiz");
submitquiz.onclick = checkAnswers;

  function checkAnswers() {
    let score=0;
    for(let i = 0; i < 5; i++){

         let answer = document.querySelector('input[name="q' + (i + 1) + '"]:checked').value;
        if(answer===currentQuiz.questions[i].correctanswer){
           score++;

         }
        }


takequestionpage.style.display="none";
resultpage.style.display="block";

let resultmessage = document.getElementById("resultmessage");

if(score === 5){
    resultmessage.textContent = "Excellent! You scored 5 / 5 ";
}
else if(score >= 3){
    resultmessage.textContent = "Good job! You scored " + score + " / 5 ";
}
else{
    resultmessage.textContent = "Keep practicing! You scored " + score + " / 5 ";
}

}
let backbutton=document.getElementById("Backbutton");
backbutton.onclick=back;
function back(){
    resultpage.style.display="none";
    choicepage.style.display="block";
}
 