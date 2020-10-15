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
const sun = document.querySelector(".sun");
const plant = document.querySelector(".plant");
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
music = new Audio("./public/zorba.mp3");
music.volume = 0.2;
music.loop = true;
donkeySound = new Audio("./public/donkey.wav");
donkeySound.volume = 0.5;
seagullSound = new Audio("./public/seagull.wav");
seagullSound.volume = 0.5;
catSound = new Audio("./public/cat.wav");
catSound.volume = 0.5;

// Event Listeners
startBtn.addEventListener("click", (event) => {
  music.play()
})

popUpBtn.addEventListener("click", (event) => {
  popUp.style.display = "none";
})

boat.addEventListener("click", (event) => {
  popUp.style.display = "block";
  popUpText.innerHTML = `
  <h4 class="picture-title"> 6h00 du matin, Athènes.</h4>
  <p class="story">Les yeux encore un peu collés, nous partons de l’hôtel pour prendre le métro. Direction le port où le ferry nous attend. Le bateau est grand, avec différents salons. On choisi les canapés les plus confortables, à l’avant du bateau. Il faut qu’on soit bien, la traversée dure plus de 7 heures! Finalement ça passe assez vite, quelques boissons au bar, un burger immonde au seul snack du bateau,  un film, du repos et nous voilà au port de Santorini, petite esplanade en bas d’une falaise impressionnante. Les habitations sont tout en haut, au bout d’une route sinueuse que nous parcourons en bus.</p>
  <div class="popup-image"><img src="./public/photos/boat.jpg" alt = "Vue de la mer" /> </div>
  `
})

donkey.addEventListener("click", (event) => {
  donkeySound.play()
})

 cat.addEventListener("click", (event) => {
  popUp.style.display = "block";
  popUpText.innerHTML = `
  <h4 class="picture-title"> Vue depuis Oia </h4>
  <div class="popup-image"><img src="./public/photos/oia-elise.jpg" alt = "Elise à Oia" /> </div>
  `
})

cat2.addEventListener("click", (event) => {
  popUp.style.display = "block";
  popUpText.innerHTML = `
  <h4 class="picture-title"> Steffel à Fira </h4>
  <div class="popup-image"><img src="./public/photos/stef.jpg" alt = "Steffel à Fira" /> </div>
  `
})

seagull.addEventListener("click", (event) => {
  seagullSound.play();
})

sun.addEventListener("click", (event) => {
  popUp.style.display = "block"
  popUpText.innerHTML = `
  <div class="popup-image"><img src="./public/photos/sunset.jpg" alt = "Sunset" /> </div>
  `
})

plant.addEventListener("click", (event) => {
  popUp.style.display = "block";
  popUpText.innerHTML = `
  <h4 class="picture-title"> Un peu trop petite... </h4>
  <div class="popup-image"><img src="./public/photos/petite.jpg" alt = "Elise petite" /> </div>
  `
})

palmtree.addEventListener("click", (event) => {
  popUp.style.display = "block";
  popUpText.innerHTML = `
  <h4 class="picture-title"> Elise à Oia </h4>
  <div class="popup-image"><img src="./public/photos/oia-re-elise.jpg" alt = "Elise à Oia" /> </div>
  `
})

palmtreeSmall.addEventListener("click", (event) => {
  popUp.style.display = "block";
  popUpText.innerHTML = `
  <h4 class="picture-title"> Elise à Oia </h4>
  <div class="popup-image"><img src="./public/photos/oia-re-elise.jpg" alt = "Elise à Oia" /> </div>
  `
})

greek.addEventListener("click", (event) => {
  popUp.style.display = "block";
  popUpText.innerHTML = `
  <h4 class="picture-title"> La Caverne d'Ali Baba </h4>
  <p class="story"> surnom donné à la supérette en haut de la rue de l’hôtel. Tenue par un monsieur au gros ventre et aux vêtements d’une propreté douteuse, chaque cm2 de la boutique comporte quelque chose à acheter, du sol au plafond c’est rempli! En plus la musique religieuse donne une impression de chapelle dédiée à la nourriture! <br/>
  <a href="https://www.google.com/maps/place/Self+Service+%CE%94%CE%91%CE%9A%CE%9F%CE%A5%CE%A4%CE%A1%CE%9F%CE%A3/@36.418285,25.4338717,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipO7M7QDSxR_yiAcxrQoryzBb4qqmGVM7LoqgD3m!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipO7M7QDSxR_yiAcxrQoryzBb4qqmGVM7LoqgD3m%3Dw203-h270-k-no!7i2448!8i3264!4m8!1m2!2m1!1sGroceries!3m4!1s0x0:0x3c93aa879d0f9d02!8m2!3d36.4182849!4d25.4338716" target="_blank">Jetez un oeil aux photos du lieu sur google map ! </a></p>
  `
})

selfie.addEventListener("click", (event) => {
  popUp.style.display = "block";
  popUpText.innerHTML = `
  <h4 class="picture-title"> Oia </h4>
  <div class="popup-image"><img src="./public/photos/oia-selfie.jpg" alt = "Selfie à Oia" /> </div>
  `
})

filming.addEventListener("click", (event) => {
  popUp.style.display = "block";
  popUpText.innerHTML = `
  <h4 class="picture-title"> Oia </h4>
  <div class="popup-image"><img src="./public/photos/oia.jpg" alt = "Oia" /> </div>
  `
})

walking.addEventListener("click", (event) => {
  popUp.style.display = "block";
  popUpText.innerHTML = `
  <p class="story">Nous logeons dans le village touristique de Fira. Depuis celui-ci, un sentier d’une dizaine de kilomètres longe les falaises et rejoint le village encore plus touristique de Oia. On ne se sent pas de faire les 10km à pied en plein soleil (surtout que les 5 derniers km se font dans des espèces de pierriers avec pas un gramme d’ombre) mais on décide de suivre le sentier sur presque la moitié, de prendre un bus pour rentrer à Fira puis d’aller à Oia le soir en bus pour voir le coucher de soleil. Sauf que les bus grecs, c’est pas super bien expliqué. Et en fait, depuis l’arrêt où on était, pour aller à Fira, il fallait prendre le bus qui va à Oia puis rester dans celui-ci pour faire la route de retour qui passe par l’autre côté de l’île. Bon, comme on était à Oia, on a décidé de visiter le village directement. C’est très joli, mais rempli d’instagrammeuses en longues robes et en talons qui font des photos pour les réseaux sociaux. On ose même pas imaginer le monde qu’il doit y avoir en période touristique (et sans le covid).</p>
  <div class="popup-image"><img src="./public/photos/walk.jpg" alt = "Marche" /> </div>
  `
})

walking2.addEventListener("click", () => {
  popUp.style.display = "block";
  popUpText.innerHTML = `
  <h4 class="picture-title"> Fira by Night </h4>
  <div class="popup-image"><img src="./public/photos/fira-night.jpg" alt = "Fira by night" /> </div>
  `
})

walking3.addEventListener("click", (event) => {
  popUp.style.display = "block";
  popUpText.innerHTML = `
  <p class="story">Il y a très très (mais alors très) longtemps, Santorini était une seule grande île avec un volcan au milieu. Il y a un tout petit peu moins longtemps, une énorme éruption a fait s’effondrer le volcan (bon elle a aussi causé un giga tsunami et les cendres qui sont montées dans l’atmosphère ont obstrué partiellement la lumière du soleil, entrainant une baisse des températures de 2 à 3 degrés sur toute la planète) créant ainsi l’archipel comme on le connait aujourd’hui : deux îles centrales inhabitées avec des cratères (plusieurs inactifs et un encore actif) et des îles tout autour, plus ou moins grandes, habitées ou non. <br />
  Valeureux aventuriers que nous sommes, nous avons bravé tous les dangers pour marcher sur l’ile de Nea Kameni qui est en fait la partie émergée du volcan actif. Nous avons pu marcher sur les pierres volcaniques, voir 3 cratères inactifs et un cratère actif (dernière éruption en date en 1950). Bon ok, on était en visite guidée et encadrée… et le cratère actif ressemble seulement à une depression dans le terrain avec quelques fumeroles et une odeur de souffre. Mais quand même, on a marché sur un volcan actif!</p>
  <div class="popup-image"><img src="./public/photos/volcano.jpg" alt = "Marche" /> </div>
  `
})

fish.addEventListener("click", (event) => {
  popUp.style.display = "block";
  popUpText.innerHTML = `
  <h4 class="picture-title"> Fira </h4>
  <div class="popup-image"><img src="./public/photos/fira.jpg" alt = "Fira" /> </div>
  `
})

sleepingcat.addEventListener("click", (event) => {
  catSound.play();
})

seagull2.addEventListener("click", (event) => {
  popUp.style.display = "block";
  popUpText.innerHTML = `
  <div class="popup-image"><img src="./public/photos/wind.jpg" alt = "Ca vente!" /> </div>
  `
})

gyros.addEventListener("click", (event) => {
  popUp.style.display = "block";
  popUpText.innerHTML = `
  <h4 class="picture-title"> Aaaaah les gyros! </h4>
  <p class="story">La nouvelle passion de Stef! Ça ressemble aux kebabs que l’on a en France, mais avec de la viande de porc ou de poulet, du tzatziki (crème et concombre) et dans du pain pita (plus moelleux que les pains en France). C’est pas cher, et c’est très bon! Bon, bien sûr on aime aussi la moussaka! </p>
  `
})

smoke.addEventListener("click", (event) => {
  popUp.style.display = "block";
  popUpText.innerHTML = `
  <p class="story">Notre voilier (aux voiles repliées et au moteur tournant à fond) s’approche de l’île de Palia Kameni, petite île volcanique au centre de l’archipel de Santorini. Avec quelques autres passagers (touristes allemands et français pour la plupart) nous sautons à l’eau depuis le pont. En quelques brasses nous rejoignons une baie à l’eau étrangement orange/marron et dont la température avoisine les 35 degrés (d’après la brochure, parce que d’après nos estimations c’était plus autour de 25/30). On se prélasse dans cette eau très chargée en boue souffrée (d’où la couleur) et chauffée par l’activité volcanique. C’est super bon pour la peau, mais on ressort orange. Je me suis demandé si Trump venait se faire des teintures ici…  </p>
  `
})