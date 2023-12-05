// Iteration 2: Generate 2 random number and display it on the screen
let randomNumber1=0;
let randomNumber2=0;
let score=0;
let timer=5;

const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");

function generateRandomNumbers()
{

randomNumber1=(Math.ceil(Math.random()*100));
randomNumber2=(Math.ceil(Math.random()*100));

number1.innerText=randomNumber1;
number2.innerText=randomNumber2;
console.log(score);
}

generateRandomNumbers();
// Iteration 3: Make the options button functional
const greaterThanBtn=document.getElementById("greater-than");
const equalToBtn=document.getElementById("equal-to");
const lessThanBtn=document.getElementById("lesser-than");

greaterThanBtn.onclick=()=>{
     if(randomNumber1>randomNumber2){
        timer=5;
        score++
        generateRandomNumbers();
        localStorage.setItem("score",score);
        countDown();
     } else{
       
        window.location.href="./gameover.html";
     }
}
equalToBtn.onclick=()=>{
    if(randomNumber1==randomNumber2){
        timer=5;
        score++
        generateRandomNumbers();
        localStorage.setItem("score",score);
        countDown();
    }else{
        
        window.location.href="./gameover.html";
    }
}
lessThanBtn.onclick=()=>{
    if(randomNumber1<randomNumber2){
        timer=5;
        score++
        generateRandomNumbers();
        localStorage.setItem("score",score);
        countDown();
    }else{
       
        window.location.href="./gameover.html";
    }
}




// Iteration 4: Build a timer for the game

let timerDiv=document.getElementById("timer");

function countDown(){
if(timer>=0){
    //timer
    timerDiv.innerText= timer;
    timer--;
   }else{
    window.location.href="./gameover.html";
   }
}

setInterval(countDown,1000);
