// Create one audio player object.
// Isse hum songs ko play, pause aur change kar sakte hain.
const audio = new Audio();

// Select all buttons jinki class "play-btn" hai.
document.querySelectorAll(".play-btn").forEach(function(button) {

    // Har button ke liye click event lagao.
    button.addEventListener("click", function() {

        // Jo button click hua hai uska data-song attribute read karo.
        const songName = this.dataset.song;

        // Agar koi song pehle se chal raha hai to use stop (pause) karo.
        audio.pause();

        // Audio player ko batao kaunsa song load karna hai.
        audio.src = "./songs/" + songName;

        // Ab selected song play karo.
        audio.play();

    });

});