// PHONE CHECKER

const phoneInput=document.querySelector('#phone_input');
const phoneButton=document.querySelector('#phone_button');
const phoneResult=document.querySelector('#phone_result');

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick=()=>{
    if(regExp.test(phoneInput.value)){
        phoneResult.innerHTML='OK'
        phoneResult.style.color='green'
    }
    else{
        phoneResult.innerHTML='ERROR'
        phoneResult.style.color='red'

    }
}


//  TABSLIDER

const tabContentBlocks=document.querySelectorAll('.tab_content_block')
const tabContentItems=document.querySelectorAll('.tab_content_item')
const tabsParent=document.querySelector('.tab_content_items')

const hideTabContentBlock=()=>{
    tabContentBlocks.forEach((tabContentBlock)=>{
        tabContentBlock.style.display='none'
    })
    tabContentItems.forEach((tabContentItem)=>{
        tabContentItem.classList.remove('tab_content_item_active')
    })

}

const showTabContent=((index=0)=>{
    tabContentBlocks[index].style.display='block'
    tabContentItems[index].classList.add('tab_content_item_active')

})

hideTabContentBlock()
showTabContent()

tabsParent.onclick=(event)=>{
    if(event.target.classList.contains('tab_content_item')){
        tabContentItems.forEach((tabContentItem, tabIndex)=>{
            if(event.target===tabContentItem){
                hideTabContentBlock()
                showTabContent(tabIndex)
            }

        })
    }
}

let currentIndex=0;

const autoSlider = (i = 0) => {
    setInterval(() => {
        i++
        if (i > tabContentItems.length - 1) {
            i = 0
        }
        hideTabContentBlock()
        showTabContent(i)
    }, 3000)
}

tabContentItems.onclick = () => {
    index < tabContentItems.length - 1 ? index++ : index = 0
    index > 0 ? index-- : index = tabContentItems.length - 1
    hideTabContentBlock()
    showTabContent(currentIndex)
}

autoSlider(currentIndex)



//convertor

const somInput=document.querySelector('#som')
const usdInput=document.querySelector('#usd')
const eurInput=document.querySelector('#eur')

// somInput.addEventListener('input',()=>{
//     const request=new XMLHttpRequest
//     request.open('GET', '../data/convertor.json')
//     request.setRequestHeader('Content-type','application/json')
//     request.send()

//     request.addEventListener('load',()=>{
//         const data=JSON.parse(request.response)
//         usdInput.value=(somInput.value/data.usd).toFixed(2)
//     })
// })


//DRY-don'd repeat yourself
//KISS-keep it simple, stupid
//SOLID


const convertor=(element, targetElement, targetElement2, currentElement)=>{
    element.oninput=()=>{
        const request=new XMLHttpRequest
        request.open('GET', '../data/convertor.json')
        request.setRequestHeader('Content-type','application/json')
        request.send()

        request.onload=()=>{
            const data= JSON.parse(request.response)
            
            switch(currentElement){
                case'som':
                    targetElement.value=(element.value/data.usd).toFixed(2)
                    targetElement2.value=(element.value/data.eur).toFixed(2)
                    break
                case 'usd':
                    targetElement.value=(element.value*data.usd).toFixed(2)
                    targetElement2.value=(element.value/data.eur2usd).toFixed(2)
                    break
                case 'eur':
                    targetElement.value=(element.value*data.eur).toFixed(2)
                    targetElement2.value=(element.value*data.eur2usd).toFixed(2)

                default:
                    break
            }

            if(element.value=== ''){
                targetElement.value=''
                targetElement2.value=''
            } 

        }

    } 
}

convertor(somInput, usdInput, eurInput,'som')
convertor(usdInput, somInput, eurInput,'usd')
convertor(eurInput, somInput, usdInput,'eur')