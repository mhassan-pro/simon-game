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
    h2.innerText = `Level ${level}`;
    
    let randIndex = Math.floor(Math.random() * 3);
    let randColor = btns[randIndex];
    let randBtn = document.querySelector(`.${randColor}`)
    console.log(randIndex)
    console.log(randColor)
    console.log(randBtn)

    btnFlash(randBtn);
}
//button flash function
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout( function() {
        btn.classList.remove("flash")},250
    )

}