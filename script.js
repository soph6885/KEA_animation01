/********** START SPILLET / INTRO FORTÆLLING **********/

window.addEventListener("load", sidenVises);


function sidenVises() {
    console.log("sidenVises");

    showStart();
}

function showStart() {
    console.log("showStart");

    document.querySelector("#close_settings").removeEventListener("click", showStart);

    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#play_button").classList.add("pulse");

    document.querySelector("#play_button").addEventListener("click", hideStart);
    document.querySelector("#setting_button").addEventListener("click", showSettings);
}


function showSettings() {
    console.log("showSettings");
    document.querySelector("#setting_button").removeEventListener("click", showSettings);
    document.querySelector("#settings").classList.remove("hide");

    document.querySelector("#close_settings").addEventListener("click", hideSettings);
}

function hideSettings() {
    document.querySelector("#close_settings").removeEventListener("click", hideSettings);

    document.querySelector("#settings").classList.add("hide");

    showStart();
}


function hideStart() {
    console.log("hideStart");

    document.querySelector("#play_button").removeEventListener("click", hideStart);

    document.querySelector("#play_button").classList.remove("pulse");
    document.querySelector("#start").classList.add("fade_out");

    document.querySelector("#start").addEventListener("animationend", startIntro);
}


function startIntro() {
    console.log("startIntro");

    document.querySelector("#start").removeEventListener("animationend", startIntro);

    // Vis intro-fortælling.
    document.querySelector("#intro").classList.remove("hide");

    document.querySelector("#close_intro").addEventListener("click", hideIntro);
}


function hideIntro() {
    console.log("hideIntro");

    document.querySelector("#close_intro").removeEventListener("click", hideStart);

    document.querySelector("#intro").classList.add("fade_out");

    document.querySelector("#intro").addEventListener("animationend", startGame);
}

function startGame() {
    console.log("startGame");

    document.querySelector("#intro").removeEventListener("animationend", startGame);

    document.querySelector("#game").classList.remove("hide");


    document.querySelector("#dyr1").addEventListener("click", clickFarligtDyr);
    document.querySelector("#dyr2").addEventListener("click", clickFarligtDyr);

    document.querySelector("#dyr3").addEventListener("click", clickFredeligtDyr);
    document.querySelector("#dyr4").addEventListener("click", clickFredeligtDyr);
    document.querySelector("#dyr5").addEventListener("click", clickFredeligtDyr);
}

let points = 0;
let life = 3;

function clickFarligtDyr() {
    console.log("clickFarligtDyr");

    // Mist et point
    points--;
    console.log(points);
    document.querySelector("#points").innerHTML = points;

    // Mist et liv
    let heart = "#heart" + life;
    document.querySelector(heart).classList.add("disappear");
    console.log("#heart" + life);
    life--;
    console.log(life);


    console.log(this);
    /*this.classList.add("hide");*/ // "this henvender sig til det dyr man klikker på. JS kan genkende hvad man trykker på.

    let myAnimal = Math.floor((Math.random() * 5) + 1); //Viser dyret igen tilfældige steder.
    console.log("tilfældigt tal:" + myAnimal);

    let myPos = Math.floor((Math.random() * 5) + 1); //Viser dyret igen tilfældige steder.
    console.log("tilfældigt tal:" + myPos);


    this.classList = "dyr" + myAnimal + " pos" + myPos;

    gameStatus();
}

function clickFredeligtDyr() {
    console.log("clickFredeligtDyr");

    points++;
    console.log(points);
    document.querySelector("#points").innerHTML = points;


    console.log(this);
    /*this.classList.add("hide");*/ // "this henvender sig til det dyr man klikker på. JS kan genkende hvad man trykker på.

    let myAnimal = Math.floor((Math.random() * 5) + 1); //Viser dyret igen tilfældige steder.
    console.log("tilfældigt tal:" + myAnimal);

    let myPos = Math.floor((Math.random() * 5) + 1); //Viser dyret igen tilfældige steder.
    console.log("tilfældigt tal:" + myPos);


    this.classList = "dyr" + myAnimal + " pos" + myPos;

    gameStatus();
}



function gameStatus() {

    if (life < 0) {
        gameOver();
    }

    if (points = 15) {
        levelCompleted();
    }

}

function gameOver() {
    console.log("gameOver");
    document.querySelector("#gameover").classList.remove("hide");
    document.querySelector("#play_again").classList.remove("hide");
    document.querySelector("#close_go_start").classList.remove("hide");

    document.querySelector("#play_again").addEventListener("click", startGame);
    document.querySelector("#close_go_start").addEventListener("click", sidenVises);
}

function levelCompleted() {
    console.log("levelCompleted");
    document.querySelector("#levelcomplete").classList.remove("hide");
    document.querySelector("#play_again").classList.remove("hide");
    document.querySelector("#close_go_start").classList.remove("hide");
    document.querySelector("#play_again").addEventListener("click", startGame);
    document.querySelector("#close_go_start").addEventListener("click", sidenVises);
}



/*
let points = 0;
let timeLeft = 30s;
let life = 3;
*/
