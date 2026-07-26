/* ==========================================
   HASEEBLIO™ ULTRA CYBER PORTFOLIO
   main.js (Part 1)
========================================== */

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

setTimeout(() => {

loader.style.opacity = "0";
loader.style.visibility = "hidden";

}, 2500);

});
window.addEventListener("DOMContentLoaded",()=>{

const fill=document.getElementById("progress-fill");
const number=document.getElementById("progress-number");
const loader=document.getElementById("loader");

if(!fill || !number || !loader) return;


let progress=0;

const loading=setInterval(()=>{

progress++;

fill.style.width=progress+"%";
number.textContent=progress+"%";


if(progress>=100){

clearInterval(loading);


setTimeout(()=>{

loader.style.opacity="0";
loader.style.transition="1s";


setTimeout(()=>{

loader.style.display="none";

},1000);


},500);

}


},25);


});

/* ===============================
   CUSTOM CURSOR
================================ */

const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e)=>{

cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";

});

/* ===============================
   SCROLL PROGRESS
================================ */

const progress = document.getElementById("progress-bar");

window.addEventListener("scroll",()=>{

const totalHeight =
document.documentElement.scrollHeight -
window.innerHeight;

const progressHeight =
(window.pageYOffset / totalHeight) * 100;

progress.style.width =
progressHeight + "%";

});

/* ===============================
   TYPING EFFECT
================================ */

const typing = document.getElementById("typing");

const words = [

"Cyber Security Specialist",

"Web Developer",

"Linux Enthusiast",

"Ethical Hacker",

"JavaScript Developer"

];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

function typeEffect(){

const current = words[wordIndex];

if(!deleting){

typing.textContent =
current.substring(0,charIndex++);

if(charIndex > current.length){

deleting = true;

setTimeout(typeEffect,1500);

return;

}

}else{

typing.textContent =
current.substring(0,charIndex--);

if(charIndex < 0){

deleting = false;

wordIndex++;

if(wordIndex >= words.length){

wordIndex = 0;

}

}

}

setTimeout(typeEffect,

deleting ? 45 : 90);

}

typeEffect();

/* ===============================
   SCROLL TO TOP
================================ */

const scrollBtn =
document.getElementById("scroll-top");

window.addEventListener("scroll",()=>{

if(window.scrollY > 500){

scrollBtn.style.display="flex";

}else{

scrollBtn.style.display="none";

}

});

scrollBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
/* ==========================================
   SCROLL REVEAL ANIMATION
========================================== */

const revealElements = document.querySelectorAll(
".fade-up,.skill-card,.project-card,.stat-box,.about-info div"
);

function revealOnScroll(){

revealElements.forEach((el)=>{

const top = el.getBoundingClientRect().top;

const windowHeight = window.innerHeight;

if(top < windowHeight - 100){

el.classList.add("show");

}

});

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/* ==========================================
   DARK / LIGHT MODE
========================================== */

const themeBtn =
document.getElementById("theme-toggle");

let darkMode = true;

themeBtn.addEventListener("click",()=>{

if(darkMode){

document.body.style.background="#ffffff";
document.body.style.color="#111827";

themeBtn.innerHTML =
'<i class="fa-solid fa-sun"></i>';

}else{

document.body.style.background="#050816";
document.body.style.color="#ffffff";

themeBtn.innerHTML =
'<i class="fa-solid fa-moon"></i>';

}

darkMode=!darkMode;

});

/* ==========================================
   AI BUTTON
========================================== */

const aiBtn =
document.getElementById("ai-button");

aiBtn.addEventListener("click",()=>{

alert(
"🤖 AI Assistant\n\nComing Soon...\nHaseebLio™ Ultra Cyber Portfolio"
);

});

/* ==========================================
   TERMINAL TYPING EFFECT
========================================== */

const terminal =
document.querySelector(".terminal-body");

if(terminal){

const lines=[

"> Initializing Linux...",

"> Loading Security Modules...",

"> Scanning Network...",

"> Authentication Success...",

"> Welcome Haseeb Hashim",

"> Access Granted ✔"

];

terminal.innerHTML="";

let index=0;

function terminalTyping(){

if(index>=lines.length) return;

const p=document.createElement("p");

p.textContent=lines[index];

terminal.appendChild(p);

index++;

setTimeout(terminalTyping,500);

}

setTimeout(terminalTyping,700);

}

/* ==========================================
   NAVBAR SHADOW
========================================== */

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.style.boxShadow=
"0 5px 30px rgba(0,245,255,.15)";

}else{

header.style.boxShadow="none";

}

});
/* ==========================================
   MATRIX RAIN EFFECT
========================================== */

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters =
"01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&@";

const fontSize = 16;

const columns = Math.floor(canvas.width / fontSize);

const drops = [];

for(let i=0;i<columns;i++){

drops[i]=1;

}

function drawMatrix(){

ctx.fillStyle="rgba(5,8,22,0.08)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#00F5FF";

ctx.font=fontSize+"px monospace";

for(let i=0;i<drops.length;i++){

const text=
letters.charAt(
Math.floor(Math.random()*letters.length)
);

ctx.fillText(

text,

i*fontSize,

drops[i]*fontSize

);

if(

drops[i]*fontSize>

canvas.height &&

Math.random()>0.975

){

drops[i]=0;

}

drops[i]++;

}

}

setInterval(drawMatrix,35);

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

});

/* ==========================================
   CURSOR SCALE
========================================== */

document.addEventListener("mousedown",()=>{

cursor.style.transform="scale(1.8)";

});

document.addEventListener("mouseup",()=>{

cursor.style.transform="scale(1)";

});

/* ==========================================
   SMOOTH LINKS
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",(e)=>{

e.preventDefault();

const target=document.querySelector(

link.getAttribute("href")

);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/* ==========================================
   HERO GLOW EFFECT
========================================== */

const hero=document.querySelector(".hero");

document.addEventListener("mousemove",(e)=>{

const x=e.clientX/window.innerWidth;

const y=e.clientY/window.innerHeight;

hero.style.background=

`radial-gradient(circle at ${x*100}% ${y*100}%,

rgba(0,245,255,.08),

transparent 60%)`;

});

/* ==========================================
   PAGE READY
========================================== */

console.log(

"HaseebLio™ Ultra Cyber Portfolio Loaded Successfully"

);
/* ==========================================
   COUNTER ANIMATION
========================================== */

const counters = document.querySelectorAll(".stat-box h2");

function runCounters() {

    counters.forEach(counter => {

        const text = counter.innerText;

        const target = parseInt(text);

        if (isNaN(target)) return;

        let count = 0;

        const speed = Math.max(20, Math.floor(1500 / target));

        const timer = setInterval(() => {

            count++;

            counter.innerText = count + "+";

            if (count >= target) {

                counter.innerText = text;

                clearInterval(timer);

            }

        }, speed);

    });

}

let counterStarted = false;

window.addEventListener("scroll", () => {

    const stats = document.querySelector(".stats");

    if (!stats || counterStarted) return;

    const top = stats.getBoundingClientRect().top;

    if (top < window.innerHeight - 120) {

        counterStarted = true;

        runCounters();

    }

});


/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        const height = section.offsetHeight;

        if (pageYOffset >= top &&
            pageYOffset < top + height) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ==========================================
   SIMPLE PARALLAX
========================================== */

window.addEventListener("scroll", () => {

    const value = window.scrollY * 0.25;

    const hero = document.querySelector(".hero");

    if(hero){

        hero.style.backgroundPositionY =
        value + "px";

    }

});


/* ==========================================
   CONTACT FORM
========================================== */

const form = document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert(
"✅ Thank you!\n\nYour message has been received."
);

form.reset();

});

}


/* ==========================================
   STARTUP
========================================== */

console.log("🚀 HaseebLio™ Ultra Cyber Portfolio Ready");
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.querySelectorAll(".progress-fill").forEach(bar=>{
                bar.style.width = bar.dataset.width;
            });
        }
    });
},{threshold:0.4});

const skillsSection = document.querySelector(".skills-section");

if(skillsSection){
    observer.observe(skillsSection);
}
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(!navbar) return;

if(window.scrollY>50){

navbar.style.background="rgba(5,10,20,.75)";
navbar.style.boxShadow="0 0 35px rgba(0,245,255,.35)";

}else{

navbar.style.background="rgba(15,20,35,.45)";
navbar.style.boxShadow="0 0 30px rgba(0,245,255,.18)";

}

});
function createStar(){

const star=document.createElement("div");

star.className="shooting-star";

star.style.left=Math.random()*window.innerWidth+"px";

star.style.top=Math.random()*300+"px";

document.body.appendChild(star);

setTimeout(()=>{
star.remove();
},2500);

}

setInterval(createStar,1800);
document.querySelectorAll(".project-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

const rotateY=(x-rect.width/2)/18;
const rotateX=-(y-rect.height/2)/18;

card.style.transform=
`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=
"perspective(1000px) rotateX(0) rotateY(0) translateY(0)";

});

});
window.addEventListener("DOMContentLoaded", () => {

    const cursor = document.getElementById("cursor");

    if (!cursor) return;

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

});
window.addEventListener("DOMContentLoaded",()=>{

const nodes=document.getElementById("nodes");

if(nodes){

let value=128;

setInterval(()=>{

value++;

if(value>150) value=128;

nodes.textContent=value;

},1200);

}

});
window.addEventListener("DOMContentLoaded",()=>{

const time=document.getElementById("live-time");
const date=document.getElementById("live-date");

if(time && date){

function updateClock(){

const now=new Date();

time.textContent=now.toLocaleTimeString();

date.textContent=now.toDateString();

}

updateClock();

setInterval(updateClock,1000);

}

});
window.addEventListener("DOMContentLoaded",()=>{

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const target=+counter.dataset.target;

let count=0;

const speed=Math.max(1,Math.ceil(target/80));

function update(){

count+=speed;

if(count>=target){

counter.textContent=target;

}else{

counter.textContent=count;

requestAnimationFrame(update);

}

}

update();

});

});
window.addEventListener("DOMContentLoaded",()=>{

const btn=document.getElementById("ai-btn");
const chat=document.getElementById("ai-chat");
const input=document.getElementById("ai-input");
const send=document.getElementById("ai-send");
const body=document.getElementById("ai-body");

if(!btn||!chat) return;

btn.onclick=()=>{
chat.style.display=
chat.style.display==="flex"?"none":"flex";
};

send.onclick=()=>{

const text=input.value.trim();

if(text==="") return;

body.innerHTML+=`
<div class="ai-message">
🧑 ${text}
</div>`;

let reply="I am HASEEB AI.";

const q=text.toLowerCase();

if(q.includes("name"))
reply="My owner is Haseeb Hashim.";

else if(q.includes("github"))
reply="GitHub: github.com/AbdulHaseebHashim";

else if(q.includes("skill"))
reply="HTML, CSS, JavaScript, Linux, Networking & Cyber Security.";

else if(q.includes("contact"))
reply="Email: haseebjani826@gmail.com";

body.innerHTML+=`
<div class="ai-message">
🤖 ${reply}
</div>`;

input.value="";
body.scrollTop=body.scrollHeight;

};

});
window.addEventListener("DOMContentLoaded",()=>{

const menu=document.getElementById("menu-btn");
const links=document.getElementById("nav-links");


if(!menu || !links) return;


menu.addEventListener("click",()=>{

links.classList.toggle("active");

});


links.querySelectorAll("a").forEach(link=>{

link.addEventListener("click",()=>{

links.classList.remove("active");

});

});


});
let secretCode = [];
const hackerKey = "hacker";

document.addEventListener("keydown",(e)=>{

secretCode.push(e.key.toLowerCase());

secretCode = secretCode.slice(-6);

if(secretCode.join("") === hackerKey){

document.body.classList.toggle("hacker-mode");

}

});
