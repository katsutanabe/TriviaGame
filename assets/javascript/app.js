function submitAnswers(){
    var total = 5;
    var score = 0;
//get user input
var q1 = document.forms["quizForm"]["q1"].value; 
var q2 = document.forms["quizForm"]["q2"].value;  
var q3 = document.forms["quizForm"]["q3"].value;  
var q4 = document.forms["quizForm"]["q4"].value;  
var q5 = document.forms["quizForm"]["q5"].value;

//validation
for (i = 1; i <= total; i++) {
  if(eval ('q'+i) == null || eval ('q'+i) == '') {
     alert('You missed question' + i);
     return false;
  }
  
 }

 //set correct answers
 
 var answers = ["b","a","d","b","d"];
 //check answers
 if(q1 == answers[0]) {
    score++; 
 }
 if(q2 == answers[1]) {
    score++; 
 }
 if(q3 == answers[2]) {
    score++; 
 }
 if(q4 == answers[3]) {
    score++; 
 }
 if(q5 == answers[4]) {
    score++; 
 }
 //display results
 var results = document.getElementById('results');
 results.innerHTML = "<h3>You Scored <span>"+score+"</span>out of<span>"+total+"</span></h3>";

 alert('You Scored' +score+ 'out of' +total);
 stop();

     
 return false;

}
var number = 60;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;
    //  The run function sets an interval
    //  that runs the decrement function once a second.
    //  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
    function run() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#show-number").html("<h2>" + number + "</h2>");


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        alert("Time Up!");
      }
    }
     //  The stop function
     function stop() {

        //  Clears our intervalId
        //  We just pass the name of the interval
        //  to the clearInterval function.
        clearInterval(intervalId);
      }
  
      //  Execute the run function.
      run();
  
 

