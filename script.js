// Query Selector
const startBtn = document.querySelector("#start-btn");

const popUp = document.querySelector("#popUp");
const popUpText = document.querySelector(".popUp-text");
const popUpBtn = document.querySelector(".continue-btn");

const boat = document.querySelector("#boat");
const donkey = document.querySelector(".donkey");
const cat = document.querySelector(".cat");
const cat2 = document.querySelector(".cat2");
const seagull = document.querySelector(".seagull");
const sun = document.querySelector(".seagull");
const plant = document.querySelector(".plant");
const plant2 = document.querySelector(".plant2");
const palmtree = document.querySelector(".palmtree");
const palmtreeSmall = document.querySelector(".palmtree-small");
const greek = document.querySelector(".greek");
const selfie = document.querySelector(".selfie");
const filming = document.querySelector(".filming");
const walking = document.querySelector(".walking");
const walking2 = document.querySelector(".walking2");
const walking3 = document.querySelector(".bell-tower");
const fish = document.querySelector(".fish");
const sleepingcat = document.querySelector(".sleepingcat");
const seagull2 = document.querySelector(".seagull2");
const gyros = document.querySelector(".gyros");
const smoke = document.querySelector(".smoke");

// Music
music = new Audio("")
music.volume = 0.2;
music.loop = true;

// Event Listeners
startBtn.addEventListener("click", (event) => {
  music.play()
})

popUpBtn.addEventListener("click", (event) => {
  popUp.style.display = "none";
})

boat.addEventListener("click", (event) => {
  popUp.style.display = "block";
})

walking2.addEventListener("click", () => {
  popUp.style.display = "block";
})