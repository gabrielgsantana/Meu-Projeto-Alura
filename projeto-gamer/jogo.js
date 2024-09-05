const coala = document.querySelector('.coala');
const obstaculo = document.querySelector('.obstaculo');


const pulo = () => {
    coala.classList.add('pulo')

    setTimeout(() => {

        coala.classList.remove('pulo');

    }, 500);
}

const loop = setInterval(() => {

    console.log('loop');

   const obstaculoPosition = obstaculo.offsetLeft;
   const coalaPosition = +window.getComputedStyle(coala) .bottom.replace('px', '');
   
   if (obstaculoPosition <= 115 && obstaculoPosition > 0 && coalaPosition < 95 )  {

    obstaculo.style.animation = 'none';
    obstaculo.style.left = `${obstaculoPosition}px`;

    coala.style.animation = 'none';
    coala.style.bottom = `${coalaPosition}px`;

    coala.src = "./imagens/game-over.png";
    coala.style.width = '130px'
    coala.style.marginLeft = '23px'
    coala.style.marginBottom = '-9px'

    clearInterval(loop)

   }
   
},10);

document.addEventListener('keydown', pulo)