var soundOne = document.querySelector(`div[data-key="65"]`);
// 65clap 83hihat 68kick 70openhat 71boom 72ride 74snare 75tom 76tink 

soundOne.onclick = function () {
    console.log("function ran: one.click");
    var oneAudio = new Audio("sounds/boom.wav");
    oneAudio.play()
}

var soundTwo = document.querySelector(`div[data-key="83"`);

soundTwo.onclick = function () {
    console.log("function ran: two.click");
    var twoAudio = new Audio("sounds/hihat.wav");
    twoAudio.play()
}
var soundThree = document.querySelector(`div[data-key="68"`); 
soundThree.onclick = function () {
    console.log("function ran: two.click");
    var threeAudio = new Audio("sounds/hihat.wav");
    threeAudio.play()
}

