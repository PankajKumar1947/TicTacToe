const box=document.querySelectorAll(".box");
const turn=document.querySelector(".turn");
const reset=document.querySelector(".reset")
//console.log(box)
//console.log(box[0].innerHTML)

//music part
function playClickSound() {
    var audio = new Audio("./audio/1.mpeg"); // Replace with your sound file
    audio.play();
}
function playClickSound2(){
    var audio=new Audio("./audio/2.mpeg");
    audio.play();
}
function invalidPressSound(){
    var audio=new Audio("./audio/invalidPress.mp3")
    audio.play();
}
function winSound(){
    var audio=new Audio("./audio/win.mp3");
    audio.play();
}
function drawSound(){
    var audio=new Audio("./audio/draw.mp3");
    audio.play();
}


click=true;
var gameInd=true;
var cnt=1;
for(let i=0;i<9;i++){
    box[i].addEventListener('click',function(){
        if(gameInd){
            if(box[i].innerHTML=='X' || box[i].innerHTML=='O')
             invalidPressSound();
        //selection
            if(box[i].innerHTML!='X' && box[i].innerHTML!='O'){
                if(click){
                    box[i].innerHTML='X';
                    box[i].style.backgroundColor='red'
                    //this.style.backgroundColor='red'// We can use any one
                    box[i].style.color='black'
                    click=false;
                    if(cnt==9){
                        turn.innerHTML="No Winner"
                        drawSound();
                    }
                    else
                       turn.innerHTML=`Player-turn : O `
            }
            else{
                    box[i].innerHTML='O';
                    this.style.backgroundColor='green'
                    box[i].style.color='black'
                    click=true;
                    playClickSound2()
                    turn.innerHTML=`Player-turn : X `
    
            }
           

           
            //logic part
            if((box[0].innerHTML==box[1].innerHTML && box[1].innerHTML==box[2].innerHTML )|| (box[0].innerHTML==box[3].innerHTML && box[3].innerHTML==box[6].innerHTML )|| 
            (box[0].innerHTML==box[4].innerHTML && box[4].innerHTML==box[8].innerHTML) || (box[2].innerHTML==box[5].innerHTML) && (box[5].innerHTML==box[8].innerHTML) ||(box[2].innerHTML==box[4].innerHTML && box[4].innerHTML==box[6].innerHTML) || (box[6].innerHTML==box[7].innerHTML && box[7].innerHTML==box[8].innerHTML) || (box[1].innerHTML==box[4].innerHTML && box[4].innerHTML==box[7].innerHTML) || (box[3].innerHTML==box[4].innerHTML && box[4].innerHTML==box[5].innerHTML))
            {
            console.log(box[i].innerHTML)
            turn.innerHTML=`Player : ${box[i].innerHTML} won`
            turn.style.color='blue'
            gameInd=false;
            winSound();
  
            }
            if(cnt==9){
                turn.innerHTML="No Winner"
                drawSound();
            }
                 cnt++;
            
        }
    }

    })
}
reset.addEventListener('click', function(){
   location.reload();
})
