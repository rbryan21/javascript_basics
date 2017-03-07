// On document load, populate questions
$(document).ready(function() {
        populateQuestions(); 
});
    
// Create variable holding the questions
var questions = [
    {
        "id" : 1,
        "image" : "",
        "question" : "The Gorillaz are a British virtual band which consists of four animated members: 2D, Noodle, Murdoc Niccals, and Russel Hobbs",    
        "answers" : ['True', 'False'],
        "correct-answer" : 0
    }, {
        "id" : 2,
        "image" : "",
        "question" : "The Gorillaz named one of their most popular songs after this famous male actor: ",
        "answers" : ['Tom Cruise', 'Clint Eastwood', 'John Travolta', 'Pierce Brosnan'],
        "correct-answer" : 1
    }, {
        "id" : 3,
        "image" : "",
        "question" : "Who is the animated lead singer of Gorillaz?",
        "answers" : ['Noodle', 'Murdoc Niccals', '2D', 'Russel Hobbs'],
        "correct-answer" : 2   
    }, {
        "id" : 4,
        "image" : "",
        "question" : "Who is a non-virtual creator of Gorillaz?",
        "answers" : ['Damon Albarn', 'Timothy LePage', 'Henry Rein', 'Kyle Turner'],
        "correct-answer" : 0  
    }, {
        "id" : 5,
        "image" : "",
        "question" : "Which of the following are characteristic of Gorillaz?",
        "answers" : [
          'Their music blurs the lines between genres', 
          "They are the 'Most Successful Virtual Band' within the 'Guinness Book of World Records'", 
          "They were created by Damon Albarn and Jamie Hewlett in 1998 in Essex, England.",
          "All of the above!"
        ],
        "correct-answer" : 3   
    }
];

// Array to hold letters for answers
var answerLetterArray = ['A', 'B', 'C', 'D'];

function populateQuestions() {

    var target = document.getElementById('questions');
    
    /*
        <div class="question">
            <div class="questionText>
                <ul class="answers>
                </ul>
            </div>
        </div>
    */
    questions.forEach( function(question) {

        var questionParagraph;
        var questionDiv = document.createElement('div');


        // Question text
        var questionText = document.createElement('div');
        
        questionText.innerHTML = question.question;

        var answersList = document.createElement('ul');
        
        
       /* Creates
                <li class="answerChoice">
                    <div class="answerText">
                        <span class="answerLetter> answerLetterArray[answerCounter++] </span>
                        answer text
                    </div>
                </li>

                For each answer to the question
        */
        var answerCounter = 0; // reset answers counter
        question.answers.forEach(function(answer) {

            // Create elements
            var answerText = document.createElement('div');                
            var listItem = document.createElement('li');
            var answerLetter = document.createElement('span');

            answerLetter.innerHTML = answerLetterArray[answerCounter++];
            answerText.innerHTML = answer;

            answerText.prepend(answerLetter);
            listItem.appendChild(answerText);
            answersList.appendChild(listItem);

            $(answerLetter).addClass("answerLetter");
            $(answerText).addClass("answerText");
            $(listItem).addClass("answerChoice");
        });

        $(questionDiv).addClass("question");
        $(questionText).addClass("questionText");
        $(answersList).addClass("answers");

        questionDiv.appendChild(questionText);
        questionDiv.appendChild(answersList);
        target.appendChild(questionDiv);
    });
}


    

