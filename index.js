//welcome users
console.log('Here is a quiz for all the DC geeks out there!')

var readlineSync = require('readline-sync')
var username = readlineSync.question('Enter your name : ')

console.log('Welcome ', username);

var correctCount = 0
var highScores = [{ name: 'ravi', score: 3 }, { name: 'ram', score: 2 }]

//to take questions
function takeQuestion(ques, ans) {
  var userAnswer = readlineSync.question(ques)
  if (ans === userAnswer.lower()) {
    correctCount += 1;
    console.log('Your answer is correct!')
  }
  else {
    console.log('Your answer is wrong!')
  }
}

questionOne = {
  question: "What is the Flash's real name ? ",
  answer: "barry"
}

questionTwo = {
  question: "Which is planet is Superman from ? ",
  answer: "krypton"
}

questionThree = {
  question: "Who is daughter of Zeus? ",
  answer: "diana"
}

questionFour = {
  question: "What is name of Batman's son? ",
  answer: "damien"
}

questionFive = {
  question: "What is real name of Darkseid? ",
  answer: "utah"
}

questionList = [questionOne, questionTwo, questionThree]
console.log('Game start!!')
for (i = 0; i < questionList.length; i++) {
  takeQuestion(questionList[i].question, questionList[i].answer)
}

//display scores  
console.log('Your score is : ', correctCount)
highScores.push({ name: username, score: correctCount })
console.log('HighScores')
console.log('Name   Score')
console.log('---------------')
for (i = 0; i < highScores.length; i++) {
  console.log(highScores[i].name + '  ' + highScores[i].score)
}
