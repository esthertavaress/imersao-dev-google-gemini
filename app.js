const inputPesquisa = document.querySelector('.pesquisa input');
const botaoPesquisar = document.querySelector('.pesquisa button');

inputPesquisa.addEventListener('keydown', (event) => {
    // Adiciona um ouvinte de evento para o campo de pesquisa.
    // Quando uma tecla é pressionada, a função dentro do eventListener é executada.

    if (event.keyCode === 13) {
        // Verifica se a tecla pressionada é o Enter (código 13).
        // Se sim, simula um clique no botão de pesquisa.
        botaoPesquisar.click();
    }
});

// Função que realiza a pesquisa
function pesquisar() {
    // Obtém o valor digitado no campo de pesquisa
    const termoPesquisa = document.querySelector('input').value.toLowerCase();

    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Filtra os dados com base no termo de pesquisa
    let dadosFiltrados = dados.filter(dado => 
        dado.Nome.toLowerCase().includes(termoPesquisa)
    );

    // Itera sobre cada dado da lista de dados
    for (let dado of dadosFiltrados)  {
        // Cria um novo elemento HTML para cada resultado
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.Nome}</a>
                </h2>
                <p class="descricao-meta">${dado.Descricao}</p>
                <p class="descricao-meta">${dado.Habilidades}</p>
                <a href=${dado.SaibaMais} target="_blank" class="link-mais-informacoes">Mais informações</a>
            </div>
        `;
    }

    if (dadosFiltrados.length === 0) {
        resultados = "<p>Nenhum personagem encontrado.</p>";
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}