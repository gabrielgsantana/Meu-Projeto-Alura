const coala = document.querySelector('.coala'); // Seleciona o elemento com a classe 'coala' (nosso personagem)
const obstaculo = document.querySelector('.obstaculo'); // Seleciona o elemento com a classe 'obstaculo'
const nuvens = document.querySelectorAll('.nuvem'); // Seleciona todos os elementos com a classe 'nuvem'

// **Inicialmente, o código seleciona os elementos HTML que representam o coala, os obstáculos e as nuvens. Isso é feito usando o método `querySelector` para selecionar um único elemento e `querySelectorAll` para selecionar múltiplos elementos.**

const pulo = () => {
  coala.classList.add('pulo'); // Adiciona a classe 'pulo' ao coala para ativar a animação de salto
  setTimeout(() => {
    coala.classList.remove('pulo'); // Remove a classe 'pulo' após 500ms para terminar a animação
  }, 500);
}

// **A função `pulo` é responsável por fazer o coala pular. Ela adiciona a classe 'pulo' ao elemento do coala, o que aciona uma animação CSS definida na sua folha de estilos. Após 500 milissegundos, a classe é removida, fazendo o coala voltar ao estado normal.**

function atualizarPagina() {
  location.reload(); // Recarrega a página (pode ser útil para um botão "recomeçar")
}

// **A função `atualizarPagina` simplesmente recarrega a página inteira. Essa função pode ser chamada quando o jogo acabar, por exemplo, para reiniciar tudo.**

const loop = setInterval(() => {
  // **Este loop é o coração do jogo. Ele é executado a cada 10 milissegundos, atualizando constantemente o estado do jogo.**

  const obstaculoPosition = obstaculo.offsetLeft; // Obtém a posição horizontal do obstáculo
  const coalaPosition = +window.getComputedStyle(coala).bottom.replace('px', ''); // Obtém a posição vertical do coala

  // **A cada iteração do loop, as posições do coala e do obstáculo são calculadas. Isso é necessário para verificar se houve uma colisão.**

  // Verifica se houve uma colisão entre o coala e o obstáculo
  if (obstaculoPosition <= 115 && obstaculoPosition > 0 && coalaPosition < 95) {
    // **Se houve uma colisão, o jogo acaba.**
    obstaculo.style.animation = 'none'; // Para a animação do obstáculo
    obstaculo.style.left = `${obstaculoPosition}px`; // Posiciona o obstáculo na posição atual

    // Para todas as nuvens:
    nuvens.forEach(nuvem => {
      nuvem.style.animation = 'none'; // Para a animação da nuvem
    });

    // Mostra a imagem de game over e modifica o estilo do coala
    coala.src = "./imagens/game-over.png";
    coala.style.width = '130px';
    coala.style.marginLeft = '23px';
    coala.style.marginBottom = '-9px';

    clearInterval(loop); // Para o loop principal do jogo
  }
}, 10);

document.addEventListener('keydown', pulo); // Escuta por eventos de teclado e chama a função 'pulo' quando uma tecla é pressionada