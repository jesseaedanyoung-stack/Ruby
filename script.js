* {
box-sizing: border-box;
margin: 0;
padding: 0;
}

html {
scroll-behavior: smooth;
}

body {
background: #08080d;
color: #fff;
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
overflow: hidden;
}

button {
font-family: inherit;
}

#stars {
position: fixed;
inset: 0;
pointer-events: none;
z-index: 0;
}

.star {
position: absolute;
width: 2px;
height: 2px;
background: white;
border-radius: 50%;
opacity: 0.5;
animation: twinkle 3s infinite ease-in-out;
}

@keyframes twinkle {
0%, 100% {
opacity: 0.2;
transform: scale(0.8);
}

50% {
opacity: 1;
transform: scale(1.5);
}
}

.glow {
position: fixed;
width: 300px;
height: 300px;
border-radius: 50%;
filter: blur(100px);
opacity: 0.12;
pointer-events: none;
}

.glow-one {
top: -100px;
left: -100px;
background: #ff5c8a;
}

.glow-two {
bottom: -150px;
right: -100px;
background: #8b5cff;
}

#experience {
position: relative;
z-index: 2;
}

.screen {
position: fixed;
inset: 0;
min-height: 100dvh;
padding: 35px 22px;
display: flex;
align-items: center;
justify-content: center;

opacity: 0;
visibility: hidden;
transform: translateY(30px);

transition:
opacity 0.8s ease,
transform 0.8s ease,
visibility 0.8s;

overflow-y: auto;
}

.screen.active {
opacity: 1;
visibility: visible;
transform: translateY(0);
}

.chapter {
width: 100%;
max-width: 600px;
text-align: center;
padding: 60px 0;
}

.opening-content {
width: 100%;
text-align: center;
max-width: 500px;
}

.tiny-text {
color: rgba(255,255,255,0.55);
font-size: 0.8rem;
letter-spacing: 3px;
text-transform: uppercase;
margin-bottom: 20px;
}

h1 {
font-size: clamp(4rem, 18vw, 8rem);
font-weight: 300;
letter-spacing: -5px;
margin-bottom: 20px;
}

h1 span {
color: #ff7597;
font-size: 0.5em;
vertical-align: top;
}

h2 {
font-size: clamp(2.2rem, 9vw, 4rem);
line-height: 1.05;
font-weight: 400;
letter-spacing: -2px;
margin-bottom: 30px;
}

h3 {
font-size: 1.25rem;
margin-bottom: 10px;
}

.opening-subtitle {
color: rgba(255,255,255,0.65);
line-height: 1.7;
margin-bottom: 40px;
}

.chapter-number {
color: #ff7597;
font-size: 0.8rem;
letter-spacing: 4px;
margin-bottom: 20px;
}

.story-text {
color: rgba(255,255,255,0.7);
line-height: 1.8;
font-size: 1rem;
margin: 20px auto;
max-width: 500px;
}

.highlight {
margin: 35px 0;
color: #ff9ab2;
font-size: 1.2rem;
font-style: italic;
}

.highlight.big {
font-size: 2.3rem;
font-style: normal;
font-weight: 500;
}

.main-button,
.next-button {
border: 1px solid rgba(255,255,255,0.2);
background: rgba(255,255,255,0.06);
color: white;
padding: 15px 24px;
border-radius: 100px;
font-size: 0.95rem;
cursor: pointer;
transition: 0.3s ease;
backdrop-filter: blur(15px);
}

.main-button:hover,
.next-button:hover {
transform: translateY(-3px);
background: rgba(255,255,255,0.12);
}

.main-button span {
color: #ff7597;
}

.next-button {
margin-top: 30px;
}


/* PHOTO PLACEHOLDERS */

.photo-placeholder {
min-height: 180px;
border: 1px dashed rgba(255,255,255,0.2);
border-radius: 20px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 10px;
color: rgba(255,255,255,0.35);
background: rgba(255,255,255,0.03);
overflow: hidden;
}

.photo-placeholder span {
font-size: 2rem;
}

.photo-placeholder p {
font-size: 0.8rem;
}

.photo-placeholder.large {
min-height: 260px;
margin: 30px 0;
}

.photo-placeholder img {
width: 100%;
height: 100%;
object-fit: cover;
}


/* MEMORY CARDS */

.memory-card {
margin: 30px 0;
padding: 15px;
background: rgba(255,255,255,0.04);
border: 1px solid rgba(255,255,255,0.08);
border-radius: 25px;
}

.nugget-card {
padding: 35px 25px;
}

.nugget {
font-size: 4rem;
margin-bottom: 15px;
}

.small-note {
color: rgba(255,255,255,0.4);
font-size: 0.8rem;
margin-top: 15px;
}


/* MEMORY GRID */

.memory-grid {
display: grid;
grid-template-columns: 1fr 1fr;
gap: 15px;
margin-top: 30px;
}

.mini-memory {
background: rgba(255,255,255,0.04);
border: 1px solid rgba(255,255,255,0.07);
border-radius: 20px;
padding: 10px;
text-align: left;
}

.mini-memory .photo-placeholder {
min-height: 130px;
margin-bottom: 15px;
}

.mini-memory h3 {
padding: 0 5px;
}

.mini-memory p {
padding: 0 5px 5px;
color: rgba(255,255,255,0.5);
font-size: 0.8rem;
line-height: 1.5;
}


/* LOVE CARDS */

.love-card {
padding: 25px;
margin: 15px 0;
background: linear-gradient(
135deg,
rgba(255,117,151,0.08),
rgba(255,255,255,0.03)
);
border: 1px solid rgba(255,117,151,0.12);
border-radius: 20px;
}

.heart {
color: #ff7597;
font-size: 1.5rem;
margin-bottom: 12px;
}

.love-card p {
color: rgba(255,255,255,0.75);
line-height: 1.6;
}


/* CANDY */

.candy-box {
padding: 30px 20px;
background: rgba(255,255,255,0.04);
border-radius: 25px;
border: 1px solid rgba(255,255,255,0.08);
}

.candy-icon {
font-size: 3rem;
margin-bottom: 15px;
}

.candy-list {
display: flex;
flex-direction: column;
gap: 8px;
margin: 25px 0;
}

.candy-list span {
padding: 10px;
border-radius: 10px;
background: rgba(255,255,255,0.05);
color: rgba(255,255,255,0.75);
}


/* SECRET */

.secret-box {
margin: 25px 0;
padding: 20px;
border: 1px dashed rgba(255,117,151,0.3);
border-radius: 20px;
cursor: pointer;
transition: 0.3s;
}

.secret-box:hover {
background: rgba(255,117,151,0.06);
}

.secret-box span {
font-size: 2rem;
color: #ff7597;
}

.secret-box p {
color: rgba(255,255,255,0.45);
font-size: 0.8rem;
margin-top: 10px;
}


/* DARK CHAPTER */

.darker {
background: radial-gradient(
circle at center,
rgba(255,80,120,0.05),
transparent 60%
);
}

.pause-message {
margin: 40px 0;
padding: 35px 20px;
border-top: 1px solid rgba(255,255,255,0.08);
border-bottom: 1px solid rgba(255,255,255,0.08);
}

.pause-message span {
color: #ff7597;
font-size: 2rem;
}

.pause-message p {
margin-top: 15px;
color: rgba(255,255,255,0.65);
line-height: 1.7;
}


/* COUNTER */

.counter-ring {
width: 190px;
height: 190px;
border-radius: 50%;
margin: 40px auto;
border: 1px solid rgba(255,117,151,0.3);
display: flex;
align-items: center;
justify-content: center;
box-shadow:
0 0 50px rgba(255,117,151,0.08),
inset 0 0 40px rgba(255,117,151,0.04);
}

.counter-ring span {
color: #ff7597;
font-size: 2.5rem;
}

.counter-ring p {
color: rgba(255,255,255,0.4);
font-size: 0.75rem;
margin-top: 5px;
}


/* FINAL */

.final-screen {
background:
radial-gradient(
circle at center,
rgba(255,70,110,0.1),
transparent 60%
);
}

.final-content {
max-width: 600px;
text-align: center;
padding: 50px 10px;
}

.final-content h2 {
font-size: clamp(2.8rem, 12vw, 5rem);
}

.final-message {
margin: 40px 0;
}

.final-message p {
color: rgba(255,255,255,0.75);
font-size: 1.05rem;
line-height: 1.9;
margin: 25px 0;
}

.final-line {
display: flex;
align-items: center;
gap: 15px;
margin: 45px 0;
}

.final-line span:first-child,
.final-line span:last-child {
height: 1px;
background: rgba(255,255,255,0.15);
flex: 1;
}

.final-line span:nth-child(2) {
color: #ff7597;
font-size: 1.5rem;
}

.ending {
color: rgba(255,255,255,0.55);
line-height: 1.7;
}

.ending.strong {
color: #ff9ab2;
font-size: 1.4rem;
margin-top: 10px;
font-weight: 500;
}

.secret-final-button {
margin-top: 45px;
border: none;
background: none;
color: rgba(255,255,255,0.35);
cursor: pointer;
font-size: 0.8rem;
}

.hidden-final {
opacity: 0;
transform: translateY(10px);
transition: 0.6s;
margin-top: 20px;
color: #ff7597;
}

.hidden-final.show {
opacity: 1;
transform: translateY(0);
}


/* MOBILE */

@media (max-width: 500px) {

.screen {
padding: 25px 18px;
}

.chapter {
padding: 45px 0;
}

.memory-grid {
gap: 10px;
}

.mini-memory {
border-radius: 16px;
}

.mini-memory .photo-placeholder {
min-height: 110px;
}

h2 {
letter-spacing: -1.5px;
}
}
