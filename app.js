var questions = [{
  question: "Who is the main character on Mr. Robot?",
  choices: ["Christian Slater", "Elliot Alderson", "Tyrell Wellick"],
  answer: "Elliot Alderson"
}, {
  question: "Who is Angela Moss to Elliot?",
  choices: ["Longtime childhood friend", "Co-Worker", "Girlfriend"],
  answer: "Longtime childhood friend"
}];

//initialize variables
var score = 0,
  currentQuestion = 0,
  submitted = true;

//html elements

var content = $("content"),
  questionContainer = $("question"),
  choicesContainer = $("choices"),
  scoreContainer = $("score"),
  submitButton = $("submit");



function $(id) { // shortcut for document.getElementById
  return document.getElementById(id);
}


function askQuestion() {
  var choices = questions[currentQuestion].choices;
  var choicesHtml = "";

  //loop through choices, create radio buttons for each
  for (var i = 0; i < choices.length; i++) {
    choicesHtml += "<input type='radio' name='quiz" + currentQuestion +
      "' id='choice" + (i + 1) +
      "' value='" + choices[i] + "'>" +
      " <label for='choice" + (i + 1) + "'>" + choices[i] + "</label><br>";
  }

  //load the question
  questionContainer.textContent = "Q" + (currentQuestion + 1) + ": " + questions[currentQuestion].question;

  //load the choices
  choicesContainer.innerHTML = choicesHtml;

  //initiate for first time
  if (currentQuestion == 0) {
    scoreContainer.textContent = "Score: " + score + " right out of " + questions.length + " possible.";
    submitButton.textContent = "Submit Answer";
  }

}

function checkAnswer() {
  //
  //are we asking a question or proceeding to the next question?
  if (submitted) {
    submitButton.textContent = "Next Question";
    submitted = false;
    //determine which radio button a user picked
    var userPick,
      correctIndex,
      radios = document.getElementsByName("quiz" + currentQuestion);
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        userPick = radios[i].value;
      }
      //determine the correct answer
      if (radios[i].value == questions[currentQuestion].answer) {
        correctIndex = i;
      }
    }

    var labelStyle = document.getElementsByTagName("label")[correctIndex].style;
    labelStyle.fontWeight = "bold";
    //alert(score);
    if (userPick == questions[currentQuestion].answer) {
      score++;
      labelStyle.color = "green";

    } else {
      labelStyle.color = "red";
    }


    scoreContainer.textContent = "Score: " + score + " right out of " + questions.length + " possible.";
  } else { 
      //proceed to the next question
    submitted = true;
    submitButton.textContent = "Submit Answer";
    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      askQuestion();
    } else {
      showFinalResults();
    }
  }

}

function showFinalResults() {
  content.innerHTML = "<h1" + " id='Final-Results'>Score: " + score + " right out of " + questions.length + " possible.</h1>";
  var againButton = document.createElement("BUTTON");
  content.appendChild(againButton);
  againButton.textContent = "Would you like to Try Again?";

  againButton.addEventListener("click", function() {
    currentQuestion = 0;
    content.innerHTML = "<h3 id='question'></h3><div id='choices'></div><button id='submit'></button><p id='score'></p>";
    score = 0;
    askQuestion();
    location.reload();
  }, false);


}

window.addEventListener("load", askQuestion, false);
submitButton.addEventListener("click", checkAnswer, false);
