let gameSeq = [];
let userSeq = [];

let btns = ["red","yellow","green","purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener('keypress', function(){
    if(started == false){
        console.log("Game is started");
        started = true;

        levelUp();
    }
}); 

function levelUp () {
    level++;
    h2.inerText = `Level ${level}`;
    
    btnFlash();
}

function btnFlash(btn){
    btnFlash.classList.add("flash");
    setTimeout(function(){
        btnFlash.classList.remove("flash")},1000
    )

}