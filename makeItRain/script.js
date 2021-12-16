let interval = setInterval(() => {createDrop()}, 100);
let intervalRdPos = setInterval(() => {rdDropPos()}, 100);

function createDrop(){
    const body = document.querySelector('body');

    let i = document.createElement("i");

    //i.style.left = "50vw";
    i.classList.add('drop')

    body.append(i);
}

function rdDropPos(){
    const listDrop = document.querySelectorAll("i");

    listDrop.forEach(element => {
        console.log(element.getBoundingClientRect().bottom)

        if (element.getBoundingClientRect().bottom <= 0){
            const random = Math.random();
            element.style.left = random*100 + "vw";;
        }
    });
    
}


setTimeout(()=>{clearInterval(interval)}, 6000)