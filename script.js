function gameBeginning(){
    function makeBubble(){
        var clutter = "";

    for(var i=1; i<=133; i++){
        let rn = Math.floor(Math.random()*10)
            clutter += `<div class="bubble">${rn}</div>`;
    }

        document.querySelector(".pbtm").innerHTML = clutter;
    }

    
    function runTimer(){
        let timer = 60;
        let timerint = setInterval(function () {
            if(timer > 0){
                timer--;
                document.querySelector('#timevalue').textContent = timer;
            }
            else{
                clearInterval(timerint);
                hitrn = 0
                document.querySelector('.pbtm')
                .innerHTML = `<div id='aftergame'>
                                <h1 id='gameover'>Game Over</h1> <br>
                                <h1 id='last-score'>you'r score is : ${score}</h1>
                            </div>`;
            }
            
        },1000)
    }

    let hitrn = 0;
    function getNewHit(){
        hitrn = Math.floor(Math.random()*10)
        document.querySelector("#hitvalue").textContent = hitrn;
    }

    let score = 0;
    function increaseScore(){
        score += 10;
        document.querySelector('#scorevalue').textContent = score;
    }

    document.querySelector('.pbtm').addEventListener('click',function(details){
        let clickedNum = (Number(details.target.textContent));

        if(clickedNum === hitrn){
            increaseScore();
            makeBubble();
            getNewHit();
        }
    })

    makeBubble();
    runTimer();
    getNewHit();
}

document.querySelector('#start').addEventListener('click',function(a){
gameBeginning();
})