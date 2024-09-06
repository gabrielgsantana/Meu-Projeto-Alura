function pesquisar() {
  // Seleciona a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value

  //se campoPesquisa for uma string sem nada

  if(!campoPesquisa){
    section.innerHTML = "<p> Nada foi encontrado. Você precisar digitar alguma informação! <p/>"
      return
  }

  campoPesquisa = campoPesquisa.toLowerCase()

  // Inicializa uma string vazia para armazenar o HTML dos resultados
  let resultados = "";
  let titulo =  "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada dado da pesquisa
  for (let dado of dados) {

    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()

    //se titulo includes campoPesquisa
    if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
       // Constrói o HTML para um item de resultado
      resultados += `
      <div class="item-resultado">
        <h2><a href="#">${dado.titulo}</a></h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a target="_blank" href=${dado.link}>Mais Informações</a>
      </div>
    `;

    }
   }

   if (!resultados){
        resultados = "<p> Nada foi encontrado </p>"
   }

  // Atualiza o conteúdo da seção com os resultados construídos
  section.innerHTML = resultados;
}