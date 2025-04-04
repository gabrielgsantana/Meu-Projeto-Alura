let score = 0;
let record = localStorage.getItem("record") || 0;
let gameRunning = true;

const coala = document.querySelector('.coala');
const obstaculo = document.querySelector('.obstaculo');
const nuvens = document.querySelectorAll('.nuvem');
const scoreDisplay = document.getElementById('score-display');
const recordDisplay = document.getElementById('record-display');
const gameOverScreen = document.getElementById('game-over-screen');
const finalScore = document.getElementById('final-score');
const finalRecord = document.getElementById('final-record'); // Novo elemento para o recorde na tela de Game Over

// Atualiza o recorde na tela principal
recordDisplay.textContent = `Recorde: ${record}`;

const pulo = () => {
    if (!gameRunning) return;
    if (!coala.classList.contains('pulo')) {
        coala.classList.add('pulo');
        setTimeout(() => {
            coala.classList.remove('pulo');
        }, 500);
    }
}

function atualizarPagina() {
    location.reload();
}

const gameLoop = setInterval(() => {
    if (!gameRunning) return;

    const obstaculoPosition = obstaculo.offsetLeft;
    const coalaPosition = +window.getComputedStyle(coala).bottom.replace('px', '');

    if (obstaculoPosition <= 115 && obstaculoPosition > 0 && coalaPosition < 95) {
        obstaculo.style.animation = 'none';
        obstaculo.style.left = `${obstaculoPosition}px`;

        nuvens.forEach(nuvem => {
            nuvem.style.animation = 'none';
        });

        coala.src = "./imagens/game-over.png";
        coala.style.width = '130px';
        coala.style.marginLeft = '23px';
        coala.style.marginBottom = '-9px';

        gameOver();
        clearInterval(gameLoop);
    }
}, 10);

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' || event.code === 'ArrowUp') {
        pulo();
    }
});

// Atualiza a pontuação em tempo real
function updateScore() {
    if (!gameRunning) return;
    score++;
    scoreDisplay.textContent = `Pontuação: ${score}`;

    if (score > record) {
        record = score;
        localStorage.setItem("record", record);
        recordDisplay.textContent = `Recorde: ${record}`;
    }
}

// Exibe a tela de game over
function gameOver() {
    gameRunning = false;
    finalScore.textContent = `Pontuação: ${score}`;
    finalRecord.textContent = `Recorde: ${record}`; // Mostra o recorde na tela de Game Over
    gameOverScreen.style.display = 'block';
}

// Loop para atualizar a pontuação
setInterval(updateScore, 100);
