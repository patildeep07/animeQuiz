// Importing Libraries
var readlineSync = require("readline-sync");

// Variables to be used

score = 0

var questionList = [
  {
    question: "1. Which Pokémon has electricity-storing pouches on its cheeks? (ref: Pokemon) \n A. Charizard \n B. Blastoise \n C. Pikachu \n D. Bulbasaur \n",
    answer: "c"
  },
  {
    question: "2. How many Dragon Balls are there? (ref: Dragon Ball Z) \n A. 5 \n B. 6 \n C. 7 \n D. 8 \n",
    answer: 'c'
  },
  {
    question: "3. Lover of sweets and mysteries, which genius is a world-famous detective? (ref: Death Note) \n A. Detective Conan \n B. L \n C. Light Yagami \n D. Near \n ",
    answer: 'b'
  },
  {
    question: "4. In the anime ‘Hunter X Hunter’, which family is famous for being assassins? (ref: HxH) \n A. Killua's Family \n B. Gon's Family \n C. Hisoka's Family \n D. Kurapika's Family \n",
    answer: 'a'
  },
  {
    question: "5. What is the name of the first Shinigami that Ichigo met in ‘Bleach’? \n A. His Mum \n B. His Dad \n C. Rukia \n D. Aizen \n",
    answer: 'b'
  },
  {
    question: "6. Who is known as the ‘One Punch Man’? (ref: OPM) \n A. Goku \n B. Genos \n C. Saitama \n D. Child Emperor \n",
    answer: 'c'
  },
  {
    question: "7. Who was the first character in ‘Dragon Ball Z’ who achieved the Super Saiyan 2? \n A. Gohan \n B. Goku \n C. Vegeta \n D. Trunks \n",
    answer: "a"
  },
  {
    question: "8. What kind of person is Naruto Uzumaki? (ref: Naruto) \n A. Samurai \n B. Goon \n C. Warrior \n D. Ninja \n",
    answer: "d"
  },
  {
    question: "9. In Dragon Ball Super, Goku is sent to destroy the earth. What happened to make him change his ways? \n A. He loved Earth \n B. He loved the food made over here \n C. He met Bulma \n D. He bumped his head \n",
    answer: 'd'
  },
  {
    question: "10. The Shinigami is in love with apples. Can you recall his name? (ref: Deathnote) \n A. Ryuk \n B. Gelus \n C. Calikarcha \n D. Midora \n",
    answer: "a"
  }
]

// Creating function

function quiz(question, answer) {
    var userAnswer = readlineSync.question(question)
    if (userAnswer.toUpperCase() === answer.toUpperCase()) {
      console.log("You are right! Keep it up...")
      score++
    } else {
      console.log("You got it wrong!")
    }
  
    console.log("Your current Score is ", score)
  }
  
  // Welcome message
  
  var username = readlineSync.question("Please, Enter the username you want to play this game with! ")
  console.log("Hello ", username, " Welcome to the Anime Quiz! Hope you had a fun time getting all the questions right!")
  