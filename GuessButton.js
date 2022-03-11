function checkWinningButton(button) {
  let winningButton = 1 + Math.floor(Math.random() * 3);
  if (button == winningButton) {
    alert("YOU WON THE GAME - Congratulation !!!");
  } else {
    alert("YOU LOST THE GAME - Try Again !!!");
  }
}
