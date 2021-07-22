var posOfQuiz = 0;
var correct = 0;
var quiz = document.getElementById("quiz"); 
var contentSection =document.getElementById("contentSection");
var quiz_status; 
var question; 
var option; 
var options; 
var multiA, multiB, multiC;
var timeleft =20;
var gameOver= false;
var gameButton = document.getElementById("gameButton");

//Creating h1
var scoreElementTitle = document.createElement("h1");
scoreElementTitle.setAttribute("id" ,"highScoresTitle")
scoreElementTitle.innerHTML = "High Scores";
contentSection.append(scoreElementTitle);

// getting high scores. if it does not exist, then an empty
var highScores = JSON.parse(localStorage.getItem("High Scores")) || [];
//.map executes a function for each item in ana array
//=> is an arrow function which is a shorter way of saying function()
highScores.map(score =>{
    var outerScore = document.createElement("div");
    outerScore.setAttribute("class" ,"scoreContainer");
    var scoreElement = document.createElement("div");
    scoreElement.setAttribute("id" ,"scoreElement");
    outerScore.append(scoreElement);
    scoreElement.append(score.name);
    scoreElement.append(" - ");
    scoreElement.append(score.score);
    scoreElement.append(" points ");
    contentSection.append(outerScore);
})


//Where the questions begin
var questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        a: "scripting",
        b: "js",
        c: "script",
        answer: "C"
      },
    {
        question: "Where is the correct place to insert a JavaScript?",     
        a: 'The body section',
        b: 'The head section',
        c: 'Both the head section and the body section are correct',
        answer: "C"
      },
    {
        question: "The external JavaScript file must contain the script tag.",
        a: 'True',
        b: 'False',
        c: 'Or both',
        answer: "B"
      }
        ];
function get(id){
            return document.getElementById(id);
        }
function showQuestion(){
    quiz = get("quiz");
    //this is when the game is over
    if (posOfQuiz >= questions.length){
        quiz.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
        get("quiz_status").innerHTML = "Quiz is complete";
        gameOver = true;
        posOfQuiz = 0;
        console.log(correct);
        //correct = 0;

    //Game Over code - Create form
    var form = document.createElement("form");
    form.setAttribute("id","submitForm");
    var nameInput = document.createElement("input");
    nameInput.setAttribute("id", "userName");
    nameInput.setAttribute("type","name" );
    nameInput.setAttribute("placeholder","Enter Your Name" );
    var submitButton = document.createElement("button");
    submitButton.setAttribute("id", "submitButton");
    submitButton.setAttribute("type", "submit");
    submitButton.innerHTML = "Submit";
    form.append(nameInput);
    form.append(submitButton);
    contentSection.append(form);

    //form actions - How the form is controlled - Form controller
    form.addEventListener("submit",function(submit){
        event.preventDefault();
        var enterUserName = nameInput.value;
        var userScore = {
            name: enterUserName,
            score: correct
        }
    //everytime the user enters scores , its pushed into an empty array
        highScores.push(userScore);
        //registering the  scores in a local storage
        localStorage.setItem("High Scores", JSON.stringify(highScores));
        // reload game/page after user store score
        setTimeout(function(){
            location.reload(true);
        }, 1000);
       })



    //Function for gameover stops
        return false;
    }
    //get question and possible answer list from array of questions
    get("quiz_status").innerHTML ="Question "+(posOfQuiz+1)+" of "+questions.length;
    question = questions[posOfQuiz].question;
    multiA =questions[posOfQuiz].a;
    multiB =questions[posOfQuiz].b;
    multiC =questions[posOfQuiz].c;
    // create the radio button and append the values of a,b and c 
    quiz.innerHTML = "<h3>" +question+ "</h3>";
    quiz.innerHTML+= "<label> <input type='radio' name='options' value='A' onclick='checkAnswer()'>"+multiA+"</label><br></br>";
    quiz.innerHTML+= "<label> <input type='radio' name='options' value='B' onclick='checkAnswer()'>"+multiB+"</label><br></br>";
    quiz.innerHTML+= "<label> <input type='radio' name='options' value='C' onclick='checkAnswer()'>"+multiC+"</label><br></br>";
    //quiz.innerHTML+= "<radio onclick='checkAnswer()'>Submit Answer</button>"
}
function checkAnswer(){
    options =document.getElementsByName("options");
    for (var i=0;i<options.length; i++){
        if(options[i].checked){
            option =options[i].value;
        }
    }
    if(option == questions[posOfQuiz].answer){
        correct++;
      }   
      posOfQuiz++;
      showQuestion();
}
function countdownTimer(){
    var displayTimerCountDown = setInterval(function(){
        if(timeleft <=0){
            document.getElementById("countdown").innerHTML ="Game Over"; 
            clearInterval(displayTimerCountDown);
        } else if(gameOver===true){
            clearInterval(displayTimerCountDown);
        } else{
           document.getElementById("countdown").innerHTML = timeleft + " seconds left";
        }
    timeleft = timeleft - 1;
    return displayTimerCountDown;
    }, 1000);
}
//This function is when the game begins
function playGame(){
// Reinitializing Game Button
    gameButton.innerHTML = 'Restart Game?';
    gameButton.addEventListener('click', function(event) {
        location.reload(true);
    })
    countdownTimer();
    showQuestion();
}

function showScores(){
    // var outerScore = document.querySelectorAll(".scoreContainer");
    // console.log(outerScore);
    // outerScore.forEach(element =>{

    //     outerScore.style.display = "block";
    // })
    scoreElementTitle.style.display = "block";
}
//window.addEventListener("load", countdownTimer);