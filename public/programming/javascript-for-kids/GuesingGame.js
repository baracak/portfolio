var number = Math.round(Math.random() * 20 + 0.1);
var guess = "";
while (guess != number) {
  guess = prompt("Guess a number between 1 and 20: ");
  if (guess > number) alert("Too high");
  else if (guess < number) alert("Too low.");
  else alert("Correct you win!");
}

var name = prompt(
  "You won so now I will print your name on the screen. Just write your name in here"
);
for (var n = 1; n <= 100; n++) {
  document.write(name + " wins! ");
}
