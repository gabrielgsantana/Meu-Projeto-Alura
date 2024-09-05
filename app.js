console.log(dados);







/*Função para criar e mostrar a notificação*/
function showNotification(message) {
    const notification = document.createElement('div'); /*Cria um elemento div para a notificação*/
    notification.className = 'notification';
    notification.innerText = message; /*Adiciona a notificação ao corpo do documento*/
    document.body.appendChild(notification);
    setTimeout(() => { notification.remove(); }, 4000); /*Remove a notificação após 5 segundos*/
}

/*Seleciona o botão de pesquisa*/
const searchButton = document.querySelector('section button');

/* Adiciona um evento de clique ao botão, se ele existir */
if (searchButton) {
    searchButton.addEventListener('click', () => {
        showNotification('Parabéns, Você Conseguiu!');
    });
}

