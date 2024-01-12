
//1 homework part 1


const gmailInput=document.querySelector('#gmail_input');
const gmailButton=document.querySelector('#gmail_button');
const gmailResult=document.querySelector('#gmail_result');

const reguExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/

gmailButton.onclick=()=>{
    if(reguExp.test(gmailInput.value)){
        gmailResult.innerHTML='OK'
        gmailResult.style.color ='green'
    }
    else{
        gmailResult.innerHTML='NOT OK'
        gmailResult.style.color='red'
    }
}


//1 homework part 2
const childBlock = document.querySelector('.child_block');


//myVersion
// endPosition=449;

// const moveRight = (targetPosition, currentPosition=0) =>{
//     if(currentPosition<targetPosition){
//         currentPosition++;
//         childBlock.style.left=`${currentPosition}px`;
//         requestAnimationFrame(()=>moveRight(targetPosition,currentPosition),10);
//     }
//     else if()
   
// }

// moveRight(endPosition);


//tchVersion
let positionX=0
let positionY=0

maxPosition=449

const moveChildblock = () => {

    if(positionX<=maxPosition && positionY===0){
        positionX++
        childBlock.style.left=`${positionX}px`;
        requestAnimationFrame(moveChildblock);
    }
    else if(positionX >= maxPosition && positionY <= maxPosition)  {
        positionY++
        childBlock.style.top=`${positionY}px`;
        requestAnimationFrame(moveChildblock)
    } // 2 homework part 1
    else if(positionY >= maxPosition && positionX > 0) {
        positionX--
        childBlock.style.left=`${positionX}px`;
        requestAnimationFrame(moveChildblock)
    }
    else if(positionY > 0 && positionX ===0){
        positionY--
        childBlock.style.top=`${positionY}px`;
        requestAnimationFrame(moveChildblock)
    }
}

moveChildblock()




// 2 homework part 2

const seconds_input=document.querySelector('#seconds');
const start=document.querySelector('#start');
const stop=document.querySelector('#stop');
const reset=document.querySelector('#reset');

let seconds=0
let IntervalId;

const buttonStart=()=>{
    clearInterval(IntervalId)

    IntervalId = setInterval(()=>{
        seconds++
        seconds_input.innerHTML=seconds
},1000)
}

const buttonStop=()=>{
    clearInterval(IntervalId)
}

const buttonReset=()=>{
    seconds=0;
    seconds_input.innerHTML=seconds
    clearInterval(IntervalId)
}

start.addEventListener('click',buttonStart)
stop.addEventListener('click',buttonStop)
reset.addEventListener('click',buttonReset)