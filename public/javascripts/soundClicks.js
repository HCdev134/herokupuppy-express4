$(function () {
    var emergencyStopBtn = document.getElementById("emergency-stop-button");
    emergencyStopBtn.addEventListener("click", stopAudio)
    function stopAudio() {
        return audio.pause()
    }
    var globalListenBtn = document.querySelectorAll(`div[data-key]`);
    var one = document.querySelector(`div[data-key="65"]`);


// Click Functions 
    one.onclick = function () {
        console.log("Sound One: Running");
        var oneAudio = new Audio("sounds/boom.wav");
        oneAudio.play()
    }
    var two = document.querySelector(`div[data-key="83"`)
    two.onclick = function () {
        console.log("Sound Two: Running");
        var oneAudio = new Audio("sounds/hihat.wav");
        oneAudio.play()
    }

    var soundThree = document.querySelector(`div[data-key="68"`);
    soundThree.onclick = function () {
        console.log("Sound Three: Running");
        var threeAudio = new Audio("sounds/kick.wav");
        threeAudio.play()
    }


    // 65clap 83hihat 68kick 70openhat 71boom 72ride 74snare 75tom 76tink 65clap 83hihat 68kick 70openhat 71boom 72ride 74snare 75tom 76tink  

    var soundFour = document.querySelector(`div[data-key="70"`);
    soundFour.onclick = function () {
        console.log("Sound Four: Running");
        var fourAudio = new Audio("sounds/openhat.wav");
        fourAudio.play()
    }
    var soundFive = document.querySelector(`div[data-key="71"`);
    soundFive.onclick = function () {
        console.log("Sound Five: Running");
        var fiveAudio = new Audio("sounds/boom.wav");
        fiveAudio.play()
    }
    var soundSix = document.querySelector(`div[data-key="72"`);
    soundSix.onclick = function () {
        console.log("Sound Five: Running");
        var sixAudio = new Audio("sounds/ride.wav");
        sixAudio.play()
    }
    var soundSeven = document.querySelector(`div[data-key="75"`);
    soundSeven.onclick = function () {
        console.log("Sound Seven: Running", Audio);
        var sevenAudio = new Audio("sounds/snare.wav");
        sevenAudio.play()
    }
    var soundEight = document.querySelector(`div[data-key="75"`);
    soundEight.onclick = function () {
        console.log("Sound 8: Running");
        var eightAudio = new Audio("sounds/tom.wav");
        eightAudio.play()
    }
    var soundNine = document.querySelector(`div[data-key="76"`);
    soundNine.onclick = function () {
        console.log("Sound 9: Running, tink.wav");
        var nineAudio = new Audio("sounds/tink.wav");
        nineAudio.play()
    }
    /*
     * sound loops section 
     * 65clap 83hihat 68kick 70openhat 71boom 72ride 74snare 75tom 76tink 
     */

}); 