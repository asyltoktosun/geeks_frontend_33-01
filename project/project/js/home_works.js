
//FIRST HW part1


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


//part2

const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');


const moveRight = (targetPosition, currentPosition=0) =>{
    if(currentPosition<targetPosition){
        currentPosition++;
        childBlock.style.left=`${currentPosition}px`;
        requestAnimationFrame(()=>moveRight(targetPosition,currentPosition),10);
    }
}

moveRight(449);