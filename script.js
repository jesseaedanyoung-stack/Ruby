const screens = document.querySelectorAll(".screen");

let currentScreen = 0;


/* =========================
CREATE STARS
========================= */

const starsContainer = document.getElementById("stars");

for (let i = 0; i < 120; i++) {

const star = document.createElement("div");

star.classList.add("star");

star.style.left = Math.random() * 100 + "%";
star.style.top = Math.random() * 100 + "%";

star.style.animationDelay =
Math.random() * 3 + "s";

star.style.animationDuration =
2 + Math.random() * 4 + "s";

starsContainer.appendChild(star);
}


/* =========================
MUSIC
========================= */

const music = document.getElementById("music");

function startStory() {

/*
iPhone browsers usually block autoplay.

Because this function runs after Ruby taps
the button, the browser should allow the music
to begin here.
*/

music.volume = 0.45;

music.play().catch(() => {
console.log("Music needs another user interaction.");
});

nextChapter();
}


/* =========================
SCREEN TRANSITIONS
========================= */

function nextChapter() {

if (currentScreen >= screens.length - 1) {
return;
}

screens[currentScreen].classList.remove("active");

currentScreen++;

setTimeout(() => {

screens[currentScreen].classList.add("active");

}, 100);

}


/* =========================
SECRET #1
========================= */

function revealSecret(element) {

element.innerHTML = `
<span>😭</span>
<p>
You said "tandem red log" while sleep talking.
I still don't know what that means.
</p>
`;

element.style.borderColor =
"rgba(255,117,151,0.5)";
}


/* =========================
SECRET #2
========================= */

function finalSecret() {

const secret =
document.getElementById("final-secret");

secret.classList.add("show");

}


/* =========================
KEYBOARD SUPPORT
========================= */

document.addEventListener("keydown", (event) => {

if (event.key === "ArrowRight" ||
event.key === "Enter") {

nextChapter();

}

});
