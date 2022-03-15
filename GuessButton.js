setInterval(winningButton = generateWinningButton,10000);

function generateWinningButton() {
  winningButton = 1 + Math.floor(Math.random() * 3);
  alert("Hurry Up!!! The winning button will change after 10 seconds from now on.");
  return winningButton;
}

function checkWinningButton(button, winningButton) {
  if (button == winningButton) {
    alert("YOU WON THE GAME - Congratulation !!!");
  } else {
    alert("YOU LOST THE GAME - Try Again !!!");
  }
  return false;
}
