const audio = new Audio();//not sure what this is - blackbox

document.querySelectorAll(".play-btn").forEach(function(button){

    button.addEventListener("click", function(){

        const songName = this.dataset.song;
        audio.pause();             
        audio.src = "./songs/" + songName;   
        audio.play();               

    });

});
//html me boht saare ho toh 