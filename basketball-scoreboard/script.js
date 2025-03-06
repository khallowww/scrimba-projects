let awayScore = document.getElementById("away-score");
let homeScore = document.getElementById("home-score");

// Counter for away game
let countAway = 0;
function awayAdd1() {
  countAway += 1;
  awayScore.innerText = countAway;
}
function awayAdd2() {
  countAway += 2;
  awayScore.innerText = countAway;
}
function awayAdd3() {
  countAway += 3;
  awayScore.innerText = countAway;
}

// Counter for home game
let countHome = 0;
function homeAdd1() {
  countHome += 1;
  homeScore.innerText = countHome;
}
function homeAdd2() {
  countHome += 2;
  homeScore.innerText = countHome;
}
function homeAdd3() {
  countHome += 3;
  homeScore.innerText = countHome;
}
