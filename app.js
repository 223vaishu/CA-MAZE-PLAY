const element=document.getElementById("start")
const text=document.getElementById("name")
 element.onclick=()=>{
    var save=text.value
    localStorage.setItem("save",save)
 }

const button = document.getElementById("button")

button.onclick = ()=>{
    window.location.href = "instruction.html";
}
var bgAudio = new Audio("gamemusic-6082.mp3");
bgAudio.play();
backgroundAudio.loop=true;

// document.addEventListener('DOMContentLoaded',function(){
//     var audioContext = new Audio('./gamemusic-6082.mp3')
//     audioContext.play();
//     audioContext.loop = true;
// })