const quiz = [
  {
    question: "What is the capital of France?",
    options: [
      { answer: "Berlin", correct: false },
      { answer: "Madrid", correct: false },
      { answer: "Paris", correct: true },
      { answer: "Rome", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: [
      { answer: "Earth", correct: false },
      { answer: "Mars", correct: true },
      { answer: "Jupiter", correct: false },
      { answer: "Venus", correct: false },
    ],
  },
  {
    question: "What is the largest mammal in the world?",
    options: [
      { answer: "Elephant", correct: false },
      { answer: "Blue Whale", correct: true },
      { answer: "Great White Shark", correct: false },
      { answer: "Giraffe", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for water?",
    options: [
      { answer: "O2", correct: false },
      { answer: "H2O", correct: true },
      { answer: "CO2", correct: false },
      { answer: "NaCl", correct: false },
    ],
  },
  {
    question: "How many continents are there on Earth?",
    options: [
      { answer: "5", correct: false },
      { answer: "6", correct: false },
      { answer: "7", correct: true },
      { answer: "8", correct: false },
    ],
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      { answer: "William Shakespeare", correct: true },
      { answer: "Charles Dickens", correct: false },
      { answer: "Mark Twain", correct: false },
      { answer: "Leo Tolstoy", correct: false },
    ],
  },
  {
    question: "Which is the longest river in the world?",
    options: [
      { answer: "Amazon River", correct: true },
      { answer: "Nile River", correct: false },
      { answer: "Yangtze River", correct: false },
      { answer: "Mississippi River", correct: false },
    ],
  },
  {
    question: "Which element has the atomic number 1?",
    options: [
      { answer: "Oxygen", correct: false },
      { answer: "Hydrogen", correct: true },
      { answer: "Carbon", correct: false },
      { answer: "Helium", correct: false },
    ],
  },
  {
    question: "What is the fastest land animal?",
    options: [
      { answer: "Lion", correct: false },
      { answer: "Cheetah", correct: true },
      { answer: "Gazelle", correct: false },
      { answer: "Horse", correct: false },
    ],
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      { answer: "Vincent van Gogh", correct: false },
      { answer: "Leonardo da Vinci", correct: true },
      { answer: "Pablo Picasso", correct: false },
      { answer: "Claude Monet", correct: false },
    ],
  },
  {
    question: "What is the smallest prime number?",
    options: [
      { answer: "0", correct: false },
      { answer: "1", correct: false },
      { answer: "2", correct: true },
      { answer: "3", correct: false },
    ],
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: [
      { answer: "China", correct: false },
      { answer: "Japan", correct: true },
      { answer: "South Korea", correct: false },
      { answer: "Thailand", correct: false },
    ],
  },
  {
    question: "Which gas is most abundant in Earth's atmosphere?",
    options: [
      { answer: "Oxygen", correct: false },
      { answer: "Nitrogen", correct: true },
      { answer: "Carbon Dioxide", correct: false },
      { answer: "Hydrogen", correct: false },
    ],
  },
  {
    question: "Which ocean is the largest?",
    options: [
      { answer: "Atlantic Ocean", correct: false },
      { answer: "Pacific Ocean", correct: true },
      { answer: "Indian Ocean", correct: false },
      { answer: "Arctic Ocean", correct: false },
    ],
  },
  {
    question: "What is the square root of 64?",
    options: [
      { answer: "6", correct: false },
      { answer: "7", correct: false },
      { answer: "8", correct: true },
      { answer: "9", correct: false },
    ],
  },
];

const startButton = document.querySelector("#startQuiz");
const landingPage = document.querySelector(".landing-page");
const quizQsns = document.querySelector(".quiz");
console.log(quizQsns);

console.log(startButton);
const startQuiz = () => {
  console.log("start the quiz");
  landingPage.classList.add("d-none");
  quizQsns.classList.replace("d-none", "d-block");
};

startButton.addEventListener("click", startQuiz);

console.log(quiz);
