const button = document.querySelectorAll("button");
const all=document.getElementsByTagName("*");
const h1=document.getElementById("title");

const boom = document.getElementById("boom");
const clap = document.getElementById("clap");
const hihat = document.getElementById("hihat");
const kick = document.getElementById("kick");
const openhat = document.getElementById("openhat");
const ride = document.getElementById("ride");
const snare = document.getElementById("snare");
const tink = document.getElementById("tink");
const tom = document.getElementById("tom");

const boomBtn=document.getElementById("boomBtn");
const clapBtn=document.getElementById("clapBtn");
const hihatBtn=document.getElementById("hihatBtn");
const kickBtn=document.getElementById("kickBtn");
const openhatBtn= document.getElementById("openhatBtn");
const rideBtn= document.getElementById("rideBtn");
const snareBtn= document.getElementById("snareBtn");
const tinkBtn= document.getElementById("tinkBtn");
const tomBtn= document.getElementById("tomBtn");
// 
let colorchange=(n)=>{
    for(let i=0; i<all.length;i++){
        all[i].style.color=n
    }
}

document.addEventListener("keydown",(e)=>{
    if (e.key=="7"){
        clap.src="sounds/clap.wav"
        colorchange("red")
    }else if (e.key=="8"){
        hihat.src="sounds/hihat.wav"
        colorchange("orange")
    }else if (e.key=="9"){
        boom.src="sounds/boom.wav"
        colorchange("yellow")
    }else if (e.key=="4"){
        kick.src="sounds/kick.wav"
        colorchange("green")
    }else if (e.key=="5"){
        openhat.src="sounds/openhat.wav"
        colorchange("cyan")
    }else if (e.key=="6"){
        ride.src="sounds/ride.wav"
        colorchange("blue")
    }else if (e.key=="1"){
        snare.src="sounds/snare.wav"
        colorchange("indigo")
    }else if (e.key=="2"){
        tink.src="sounds/tink.wav"
        colorchange("violet")
    }else if (e.key=="3"){
        tom.src="sounds/tom.wav"
        colorchange("rgb(216, 112, 147)")
    }
    h1.style.fontSize="45px"
})
document.addEventListener("keyup",()=>{
    colorchange("white")
    h1.style.fontSize="40px"
})
