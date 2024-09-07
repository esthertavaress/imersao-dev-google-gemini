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


// SEÇÃO PARA CALCULAR RESULTADOS DO QUIZZ

function calculateResult() {
    // Obtém o formulário do quiz e cria um FormData
    const form = document.getElementById('quizForm');
    const formData = new FormData(form);

    // Inicializa um objeto para armazenar a pontuação total para cada personagem
    const scores = {};

    // Inicializa os scores dos personagens
    dadosTeste.forEach(character => {
        scores[character.Nome] = 0;
    });

    // Percorre as respostas do formulário
    for (const [key, value] of formData.entries()) {
        if (value === 'A' || value === 'B') {
            for (const character of dadosTeste) {
                scores[character.Nome] += character.Pontos[key][value];
            }
        }
    }

    // Encontra o personagem com a maior pontuação
    let highestScoreCharacter = null;
    let highestScore = -1;

    for (const [characterName, score] of Object.entries(scores)) {
        if (score > highestScore) {
            highestScore = score;
            highestScoreCharacter = characterName;
        }
    }

    // Exibe o resultado na página
    const result = highestScoreCharacter
        ? `Você é mais parecido com o personagem ${highestScoreCharacter}!`
        : 'Não foi possível determinar o personagem.';
    
    document.getElementById('result').textContent = result;
}

// Dados dos personagens
    const dadosTeste = [
        { Nome: "Yuji Itadori (虎杖悠仁)", Pontos: { q1: { A: 0, B: 1 }, q2: { A: 0, B: 1 }, q3: { A: 1, B: 0 }, q4: { A: 0, B: 1 } } },
        { Nome: "Megumi Fushiguro (伏黒 恵)", Pontos: { q1: { A: 1, B: 0 }, q2: { A: 1, B: 0 }, q3: { A: 0, B: 1 }, q4: { A: 1, B: 0 } } },
        { Nome: "Nobara Kugisaki (釘崎 野薔薇)", Pontos: { q1: { A: 1, B: 0 }, q2: { A: 1, B: 0 }, q3: { A: 1, B: 0 }, q4: { A: 0, B: 1 } } },
        { Nome: "Satoru Gojo (五条 悟)", Pontos: { q1: { A: 1, B: 0 }, q2: { A: 1, B: 0 }, q3: { A: 1, B: 0 }, q4: { A: 1, B: 0 } } },
        { Nome: "Suguru Geto (夏油 傑)", Pontos: { q1: { A: 0, B: 1 }, q2: { A: 0, B: 1 }, q3: { A: 0, B: 1 }, q4: { A: 0, B: 1 } } },
        { Nome: "Kento Nanami (七海 建人)", Pontos: { q1: { A: 1, B: 0 }, q2: { A: 1, B: 0 }, q3: { A: 1, B: 0 }, q4: { A: 1, B: 0 } } },
        { Nome: "Ryomen Sukuna (両面宿儺)", Pontos: { q1: { A: 0, B: 1 }, q2: { A: 0, B: 1 }, q3: { A: 0, B: 1 }, q4: { A: 0, B: 1 } } },
        { Nome: "Maki Zenin (禪院 真希)", Pontos: { q1: { A: 1, B: 0 }, q2: { A: 1, B: 0 }, q3: { A: 1, B: 0 }, q4: { A: 1, B: 0 } } },
        { Nome: "Toge Inumaki (狗巻 棘)", Pontos: { q1: { A: 0, B: 1 }, q2: { A: 0, B: 1 }, q3: { A: 1, B: 0 }, q4: { A: 1, B: 0 } } },
        { Nome: "Panda (パンダ)", Pontos: { q1: { A: 0, B: 1 }, q2: { A: 1, B: 0 }, q3: { A: 1, B: 0 }, q4: { A: 1, B: 0 } } },
        { Nome: "Yuta Okkotsu (乙骨 憂太)", Pontos: { q1: { A: 1, B: 0 }, q2: { A: 1, B: 0 }, q3: { A: 1, B: 0 }, q4: { A: 1, B: 0 } } },
        { Nome: "Rika Orimoto (織本 里香)", Pontos: { q1: { A: 0, B: 1 }, q2: { A: 0, B: 1 }, q3: { A: 0, B: 1 }, q4: { A: 0, B: 1 } } },
        { Nome: "Mai Zenin (禪院 真依)", Pontos: { q1: { A: 0, B: 1 }, q2: { A: 0, B: 1 }, q3: { A: 0, B: 1 }, q4: { A: 0, B: 1 } } },
        { Nome: "Aoi Todo (東堂 葵)", Pontos: { q1: { A: 1, B: 0 }, q2: { A: 1, B: 0 }, q3: { A: 1, B: 0 }, q4: { A: 1, B: 0 } } },
        { Nome: "Kasumi Miwa (三輪 霞)", Pontos: { q1: { A: 0, B: 1 }, q2: { A: 1, B: 0 }, q3: { A: 1, B: 0 }, q4: { A: 1, B: 0 } } },
        { Nome: "Noritoshi Kamo (加茂 憲紀)", Pontos: { q1: { A: 0, B: 1 }, q2: { A: 0, B: 1 }, q3: { A: 0, B: 1 }, q4: { A: 0, B: 1 } } },
        { Nome: "Masamichi Yaga (夜蛾 正道)", Pontos: { q1: { A: 1, B: 0 }, q2: { A: 1, B: 0 }, q3: { A: 1, B: 0 }, q4: { A: 1, B: 0 } } },
        { Nome: "Choso (脹相)", Pontos: { q1: { A: 0, B: 1 }, q2: { A: 0, B: 1 }, q3: { A: 0, B: 1 }, q4: { A: 0, B: 1 } } },
        { Nome: "Hanami (花御)", Pontos: { q1: { A: 0, B: 1 }, q2: { A: 0, B: 1 }, q3: { A: 0, B: 1 }, q4: { A: 0, B: 1 } } },
        { Nome: "Jogo (漏瑚)", Pontos: { q1: { A: 0, B: 1 }, q2: { A: 0, B: 1 }, q3: { A: 0, B: 1 }, q4: { A: 0, B: 1 } } },
        { Nome: "Mahito (真人)", Pontos: { q1: { A: 0, B: 1 }, q2: { A: 0, B: 1 }, q3: { A: 0, B: 1 }, q4: { A: 0, B: 1 } } },
        { Nome: "Utahime Iori (庵 歌姫)", Pontos: { q1: { A: 0, B: 1 }, q2: { A: 0, B: 1 }, q3: { A: 0, B: 1 }, q4: { A: 0, B: 1 } } }
    ];


// Selecionar o link e o container do quiz
const quizLink = document.querySelector('#quizContainerLink');
const quizContainer = document.getElementById('quizContainer');

// Adicionar um event listener ao link
quizLink.addEventListener('click', () => {
    quizContainer.style.display = 'block';
});

window.addEventListener("scroll", function() {
    // Obtém a altura total da página
    const pageHeight = document.documentElement.scrollHeight;
    // Obtém a posição do scroll atual
    const scrollPosition = window.innerHeight + window.scrollY;

    // Verifica se o usuário chegou ao final da página
    if (scrollPosition >= pageHeight) {
        document.querySelector("footer").style.display = "block";
    }
});