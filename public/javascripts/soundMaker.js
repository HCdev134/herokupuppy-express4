
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




        // $(`div[data-key="65"]`).on("click", function(){
        //     console.log("test, clicked"); 
        //     $(`audio[data-key="65"`).play(); 
        // 65, 83, 68, 70, 71, 72, 74, 75, 76 
        // })
        // something like this is ideal 
        // var allSongs = document.querySelectorAll("audio"); 
        // switch (allSongs) {
        //     case 65:
        //         src = "sounds/boom.wav";
        //         break;
        //     case 83:
        //         src = "sounds/hihat.wav";
        //         break;
        //     case 68:
        //         src = "How you like them apples?";
        //         break;
        //     default:
        //         src = "sounds/boom.wav";
        // }