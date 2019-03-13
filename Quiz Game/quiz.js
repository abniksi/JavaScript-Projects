//Object constructor.
function Question(question, answers, correct){
  this.question = question;
  this.answers = answers;
  this.correct = correct;
};

//Method to display the question and options.
Question.prototype.showQuestion = function(){
  console.log(this.question);
  for(var i = 0; i < this.answers.length; i++){
    console.log(i + ': ' + this.answers[i]);
  }
};

//Method to check if the correct answer was selected.
Question.prototype.checkQuestion = function(answer){
  if(answer === this.correct){
    console.log('You are correct!');
  } else{
    console.log('Try again.');
  }
};

//Creating new instances of our object. Question, answers, and correct answers are provided.
var questionOne = new Question('What is my name?', ['Andrew', 'Braden', 'John'], 0);
var questionTwo = new Question('Where are we headed right now?',['Springfield', 'Normal', 'Edwardsville'], 2);
var questionThree = new Question('What is my girlfriends name?',['Marisa', 'Becca', 'Jessica'], 0);
var questionFour = new Question('Do I want to work at State Farm?',['Yes', 'No'], 0);
var questionFive = new Question('What is the name of my mother?',['Alice', 'Jennifer', 'Suzy'], 1);

//Making an array of our object instances.
var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];

function continueQuestions(){
  //Random number generated to selected random number.
  var random = Math.floor(Math.random() * 5);
  //Selecting a random instance of our object and then calling showQuestion method.
  questions[random].showQuestion();
  //Prompt to let the user input their answer. Use parseInt so the response is an integer and not string.
  var answer = prompt('Select the correct answer or type Exit to end the quiz');

  if (!(answer === 'exit' || answer === 'Exit')){
      //Selecting a random instance and then calling checkQuestion method with our answer parameter.
      questions[random].checkQuestion(parseInt(answer));
      continueQuestions();
  }

};

continueQuestions();
