function generateWinningButton() {
  let winningButton = 1 + Math.floor(Math.random() * 3);
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
