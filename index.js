var readlineSync = require('readline-sync')

var score = 0;

console.log("Welcome to the Fandom Quiz! With this quiz you get to contest your knowledge of the Marvel and DC fandoms!")

console.log()

var userName =  readlineSync.question("Please enter your name: ")

console.log()

var play = readlineSync.question("Welcome " + userName + "! Shall we play? ")

console.log()

if (play == "Yes" || play == "yes" || play == "y"){
  console.log()
  console.log("That's the spirit! Let us Begin! ")
  console.log()
}

else{
  console.log()
  console.log("Too bad, perhaps next time! Ta-ta! ")
}

//array of objects - questions for the game
var questions = [
        {
        question: "Which is the first movie that kickstarted the Phase 1 of the Marvel Cinematic Universe? ",
        answer: "Iron Man"
      },
      {
        question: "What is Phase 1 of the Marvel Cinematic Universe generally known as? ",
        answer: "Avengers Assembled"
      }, 
      {
        question: "How many infinity stones are there? ",
        answer: "Six"
      },
      {
        question: "Stan Lee made his final cameo appearance in which MCU movie? ",
        answer: "Avengers Endgame"
      }, 
      {
        question: "Who is the executive producer and creative lead for the Marvel Cinematic Universe? ",
        answer: "Kevin Fiege"
      },
  {
    question: "Which was the first movie of the Batman Nolan-verse? ",
    answer: "Batman Begins"
  },
  {
    question: "Who was the actor who played the role of Superman in Superman Returns(2006)? ",
    answer: "Brandon Routh"
  },
  {
    question: "What is the full name of Bruce Wayne's butler? ",
    answer: "Alfred Pennyworth"
  },
  {
    question: "Which planet does Superman belong to? ",
    answer: "Krypton"    
  },
  {
    question: "In the Man of Steel movie, what does Superman's 'S' symbol stand for? ",
    answer: "Hope"
  }
]

// array of objects - high score list
var highscores = [
  {
    name: "Tony: ",
    score: 10
  },
  {
    name: "Bruce: ",
    score: 10
  },
  {
    name: "Peter:",
    score: 9
  },
  {
    name: "Clark:",
    score: 8
  }
]

// function to send questions from the array of objects questions
function game()
  {
    for (var i = 0; i < questions.length ; i++)
    {
      qna(questions[i].question,questions[i].answer)
    }
  }

//function to take in answer input and evaluate against answers from array of objects

function qna(question,answer)
{
  var userAnswer = readlineSync.question(question)

  if(userAnswer.toUpperCase() == answer.toUpperCase()){
    console.log()
    console.log("You are right!")
    score = score + 1;
    console.log();
    console.log("Your score is: " + score)
    console.log()
  }
  else {
    console.log()
    console.log("You are wrong! ")
    console.log();
    console.log("Your score is: " + score)
    console.log()
  }
}

// function to display highscores and final score

function scores(){
  console.log("Your final score is: " + score);
  console.log()
  console.log("See all the highscores! Think you should be on there? Let me know, and I'll add you! ")
  console.log()
  
  for(var i = 0; i < highscores.length; i++)
    {
      console.log(highscores[i].name, highscores[i].score);
      console.log()
    }
}

game();
scores();
