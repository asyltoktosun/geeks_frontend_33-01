
const wrapper=document.querySelector('.wrapper')
const defaultPhoto='data:image/png;base64,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'


const functionPersons=()=>{
        const request= new XMLHttpRequest()
        request.open('GET','persons.json')
        request.setRequestHeader('Content-type','application/json')
        request.send()
    
        request.addEventListener('load',()=>{
            const data =JSON.parse(request.response)
            data.forEach((item)=>{
                const {name, age, photo}= item 
                const personCard=document.createElement('div')
                personCard.setAttribute('class', 'personCard')
            
                personCard.innerHTML= `
                    <div class="userPhoto"> 
                        <img src="${photo|| defaultPhoto}" alt="${name}">
                    </div>
                    <h2>${name}</h2>
                    <p> age: ${age}</p>
                `
            
                wrapper.append(personCard)
            
               
            })
            
        })
    
    }
    
functionPersons()


const consoleAny = () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'any.json');
    request.setRequestHeader('Content-type', 'application/json');

    request.addEventListener('load', () => {
        if (request.status === 200) {
            const any = JSON.parse(request.response);
            console.log(any);
        } else {
            console.error('Failed to load data. Status:', request.status);
        }
    });

    request.send();
};

consoleAny();