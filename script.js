/********** START SPILLET / INTRO FORTÆLLING **********/

window.addEventListener("load", sidenVises);

let showSettingMusic = true;
let showSettingEffect = true;

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

    document.querySelector("#setting_music").addEventListener("click", toggleMusik);
    document.querySelector("#setting_effect").addEventListener("click", toggleLydeffekter);

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

    // Spil baggrundsmusik.
    document.querySelector("#music_mp3").play();

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

    if (this.classList.contains("dyr1")) {
        console.log("Det er en slange");
        document.querySelector("#slange_sound_mp3").play();
        document.querySelector("#slange_sound_mp3").currentTime = 0;
    }

    if (this.classList.contains("dyr2")) {
        console.log("Det er en løve");
        document.querySelector("#loeve_sound_mp3").play();
        document.querySelector("#loeve_sound_mp3").currentTime = 0;
    }

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

    let myPos = Math.floor((Math.random() * 8) + 1); //Viser dyret igen tilfældige steder.
    console.log("tilfældigt tal:" + myPos);


    this.classList = "dyr" + myAnimal + " pos" + myPos;

    gameStatus();
}

function clickFredeligtDyr() {
    console.log("clickFredeligtDyr");


    if (this.classList.contains("dyr4")) {
        console.log("Det er en abe");
        document.querySelector("#abe_sound_mp3").play();
        document.querySelector("#abe_sound_mp3").currentTime = 0;
    }

    if (this.classList.contains("dyr5")) {
        console.log("Det er en elefant");
        document.querySelector("#elefant_sound_mp3").play();
        document.querySelector("#elefant_sound_mp3").currentTime = 0;
    }


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


function toggleMusik() {
    if (showSettingMusic == true) {
        showSettingMusic = false
        musikOff();
    } else {
        showSettingMusic = true;
        musikOn();
    }
}

function musikOff() {
    console.log("musicOff")
    document.querySelector("#music_mp3").pause();

    document.querySelector("#music").classList.remove("on_1");
    document.querySelector("#music").classList.add("off_1");
}

function musikOn() {
    console.log("musicOn");
    document.querySelector("#music_mp3").play();

    document.querySelector("#music").classList.add("on_1");
    document.querySelector("#music").classList.remove("off_1");
}



function toggleLydeffekter() {
    if (showSettingEffect == true) {
        showSettingEffect = false
        lydeffekterOff();
    } else {
        showSettingEffect = true;
        lydeffekterOn();
    }
}

function lydeffekterOff() {
    console.log("lydeffekterOff");

    document.querySelector("#sound").classList.remove("on_2");
    document.querySelector("#sound").classList.add("off_2");
}

function lydeffekterOn() {

    document.querySelector("#sound").classList.add("on_2");
    document.querySelector("#sound").classList.remove("off_2");
}





/*
let points = 0;
let timeLeft = 30s;
let life = 3;


let liv = 3;

function clickBomb() {
    console.log("click bomb");

    // TODO: mist et liv
    let heart = "#heart" + liv;
    document.querySelector(heart).classList.add("dissappear");
    console.log("#heart" + liv);
    liv--;
    console.log(liv);



    //console.log("#heart" + liv);
    //console.log("select #heart" + liv + " og add hide");
    //console.log("du har " + liv + " hjerter tilbage");
    //document.querySelector("#heart1").classList("dissappear");
    //let heart = "#heart3";
    //document.querySelector(heart).classList.add("dissappear");
    // også TODO: Få eksplosionen til at virke igen - det må også vente
*/
