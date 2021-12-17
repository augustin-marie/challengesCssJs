const cube = document.querySelector('.cube');

cube.addEventListener('click', (e)=>{
    const cubeClicked = e.currentTarget;

    if(cubeClicked.classList.contains('lighted')==true){
        cubeClicked.classList.remove('lighted');
    }
    else {
        cubeClicked.classList.add('lighted');
    }
})