$(document).ready(function() {

        // Set initial radio button answer names
        setNameAttributes();

        $("#start-button").click(function() {
             $("#questions").removeClass("hidden");
             $("#start-button").addClass("hidden");
        });

        $('#questions').submit(function() {
            event.preventDefault();
            // Check answers
            var score = getScore();
            $("#userScore").html(score);
            $("#scoreDescription").html(getMessage(score));
            $("#questions").addClass("hidden");
            $("#scoreScreen").removeClass("hidden");
        });

        $('#tryAgain').click(function() {
            document.getElementById("questions").reset(); // reset questions
            $("#scoreScreen").addClass("hidden");
            $("#questions").removeClass("hidden");
        });

});

// Create messages to display to user upon completion (vary based on the # of correct answers)
messageArray = [
    "You've got good taste in music, my friend! Nice job!",
    "Soooo close! Nice try!",
    "You did ok! Decent try!",
    "Ah... well, you gave it your best shot.",
    "You must've skipped some questions, right?",
    "Did you even answer the questions?"
];

// Returns the correct message for the score passed in
function getMessage(score) {
    switch (score) {
        case 5:
            return messageArray[0];
            break;
        case 4:
            return messageArray[1];
            break;
        case 3:
            return messageArray[2];
            break;
        case 2:
            return messageArray[3];
            break;
        case 1:
            return messageArray[4];
            break;
        case 0:
            return messageArray[5];
            break;
        default:
            console.log("invalid score");
            break;
    }
}

// Calculates user score by checking if the correct answer is checked
function getScore() {
    var score = 0;
    var questions = document.getElementsByClassName("question");
    for (var index = 0; index < questions.length; index++) {
        var answers = questions[index].getElementsByClassName("answer-choice"); // list of answers
        for (var index2 = 0; index2 < answers.length; index2++) {
            var labels = answers[index2].getElementsByTagName("label");
            for (var index3 = 0; index3 < labels.length; index3++) {
                var answerInputs = labels[index3].getElementsByClassName('correctAnswer');
                for (var index4 = 0; index4 < answerInputs.length; index4++) {
                    if (answerInputs[index3].length !== 0) {
                        if (answerInputs[index3].checked) {
                            score++;
                            continue;
                        }
                    }
                }
                
               
            }
        }
    }
    return score;
}

// Sets a unique name (through a simple iterator) for the radio answer inputs for each question
function setNameAttributes() {
    var answerSetCount = 0;
    var questions = document.getElementsByClassName("question");
    for (var index = 0; index < questions.length; index++) {
        var answers = questions[index].getElementsByClassName("answer-choice"); // list of answers
        for (var index2 = 0; index2 < answers.length; index2++) {
            var labels = answers[index2].getElementsByTagName("label");
            for (var index3 = 0; index3 < labels.length; index3++) {
                var input = labels[index3].getElementsByTagName("input");
                input[0].setAttribute("name", "answerset" + answerSetCount);
            }
        }
        answerSetCount++;
    }
}


    

