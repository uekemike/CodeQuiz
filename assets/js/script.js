var posOfQuiz = 0;
var correct = 0;
var quiz; 
var quiz_status; 
var question; 
var option; 
var options; 
var multiA, multiB, multiC;
var timeleft =20;

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
    if (posOfQuiz >= questions.length){
        quiz.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
        get("quiz_status").innerHTML = "Quiz is complete";
        posOfQuiz =0;
        correct =0;
        
        return false;
        
    }
    //get quwestion and possible answer list from array of questions
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
        if(timeleft ===0){
            clearInterval(displayTimerCountDown);
            document.getElementById("countdown").innerHTML ="Game Over"; 
          
    
        }else{
            document.getElementById("countdown").innerHTML = timeleft + " seconds left";
        }

timeleft = timeleft - 1;
}, 1000);

//return countdownTimer();
}
function  gameOver(){
    clearInterval();
   
    
}

function playGame(){
    countdownTimer();
    showQuestion();
}
//window.addEventListener("load", countdownTimer);
