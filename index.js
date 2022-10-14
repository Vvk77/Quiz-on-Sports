var readlineSync = require('readline-sync');
var score = 0;
var userName = readlineSync.question("What is your Name? ")
console.log("Hey!" + userName);
console.log("Welcome to Vivek's quiz on Sports.");
function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer){
    console.log("You were Right")
    score = score + 1;
  }else{
    console.log("You were Wrong")
    score = score - 1;
  }
   console.log("Current score: "  + score );
  console.log("**************************************************")
}

var questions = [{
question:"Bull fighting is national game of which country? Spain or Portugal . ",
answer: "Spain"
}, {  
question:"What is national sports of India ? Hockey or Cricket .   ",
answer: "Hockey"
}, {    
question:"Who is captain of indian cricket team ? Virat Kohli or Rohit Sharma. ",
answer: "Rohit Sharma"
}, {
question:"Asian games last held in India ? 1982 or 1972.    ",
answer: "1982"  
}, {  
question:"Who is known as flying sikh of India ? Milkha Singh or PT usha. ",
answer: "Milkha Singh"    
}];
for (var i=0; i<questions.length; i++){
var currentQuestion = questions[i];
play(currentQuestion.question,currentQuestion.answer);
}
console.log("New High Score" + score)
