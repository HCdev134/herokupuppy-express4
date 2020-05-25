
// creates an audio loop with sounds from an array 

// Element to target = loop_one
var loop_one = document.querySelector(`div[data-key="65"]`);
function LoopOne() {


    var audio = new Audio(),
        i = 0;
    var playlist = new Array('sounds/boom.wav', 'sounds/clap.wav');

    audio.addEventListener('ended', function () {
        i = ++i < playlist.length ? i : 0;
        console.log("testing:", i)
        audio.src = playlist[i];
        audio.play();
        console.log(`Playing${audio}`);
    }, true);
    audio.volume = 0.3;

    audio.src = playlist[0];
    audio.play();
    audio.currentTime = 0;
    audio.loop = false;
    //use button element to trigger setTimeout
    document.getElementById("loop-stop-one").onclick = function(){
        setTimeout(function(){
            audio.pause();
            console.log("Test: Timer");
            alert("Audio Stop Successfully");
        },
        10000);
    }
    setTimeout(function(){
        audio.pause();
        console.log("Test: Timer");
        alert("Audio Stop Successfully");
    },
    10000);
 

}
loop_one.addEventListener("click", LoopOne);