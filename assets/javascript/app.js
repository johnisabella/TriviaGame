//Define game variables
var correctAnswers = 0
var incorrectAnswers = 0
var unanswered = 0
var timer = 120;
var rightAnswers = ["1790", "Alexandria", "CivilWar", "Grant", "13", "700", "RonaldRegan", "Lincoln", "Newseum", "vote"]
var playerAnswers = [];

//Set up HTML elements (one large function that spans the entire length of the code)
$(document).ready(function(){

//Call initial functions to set up the game, including the homeScreen function and the gameStart function (upon player clicking game start button)
homeScreen();
$('#trivia_questions').hide();
$('.end_game').hide();
$('#answer_display').hide();
$('#start_button').on('click', gameStart);
$('#start_button').on('click', showQuestions);
$('#start_button').on('click', hideStartButton);
$('#answer_button').on('click', showAnswers);

//Calls the playerAnswerArray function and displays an alert when player submits answers.
$("#trivia_questions").submit(function(event) {
  alert("Thank you for submitting your answers.");
  playerAnswerArray();
  compareAnswers();
  stop();
  event.preventDefault();
})

//Function definitions:
//Sets up the initial home screen with start button and game instructions.
function homeScreen () {
$('#start_button').html('<button type="button" class="btn btn-primary btn-lg btn-block">Click here to start game.</button>');
}

//Function that brings the timer and the trivia questions onto the screen upon user clicking the start button on the home screen.
function gameStart () {
  intervalId = setInterval(decrement, 1000);
}
//  The decrement function.
function decrement() {
  //  Decrease timer variable by one.
  timer--;
  //  Show the number in the #show-number tag.
  $("#game_timer").html("<h2>Time remaining: " + timer + " seconds </h2>");
  //  Once number hits zero...
  if (timer === 0) {
    //  ...run the stop function.
    stop();
    //  Alert the user that time is up.
    alert("Time Up!");
  }
}
//Function that stops the timer if answers are submitted or if time runs out:
function stop() {
  //  Clears our intervalId
  //  We just pass the name of the interval
  //  to the clearInterval function.
  clearInterval(intervalId);
  showGameScore();
}

//Simple function that shows the trivia questions (already written as a form within the HTML document)
function showQuestions() {
  $('#trivia_questions').show();
}
//Simple function that hides the start button after the player clicks it.
function hideStartButton() {
  $('#start_button').hide();
}

//Function that puts all of the user guesses into an array (to compare with rightAnswers array)
function playerAnswerArray() {
  // console.log(playerAnswers);
  for(var i = 0; i < rightAnswers.length; i++) {
     var element = $("input[name='" + i + "']:checked").val();
     console.log(element);
     playerAnswers.push(element);
   }
   // console.log("Element = " + element);
   console.log(playerAnswers);
 }

 //Function that compares the playerAnswer array to the rightAnswers array, adds matches to the correctAnswers count, adds mismatches to incorrectAnswers count:
 function compareAnswers (){
   for(var j = 0; j < rightAnswers.length; j++) {
     if (playerAnswers[j] === rightAnswers[j]) {
       correctAnswers ++;
     } else {
       incorrectAnswers ++;
     }
   }
console.log(correctAnswers);
console.log(incorrectAnswers);
 }

//Function that hides all of the trivia questions and the timer upon submission of answers. This function also displays the number of correct and incorrect answers.
function showGameScore () {
  $('#trivia_questions').hide();
  $('#game_timer').hide();
  $('.game_content').text("Thank you for playing. Your results are below. If you got more than 8 questions correct, then congratulations, you are a true Washington insider.");
  $('.end_game').show();
  $('#game_scores1').text("Correct Answers: " +correctAnswers);
  $('#game_scores2').text("Incorrect Answers: " +incorrectAnswers);
  $('#game_scores3').text("Refresh your Internet browser to play again!");
  $('#answer_button').html('<button type="button" class="btn btn-primary">Click Me for Answers</button>');
  }

//This function shows the player all of the correct answers at the end of the game, upon clicking the Answer button.
function showAnswers () {
  $('#answer_display').show();
}

// close document.ready function:
});
