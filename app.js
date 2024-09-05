function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";
  
    // Itera sobre cada dado da pesquisa
    for (let dado of dados) {
      // Constrói o HTML para um item de resultado
      resultados += `
        <div class="item-resultado">
          <h2><a href="#">${dado.titulo}</a></h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a target="_blank" href=${dado.link}>Mais Informações</a>
        </div>
      `;
    }
  
    // Atualiza o conteúdo da seção com os resultados construídos
    section.innerHTML = resultados;
  }

