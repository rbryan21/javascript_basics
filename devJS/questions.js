// Create variable holding the questions
var questions = [
    {
        "id" : 1,
        "image" : "",
        "question" : "The Gorillaz are a British virtual band which consists of four animated members: 2D, Noodle, Murdoc Niccals, and Russel Hobbs",    
        "answers" : {
            "A" : "True",
            "B" : "False"
        },
        "correct-answer" : "A"
    }, {
        "id" : 2,
        "image" : "",
        "question" : "The Gorillaz named one of their most popular songs after this famous male actor: ",
        "answers" : {
            "A" : "Tom Cruise",
            "B" : "Clint Eastwood",
            "C" : "John Travolta",
            "D" : "Pierce Brosnan"
        },
        "correct-answer" : "B"
    }, {
        "id" : 3,
        "image" : "",
        "question" : "Who is the animated lead singer of Gorillaz?",
        "answers" : {
            "A" : "Noodle",
            "B" : "Murdoc Niccals",
            "C" : "2D",
            "D" : "Russel Hobbs"
        },
        "correct-answer" : "C"   
    }, {
        "id" : 4,
        "image" : "",
        "question" : "Who is a non-virtual creator of Gorillaz?",
        "answers" : {
            "A" : "Damon Albarn",
            "B" : "Timothy LePage",
            "C" : "Henry Rein",
            "D" : "Kyle Turner"
        },
        "correct-answer" : "A"   
    }, {
        "id" : 5,
        "image" : "",
        "question" : "Which of the following are characteristic of Gorillaz?",
        "answers" : {
            "A" : "Their music blurs the lines between genres.",
            "B" : "They are the 'Most Successful Virtual Band' within the 'Guinness Book of World Records'",
            "C" : "They were created by Damon Albarn and Jamie Hewlett in 1998 in Essex, England.",
            "D" : "All the above!"
        },
        "correct-answer" : "D"   
    }
];

// Populate questions id 

function populateQuestions() {
    var target = document.getElementById('questions');
    questions.forEach(function(question) {
        var question = document.createElement('div');
        question.addClass("question");

        // Question text
        var questionText = document.createElement('p');
        questionText.addClass("questionText");

        // Question answers
        question.answers.forEach(function(answer) {
            var questionParagraph = document.createElement('p');
            var questionSpan = document.createElement('span');
            questionParagraph.appendChild(questionSpan);
        });

        questionText.appendChild(questionParagraph);
        question.appendChild(questionText);
        target.appendChild(question);
    });

}
    

