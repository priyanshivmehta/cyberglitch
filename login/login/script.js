const toggleBtn= document.querySelector('.toggle_btn');
const toggleBtnIcon= document.querySelector('.toggle_btn i');
const dropDownMenu= document.querySelector('.dropdown_menu');

toggleBtn.onclick= function(){
    dropDownMenu.classList.toggle('open')
    const isOpen=dropDownMenu.classList.contains('open')
    toggleBtnIcon.classList=isOpen
    ?'fa-solid fa-xmark'
    :'fa-solid fa-bars'
}
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 800);
}

function showPage() {
  document.getElementById("myDiv").style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  let lastScrollTop = 0;
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
          navbar.classList.add("hidden");
      } else {
          navbar.classList.remove("hidden");
      }
      lastScrollTop = scrollTop;
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const fadeInElements = document.querySelectorAll('.fade-in');

  const observerOptions = {
      threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
          }
      });
  }, observerOptions);

  fadeInElements.forEach(element => {
      observer.observe(element);
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const fadeInElements = document.querySelectorAll('.fade-in-word');

  const observerOptions = {
      threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
          }
      });
  }, observerOptions);

  fadeInElements.forEach(element => {
      observer.observe(element);
  });
});






// QUIZ
const questions=[
  {
    question: "What is the escape velocity from Earth's surface?",
    answers: [
      { text: "9.8 km/s", correct: false},
      { text: "11.2 km/s", correct: true},
      { text: "16.5 km/s", correct: false},
      { text: "25.2 km/s", correct: false},
    ]
  },
  {
    question: "Which planet has the shortest day in our solar system?",
    answers: [
      { text: "Jupiter", correct: true},
      { text: "Mars", correct: false},
      { text: "Neptune", correct: false},
      { text: "Mercury", correct: false},
    ]
  },
  {
    question: "What is the name of the boundary around a black hole beyond which no light can escape?",
    answers: [
      { text: "Event Horizon", correct: true},
      { text: "Singularity", correct: false},
      { text: "Schwarzschild Radius", correct: false},
      { text: "Accretion Disk", correct: false},
    ]
  },
  {
    question: " Which spacecraft was the first to reach interstellar space?",
    answers: [
      { text: "Pioneer 10", correct: false},
      { text: "Voyager 1", correct: true},
      { text: "Voyager 2", correct: false},
      { text: "New Horizons", correct: false},
    ]
  },
  {
    question: "What is the approximate age of the universe?",
    answers: [
      { text: "4.5 billion years", correct: false},
      { text: "10 billion years", correct: false},
      { text: "13.8 billion years", correct: true},
      { text: "20 billion years", correct: false},
    ]
  },
  {
    question: "Which planet has the tallest volcano in the solar system, and what is its name?",
    answers: [
      { text: "Mars, Olympus Mons", correct: true},
      { text: "Venus, Maxwell Montes", correct: false},
      { text: "Earth, Mauna Kea", correct: false},
      { text: "Mercury, Caloris Montes", correct: false},
    ]
  },
  {
    question: "What phenomenon causes the tails of comets to always point away from the sun?",
    answers: [
      { text: "Solar Wind", correct: true},
      { text: "Gravitational Pull", correct: false},
      { text: "Photon Pressure", correct: false},
      { text: "Magnetic Fields", correct: false},
    ]
  },
  {
    question: "What is the largest type of star in the universe?",
    answers: [
      { text: "Red Dwarf", correct: false},
      { text: "Blue Giant", correct: false},
      { text: "Red Supergiant", correct: true},
      { text: "White Dwarf", correct: false},
    ]
  },
  {
    question: "What is the name of the effect that causes light from distant galaxies to appear redshifted?",
    answers: [
      { text: "Doppler Effect", correct: false},
      { text: "Gravitatiional Lensing", correct: false},
      { text: "Cosmic Inflation", correct: false},
      { text: "Hubble Effect", correct: true},
    ]
  },
  {
    question: "What is the term for the hypothetical point in time when the universe's expansion will reverse, leading to a 'Big Crunch'?",
    answers: [
      { text: "Big Bang", correct: false},
      { text: "Heat Death", correct: false},
      { text: "Big Freeze", correct: false},
      { text: "Big Crunch", correct: true},
    ]
  }
];

const questionelement=document.getElementById("question");
const answerbuttons=document.getElementById("answer-buttons");
const nextbutton=document.getElementById("next-btn");

let currentquestionindex=0;
let score=0;

function StartQuiz(){
  currentquestionindex=0;
  score=0;
  nextbutton.innerHTML="Next";
  showQuestion();
}

function showQuestion(){
  resetstate();
  let currentquestion=questions[currentquestionindex];
  let questionno = currentquestionindex + 1;
  questionelement.innerHTML=questionno + ". "+ currentquestion.
  question;

  currentquestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML=answer.text;
    button.classList.add("btn");
    answerbuttons.appendChild(button);
    if(answer.correct){
      button.dataset.correct=answer.correct;
    }
    button.addEventListener("click",selectanswer);
  }); 
}

function resetstate(){
  nextbutton.style.display="none";
  while(answerbuttons.firstChild){
    answerbuttons.removeChild(answerbuttons.firstChild);
  }
}

function selectanswer(e){
  const selectedbtn=e.target;
  const iscorrect=selectedbtn.dataset.correct ==="true";
  if(iscorrect){
    selectedbtn.classList.add("correct");
    score++;
  }else{
    selectedbtn.classList.add("incorrect");
  }
  Array.from(answerbuttons.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled=true;
  });
  nextbutton.style.display="block";
}

function showscore(){
  resetstate();
  questionelement.innerHTML= `Congratulations, You scored ${score} out of ${questions.
  length}!`;
  nextbutton.innerHTML="Play Again";
  nextbutton.style.display="block";
}

function handlenextbutton(){
  currentquestionindex++;
  if(currentquestionindex < questions.length){
    showQuestion();
  }else{
    showscore();
  }
}

nextbutton.addEventListener("click", ()=>{
  if(currentquestionindex < questions.length){
    handlenextbutton();
  }else{
    StartQuiz();
  }
})

StartQuiz();