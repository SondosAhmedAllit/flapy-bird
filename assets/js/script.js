const hole=document.getElementById("hole");
const obstacle=document.getElementById("obstacle");
const bird=document.getElementById("bird");

let score=0;

hole.addEventListener("animationiteration",()=>{
    let rand=Math.random()*(500-150); 
    hole.style.top=rand+"px";

    score++;
})

setInterval(function(){

    let birdtop=parseInt(getComputedStyle(bird).getPropertyValue("top"));
    if(!isJumping){
        bird.style.top=birdtop +3 +"px";
    }


    let obstacleleft=parseInt(getComputedStyle(obstacle).getPropertyValue("left"));
    let holetop=parseInt(getComputedStyle(hole).getPropertyValue("top"));

    if(birdtop > 480 || 
        (obstacleleft < 20 && (birdtop > holetop + 150 || birdtop < holetop))
    ){
console.log("true");
        alert('Game Over. your score : '+score);
        bird.style.top =  100 +"px";
        obstacle.style.left="100%";
        hole.style.left="100%";

        score=0;
    }


},10);


let isJumping=false;

document.addEventListener("click",()=>{
    isJumping=true;
    let jumptime=0;
    let jumpinterval=setInterval(function(){
        jumptime++;
        let birdtop=parseInt(getComputedStyle(bird).getPropertyValue("top"));
        if(birdtop > 0 && jumptime < 15 ){
            bird.style.top=birdtop -5 +"px";
        }

        if(jumptime > 20){
            clearInterval(jumpinterval);
            isJumping=false;
            jumptime=0;
        }

    }, 10);
})