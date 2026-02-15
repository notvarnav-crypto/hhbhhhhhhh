/* starfield */
for(let i=0;i<180;i++){
    let star=document.createElement("div");
    star.className="star";
    star.style.width=star.style.height=Math.random()*3+"px";
    star.style.left=Math.random()*100+"vw";
    star.style.top=Math.random()*100+"vh";
    document.body.appendChild(star);
}

/* scene transitions */
setTimeout(()=>switchScene("scene1","scene2"),4000);

function switchScene(a,b){
    document.getElementById(a).classList.remove("show");
    document.getElementById(b).classList.add("show");
}

/* rain */
function startRain(){
    switchScene("scene2","scene3");

    let rainInt=setInterval(()=>{
        let drop=document.createElement("div");
        drop.className="rain";
        drop.style.left=Math.random()*100+"vw";
        document.body.appendChild(drop);
        setTimeout(()=>drop.remove(),1000);
    },40);

    setTimeout(()=>{
        clearInterval(rainInt);
        rainToHearts();
        switchScene("scene3","scene4");
    },4000);
}

function rainToHearts(){
    setInterval(()=>{
        let heart=document.createElement("div");
        heart.innerHTML="💖";
        heart.className="heart";
        heart.style.left=Math.random()*100+"vw";
        document.body.appendChild(heart);
        setTimeout(()=>heart.remove(),6000);
    },250);
}

/* hold logic */
let timer;
let holdStart;

const holdBtn = document.getElementById("holdBtn");

holdBtn.addEventListener("mousedown", startHold);
holdBtn.addEventListener("mouseup", stopHold);
holdBtn.addEventListener("mouseleave", stopHold);

holdBtn.addEventListener("touchstart", startHold);
holdBtn.addEventListener("touchend", stopHold);

function startHold(){
    holdStart = Date.now();
    timer = setTimeout(activateHug, 2000);
}

function stopHold(){
    clearTimeout(timer);
}

function activateHug(){
    document.getElementById("leftArm").style.left="0";
    document.getElementById("rightArm").style.right="0";
    document.body.classList.add("breath");

    let holdTime=(Date.now()-holdStart)/1000;
    let name=document.getElementById("nameInput").value || "You";

    switchScene("scene4","scene5");

    setTimeout(()=>{
        document.getElementById("envelope").classList.add("open");
        document.getElementById("letterText").innerText =
            "This hug is for " + name + ".\n\n" +
            "You are allowed to pause.\n" +
            "You are allowed to feel.\n" +
            "You matter more than you know.";
    },1500);

    if(holdTime > 4){
        setTimeout(()=>{
            document.body.classList.add("sunrise");
            document.getElementById("letterText").innerText +=
            "\n\nAnd whatever you're carrying right now — it will get lighter.";
        },4000);
    }
}
