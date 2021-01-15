const questionEl = document.getElementById('question');
const introEl = document.getElementById('intro');
const startBttn = document.querySelector('.start-btn');
const nextBttn = document.querySelector('.next-btn');
const answerBtnEl = document.getElementById('answer-buttons');
const btn1El = document.getElementById('btn1');
const btn2El = document.getElementById('btn2');
const btn3El = document.getElementById('btn3');
const btn4El = document.getElementById('btn4');
const ansCheck = document.getElementById('answerCheck')
const submitBttn = document.getElementById('submitBtn');
const initialsDiv = document.getElementById('initials');
const initialText = document.getElementById('initialText');

let score = 0;


nextBttn.classList.add('hide');
initialsDiv.classList.add('hide');
submitBttn.classList.add('hide');


let totalTime;
let counter = 0;
let timeleft = 60;

function setup(){
  noCanvas();

  let timer = select('#timer');
  timer.html(counter);

  function timeIt(){
    counter ++;
    timer.html(timeleft - counter);
    
  }
  setInterval(timeIt, 1000);

}


startBttn.addEventListener('click', function(){
  startBttn.classList.add('hide');
  introEl.classList.add('hide');
   question1();
  
})



function question1(){
  questionEl.textContent = "what do you csll the word inside tags in HTML?";
  answerBtnEl.classList.remove('hide');

  btn1El.addEventListener('click', function(){
    ansCheck.textContent = "WRONG!"
    answerBtnEl.classList.add('hide');
    nextBttn.classList.remove('hide');
    nextBttn.addEventListener('click', question2)
  })

  btn2El.addEventListener('click', function(){
    ansCheck.textContent = "Currect!"
    answerBtnEl.classList.add('hide');
    nextBttn.classList.remove('hide');
    score++;
    nextBttn.addEventListener('click', question2)
  })

  btn3El.addEventListener('click', function(){
    ansCheck.textContent = "WRONG!"
    answerBtnEl.classList.add('hide');
    nextBttn.classList.remove('hide');
    nextBttn.addEventListener('click', question2)
  })

  btn4El.addEventListener('click', function(){
    ansCheck.textContent = "WRONG!"
    answerBtnEl.classList.add('hide');
    nextBttn.classList.remove('hide');
    nextBttn.addEventListener('click', question2)
  })
  
}



function question2(){
  questionEl.textContent = "Which of the following is not a programing language?";
  btn1El.textContent = "Html";
  btn2El.textContent = "JavaScript";
  btn3El.textContent = "C++";
  btn4El.textContent = "Python";
  answerBtnEl.classList.remove('hide');
  nextBttn.classList.add('hide');
  ansCheck.classList.add('hide');


  btn1El.addEventListener('click', function(){
    ansCheck.textContent = "Currect!"
    ansCheck.classList.remove('hide');
    answerBtnEl.classList.add('hide');
    nextBttn.classList.remove('hide');
    score++;
    nextBttn.addEventListener('click', question3)
  })

  btn2El.addEventListener('click', function(){
    ansCheck.textContent = "WRONG!"
    ansCheck.classList.remove('hide');
    answerBtnEl.classList.add('hide');
    nextBttn.classList.remove('hide');
    nextBttn.addEventListener('click', question3)
  })

  btn3El.addEventListener('click', function(){
    ansCheck.textContent = "WRONG!"
    ansCheck.classList.remove('hide');
    answerBtnEl.classList.add('hide');
    nextBttn.classList.remove('hide');
    nextBttn.addEventListener('click', question3)
  })

  btn4El.addEventListener('click', function(){
    ansCheck.textContent = "WRONG!"
    ansCheck.classList.remove('hide');
    answerBtnEl.classList.add('hide');
    nextBttn.classList.remove('hide');
    nextBttn.addEventListener('click', question3)
  })
  
}



function question3(){
  questionEl.textContent = "Which of the following is not a required part of a for loop?";
  btn1El.textContent = "increment";
  btn2El.textContent = "Variable";
  btn3El.textContent = "Condition";
  btn4El.textContent = "Initialization";
  answerBtnEl.classList.remove('hide');
  nextBttn.classList.add('hide');
  ansCheck.classList.add('hide');


  btn1El.addEventListener('click', function(){
    ansCheck.textContent = "WRONG!"
    ansCheck.classList.remove('hide');
    answerBtnEl.classList.add('hide');
    nextBttn.classList.remove('hide');
    nextBttn.addEventListener('click', allDone)
  })

  btn2El.addEventListener('click', function(){
    ansCheck.textContent = "WRONG!"
    ansCheck.classList.remove('hide');
    answerBtnEl.classList.add('hide');
    nextBttn.classList.remove('hide');
    nextBttn.addEventListener('click', allDone)
  })

  btn3El.addEventListener('click', function(){
    ansCheck.textContent = "WRONG!"
    ansCheck.classList.remove('hide');
    answerBtnEl.classList.add('hide');
    nextBttn.classList.remove('hide');
    nextBttn.addEventListener('click', allDone)
  })

  btn4El.addEventListener('click', function(){
    ansCheck.textContent = "Currect!"
    ansCheck.classList.remove('hide');
    answerBtnEl.classList.add('hide');
    nextBttn.classList.remove('hide');
    score++;
    nextBttn.addEventListener('click', allDone)
  })
  
}

function allDone(){

  questionEl.classList.add('hide');
  ansCheck.classList.add('hide');
  answerBtnEl.classList.add('hide');
  initialsDiv.classList.remove('hide');
  introEl.textContent = "All Done, Your final score is " + score + " out of 3";
  introEl.classList.remove('hide');
  submitBttn.classList.remove('hide');


  submitBttn.addEventListener('click', function(){
    initialsDiv.classList.add('hide');
    introEl.classList.add('hide');
  submitBttn.classList.add('hide');
  question1();

  })

  }



  

