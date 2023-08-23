class Player {
constructor(gameScreen, width, height, imgSrc){
    this.gameScreen = gameScreen;
    this.width = width;
    this.height = height;
    this.element = document.createElement("imgSrc");
    this.element.src = imgSrc;
    this.gameScreen.appendChild(this.element);
}

document.querySelector(".mole.btn").addEventListener("click", function () {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });


}



    

  