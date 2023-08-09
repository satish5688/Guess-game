let Random_number = parseInt(Math.floor(Math.random() * 20 + 1));
let previs_num;

function play_again() {
  Random_number = parseInt(Math.floor(Math.random() * 20 + 1));
  console.log(Random_number);
  document.getElementById("status").innerHTML = "Start Guessing";
  document.getElementById("guessed-number").value = 0;
  var correct = document.getElementById("correct-number").innerHTML.trim();

  document.getElementById("check").disabled = false;
  let score = document.getElementById("score");
  let highscore = document.getElementById("highscore");
  // console.log(Random_number, score.innerHTML, highscore.innerHTML,correct, 'hu.....');
  if (
    parseInt(highscore.innerHTML) < parseInt(score.innerHTML) &&
    correct !== "?"
  ) {
    highscore.innerHTML = score.innerHTML;
  }
  score.innerHTML = 20;
  document.body.classList.remove("guessed");
  document.getElementById("correct-number").innerHTML = "?";
}

function check_number() {
  let score = parseInt(document.getElementById("score").innerHTML);
  let result;
  let number = parseInt(document.getElementById("guessed-number").value);
  if (score <= 0) {
    result = "You loose all your chances";
    document.getElementById("check").disabled = true;
  } else if (number == previs_num) {
    result = "Change Number & check";
  } else {
    if (number == Random_number) {
      result = "Correct number";
      document.body.classList.add("guessed");
      document.getElementById("check").disabled = true;
      var element = document.getElementById("correct-number");
      element.innerHTML = number;
    } else if (number > Random_number) {
      result = "Too High";
      score -= 1;
    } else if (number < Random_number) {
      result = "Too low";
      score -= 1;
    } else {
      result = "something unexpected";
    }
  }
  previs_num = number;
  document.getElementById("status").innerHTML = result;
  document.getElementById("score").innerHTML = score;
}
console.log(Random_number);
