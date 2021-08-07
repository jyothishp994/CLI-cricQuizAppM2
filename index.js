
var score=0
var readline=require('readline-sync');
questions=[
questionOne={
  question: "Who scored first 200 in ODI cricket?",
  answer:"sachin"
},
questionTwo={
  question: "Which year did India win world cup first time ?",
  answer:"1983"
},
questionThree={
  question:"Who is the captain of Indian ODI team?",
  answer:"kohli"
},
questionFour={
  question:"Which team did Yuvraj hit 6 sixes in T20 cricket?",
  answer:"england"
},
questionFive={
  question:"Who led Indian team in 2011 WC win ?",
  answer:"dhoni"
}
]

var name=readline.question('May I know your name ?');
WelcomeMsg(name);
for (var i = 0; i < questions.length; i++) {
    var userAns=readline.question(questions[i].question);
    checkAns(questions[i].question,userAns); 
    console.log("Current Score: "+score); 
    console.log("-------------------");
    }

function checkAns(userQues,UserAns)
{
for (var i = 0; i < questions.length; i++) {
    if (questions[i].question==userQues)
    {
      if(questions[i].answer==userAns.toLowerCase())
      {
      console.log('right!');
      score=score+1;
      }
      else
      {
        console.log('wrong!');
      }
    }
    }
    return score;
}

function WelcomeMsg(name)
{
  console.log('Welcome ' + name);
}