const inputPesquisa = document.querySelector('.pesquisa input');
const botaoPesquisar = document.querySelector('.pesquisa button');

// Adiciona evento de 'Enter' no campo de pesquisa
inputPesquisa.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        botaoPesquisar.click();
    }
});

// Função que remove acentos e pontuação
function removerAcentos(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
}

// Função que realiza a pesquisa
function pesquisar() {
    const termoPesquisa = removerAcentos(document.querySelector('input').value.toLowerCase());
    let section = document.getElementById("resultados-pesquisa");
    let resultados = "";

    // Verifica se o campo de pesquisa está vazio
    if (termoPesquisa.trim() === "") {
        section.innerHTML = "<p>Por favor, insira um termo de pesquisa.</p>";
        return; // Encerra a função aqui
    }

    // Filtra os dados com base no termo de pesquisa sem acentuação
    let dadosFiltrados = dados.filter(dado => 
        removerAcentos(dado.Nome.toLowerCase()).includes(termoPesquisa)
    );

    // Itera sobre cada dado da lista de dados filtrados
    for (let dado of dadosFiltrados) {
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.Nome}</a>
                </h2>
                <p class="descricao-meta">${dado.Paragrafo01}</p>
                <p class="descricao-meta">${dado.Paragrafo02}</p>
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
