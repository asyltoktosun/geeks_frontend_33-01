
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


