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
    // console.log(randIndex)
    // console.log(randColor)
    // console.log(randBtn)
    gameSeq.push(randColor);
    console.log(gameSeq)
    gameFlash(randBtn);
}
//button flash function
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout( function() {
        btn.classList.remove("flash")},250
    )

}
//user flash function
function btnFlash(btn){
    btn.classList.add("userFlash");
    setTimeout( function() {
        btn.classList.remove("userFlash")},250
    )
}

function checkAns(){
    let idx = level-1;

    if(userSeq[idx] == gameSeq[idx]){
        console.log("Same Value")
    }
    else{
        h2.innerText = "Game over, Press any key to restart";
    }
}

function btnPress(){
    console.log(this)
    let btn = this;
    btnFlash(btn);

    userColor = btn.getAttribute("id");
    console.log(userColor)
    userSeq.push(userColor);

    checkAns();
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener('click', btnPress);

}

