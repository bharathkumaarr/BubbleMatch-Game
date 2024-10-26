function makeBubble(){
    var clutter = "";
    for (var i = 0; i < 133; i++) {
        clutter += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
    }
    document.querySelector(".pbtm").innerHTML = clutter;
}
var randomHit;
function getNewHit() {
    randomHit = Math.floor(Math.random()*10);
    document.querySelector('.hit').textContent=randomHit
}

var timer =60;
function runTimer(){
    
    var timeInt = setInterval(function(){
        if (timer>0){
            timer--;
        } else {
            clearInterval(timeInt);
            document.querySelector('.pbtm').innerHTML=`<div style='display:flex; flex-direction:column; justify-content: center; align-items:center;'>
            <h1 style="color: rgb(42, 70, 153)">
                Time's up!
            </h1>
            <h1 style="color: rgb(42, 70, 153); margin-top:20px ">
                Score: ${score}
            </h1>
            <button style="background-color: rgb(42, 70, 153); border:none; border-radius:20px; margin-top: 20px; padding:20px; cursor:pointer;">
                <h1 style="color: rgb(180, 216, 248)" onclick = "score=0; timer=60; makeBubble(); getNewHit(); runTimer();">
                    Restart?
                </h1>
            </button>
            </div>`;     
        }
        document.querySelector('.timer').textContent=timer;
    },1000)
    
}

var score = 0;
function increaseScore() {
    
    score+=1;
    document.querySelector('.score').textContent = score;
}

document.querySelector('.pbtm').addEventListener('click',function(dets){
    var clickedNumber = Number(dets.target.textContent);
    if(clickedNumber===randomHit) {
        increaseScore();
        makeBubble();
        getNewHit();
    } else {
        console.log(clickedNumber);
        console.log(randomHit);
        console.log('sgd');
    }
    
    
})


makeBubble();
runTimer();
getNewHit()

