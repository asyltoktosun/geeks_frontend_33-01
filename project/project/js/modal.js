
//MODAL

const modal = document.querySelector('.modal')
const modalTriggerButton = document.querySelector('#btn-get')
const modalCloseButton= document.querySelector('.modal_close')



const openModal=()=>{
    modal.style.display='block'
    document.body.style.overflow='hidden'
}

const closeModal=()=>{
    modal.style.display='none'
    document.body.style.overflow=''
}

modalTriggerButton.onclick=()=>openModal()
modalCloseButton.onclick=()=>closeModal()
modal.onclick=(event)=>{
    if(event.target===modal){
        closeModal()
    }
    
}

document.addEventListener('DOMContentLoaded',()=>{
    window.addEventListener('scroll', checkScroll);

    setTimeout(()=>{
        openModal()
        window.removeEventListener('scroll', checkScroll);
    },10000)

    function checkScroll() {
        const footer = document.querySelector('.footer');
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - footer.offsetHeight) {
            openModal()
            window.removeEventListener('scroll', checkScroll);
        }
    }
    
});


//post data

const form=document.querySelector('form')

const postData=async(url,data)=>{
    return fetch(url,{
        method:'POST',
        headers:{'Content-type': 'application/json' },
        body: data
    })
}

const bindPostData=()=>{
    form.onsubmit=(event)=>{
        event.preventDefaultI()
        const formData=new formData(form)
        const user={}
        formData.forEach((item, index)=>user[index]=item)
        const jsonUser=JSON.stringify(user)
        postData('server.php', jsonUser)

        closeModal()
    }
}

// const postData=(formElement)=>{
//     formElement.addEventListener('submit',(event)=>{
//         event.preventDefault()

//         const xhr=new XMLHttpRequest()
//         xhr.open('POST','server.php')
//         xhr.setRequestHeader('Content-type','application/json')

//         const formData=new FormData(formElement)
//         const obj={}
//         formData.forEach((item, index)=>{
//             obj[index]=item
//         })
//         const json=JSON.stringify(obj)

//         xhr.onload = function () {
//             if (xhr.status === 200) {
//                 // Обработка успешного ответа от сервера
//                 console.log(xhr.responseText);
//             } else {
//                 // Обработка ошибок
//                 console.error('Ошибка при отправке данных на сервер');
//             }
//         };

//         xhr.send(json)
//         closeModal()
//     })

// }

// postData(form) 


