const dino = document.querySelector('.dino') 
const pipe = document.querySelector('.pipe')
const scoreElement = document.querySelector('.score');
let score = 0;

/* função pulo */
function jump (code) {
    /* se apertou espaço adiciona a classe jump e remove em seguida */
    if (code === 'Space') {
        dino.classList.add('jump');

        setTimeout( () => {

            dino.classList.remove('jump')

        }, 500);
}  

}

/* constante que verifica quando bateu e se marcou ponto */
const loop = setInterval( () => {

    const pipePosition = pipe.offsetLeft; 
    const dinoPosition = +window.getComputedStyle(dino).bottom.replace('px', '');  
    
    
    if (pipePosition <= 129 && pipePosition > 0 && dinoPosition < 89) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        dino.style.animation = 'none';
        dino.style.bottom = `${dinoPosition}px`;

        clearInterval(loop)
        alert('Game Over!!!')
        location.reload()  //reseta o jogo ao perder
    }   
    /* verifica, caso o dinossauro tenha passado pelo tubo some + 1 de score */
    else if (pipePosition < 50 && pipePosition > 0 && !pipe.passed) {
        score++;
        pipe.passed = true;
        scoreElement.textContent = `${score}`;
    }  
     /* reseta a marcação a marcação do score quando perde */
    else if (pipePosition <= 0) {
        pipe.passed = false;
    }

}, 10)


/* função evento para clique */
document.addEventListener('keydown', function (event) {
    jump(event.code)
}) 
    




