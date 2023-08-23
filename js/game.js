class Game {
    constructor () { 
    this.startScreen = document.querySelector("#game-intro");
    this.gameScreen =document.querySelector("#game-screen");
    this.gameEndScreen = document.querySelector("#game-end");
    this.height = 500;
    this.width = 800;
    this.player = 0;
    this.moles =[];
    this.punch = 0;
    this.miss =2;
    this.gameISRunning =true;
    this.gameIsOver = false;
}


start() {

    this.gameScreen.style.width = `${this.width}px`;
    this.gameScreen.style.height = `${this.height}px`;
    this.startScreen.style.display = "none"; //start screen hide
    this.gameScreen.style.display ="block";
    this.gameLoop();
    this.startTimer();
}


endGame() {
    this.player.element.remove();
    this.gameISOver = true;
    this.gameIsRunning = false;
    this.gameScreen.style.display = "none";
    this.gameEndScreen.style.display="block";
    }

  startTimer() {
    const duration = 60 * 1000; // 60 seconds
  
    setTimeout(function () {
      if (!gameIsOver) {
        endGame();
      }
    }, duration);
  }
  
  // Start the game and timer
  startTimer();


  
gameLoop() {
  if (gameIsRunning) {
    // Your game logic goes here
    this.update();
    window.requestAnimationFrame(() => this.gameLoop());

    // Check for game-over conditions
    if (this.miss ===0 || this.gameIsOver || !this.gameIsRunning) {
      this.endGame(); // End the game if the condition is met
    }

  }
}






/* gameLoop() {
if (this.gameISOver) {
return;
}

if()
this.update();
window.requestAnimationFrame(() => this.gameLoop());
}
*/
update() {
//player move
//handling collision 


if (this.miss ===0) {
    this.endGame();
  }

}






}



