var answers = [
  {
    question:"Who was the legendary Benedictine monk who invented champagne?",
    answer: "Dom Perignon"
  },
  {
    question: "Name the largest freshwater lake in the world?",
    answer: "Lake Superior"
  },
  {
    question: "Where would you find the Sea of Tranquility?",
    answer: "The Moon"
  },
  {
    question: "What is someone who shoes horses called?",
    answer: "A farrier"
  },
  {
    question: "What item of clothing was named after its Scottish inventor?",
    answer: "A Mackintosh"
  },
  {
    question: "What kind of weapon is a falchion?",
    answer: "A sword"
  },
];

  for (var i = 0; i < answers.length ; i ++) {
    var el = document.getElementById("h"+[i])
    var question = answers[i].question;
    el.textContent=question
  }
  function myanswer() {
    var correct = 0
    var incorrect = 0
    for (i = 0; i < answers.length; i++) {
      var answer = answers[i].answer
      var guess = document.getElementById("input"+[i]).value;
      var questionspot = document.getElementById("h"+[i])
      if (answer == guess) {
        questionspot.className="correct";
        correct++;
      } else {
        questionspot.className="incorrect"
        incorrect++;
      }
  }
  document.getElementById("correct").textContent = correct;
	document.getElementById("incorrect").textContent = incorrect;
}
