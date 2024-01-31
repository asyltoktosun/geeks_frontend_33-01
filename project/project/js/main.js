// RANDOM COLOR GENERATOR

const buttonsColor = document.querySelectorAll('.btn-color')
const javaScript = document.querySelector('#js-color')

const generateRandomColor = () => {
    const hexCodes = '0123456789ABCDEF'
    let color = ''
    for (let i = 0; i < 6; i++) {
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
    }
    return '#' + color
}

const setRandomColors = () => {
    buttonsColor.forEach((buttonColor) => {
        buttonColor.innerHTML = generateRandomColor()
        buttonColor.onclick = (event) => {
            javaScript.style.color = event.target.innerHTML
        }
    })
}

window.onload = () => setRandomColors()
window.onkeydown = (event) => {
    if (event.code.toLowerCase() === 'space') {
        event.preventDefault()
        setRandomColors()
    }
}

// SLIDER BLOCK

const slides = document.querySelectorAll('.slide')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
let index = 0

const hideSlide = () => {
    slides.forEach((slide) => {
        slide.style.opacity = 0
        slide.classList.remove('active_slide')
    })
}
const showSlide = (i = 0) => {
    slides[i].style.opacity = 1
    slides[i].classList.add('active_slide')
}

hideSlide()
showSlide(index)


const autoSlider = (i = 0) => {
    setTimeout(() => {
        i++
        if (i > slides.length - 1) {
            i = 0
        }
        hideSlide()
        showSlide(i)
    }, 10000)
}

next.onclick = () => {
    index < slides.length - 1 ? index++ : index = 0
    hideSlide()
    showSlide(index)
}

prev.onclick = () => {
    index > 0 ? index-- : index = slides.length - 1
    hideSlide()
    showSlide(index)
}

autoSlider(index)


//OPTIONAL CHAINING-?.
 const object={}

 console.log(object.address?.street);

//async await, try catch

const URL='https://jsonplaceholder.typicode.com/posts/1'

const asyncfetchData=async()=>{
   const response= await fetch(URL)
   const data=await response.json()
   console.log(data)
}

asyncfetchData()




//MY CODE

document.addEventListener('DOMContentLoaded', function () {
    const htmlBody = document.querySelector('body');

    const clickFunction = () => {
        const colors = [
            'red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink',
            'brown', 'teal', 'cyan', 'magenta', 'lime', 'indigo', 'violet',
            'maroon', 'navy', 'olive', 'gray', 'black', 'white'
        ];

        const randomIndex = Math.floor(Math.random() * colors.length);
        const randomColor = colors[randomIndex];

        htmlBody.style.backgroundColor = randomColor;
    };

    htmlBody.onclick = clickFunction;
});