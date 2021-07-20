
var posOfQuiz = 0;
var correct = 0;
var quiz; 
var quiz_status; 
var question; 
var choice; 
var choices; 
var multiA, multiB, multiC;
var questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        a: '<scripting>',
        b: '<js>',
        c: '<script>',
        answer: "C"
      },
    {
        question: "Where is the correct place to insert a JavaScript?",     
        a: 'The <body> section',
        b: 'The <head> section',
        c: 'Both the <head> section and the <body> section are correct',
        answer: "C"
      },

    {
        question: "The external JavaScript file must contain the <script> tag.",
        a: 'True',
        b: 'False',
        c: 'Or both',
        answer: "B"
      }
        ];

var timeleft =10;
var displayTimerCountDown = setInterval(function(){
    if(timeleft <=0){
        clearInterval(displayTimerCountDown);
        document.getElementById("countdown").innerHTML ="Expired"

    }else{
        document.getElementById("countdown").innerHTML = timeleft;
    }

timeleft = timeleft - 1;
}, 1000);