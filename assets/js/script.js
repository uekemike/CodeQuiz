
var posOfQuiz = 0;
var correct = 0;
var quiz; 
var quiz_status; 
var question; 
var option; 
var options; 
var multiA, multiB, multiC;
var timeleft =10;

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
    quiz.innerHTML+= "<label> <input type='radio' name='options' value='A'>"+multiA+"</label><br></br>";
    quiz.innerHTML+= "<label> <input type='radio' name='options' value='B'>"+multiB+"</label><br></br>";
    quiz.innerHTML+= "<label> <input type='radio' name='options' value='C'>"+multiC+"</label><br></br>";
    quiz.innerHTML+= "<button onclick='checkAnswer()'>Submit Answer</button>"

    
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

//use an evenlistener Load display the questions when the page loads
//window.addEventListener("load", showQuestion);


function countdownTimer(){

var displayTimerCountDown = setInterval(function(){
    if(timeleft <=0){
        clearInterval(displayTimerCountDown);
        document.getElementsByName("aside").innerHTML ="Expired"; 

    }else{
        document.getElementsByName("aside").innerHTML = timeleft;
    }

timeleft = timeleft - 1;
}, 1000);

//return countdownTimer();
}

//window.addEventListener("load", countdownTimer);