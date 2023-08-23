
class Mole {
constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.width = 150; 
    this.height = 150;
    

}


}





function showMole() {
    // select random place
    const selectedPlace = place[Math.floor(Math.random() * place.length)];

    // show mole img
    selectedPlace.style.backgroundImage = "url('mole2.png')";
    selectedPlace.style.backgroundSize = "122px 120px";
    selectedPlace.style.objectFit = "cover";

    // after some time remove mole img
    setTimeout(() => {
        selectedPlace.style.backgroundImage=""
    }, moleTime);
    
};