perguntas = [
    {
        "pergunta": "Qual o pokemon inicial do Ash?", 
        "imagem": "img/ASH.png",
        "respostas": [
            {"opcao": "Pikachu", "correto": true}, 
            {"opcao": "Pichu", "correto": false}, 
            {"opcao": "Bulbasauro", "correto": false}
        ]
    },
    {
        "pergunta": "Quantos Eeveelutions existem até a 9ª geração?",
        "imagem": "img/EEVEE.png", 
        "respostas": [
            {"opcao": "8", "correto": true}, 
            {"opcao": "7", "correto": false}, 
            {"opcao": "9", "correto": false}
        ]
    },
    {
        "pergunta": "Qual destes Pokémon é do tipo Dragão?",
        "imagem": "img/DRAGAO.png",  
        "respostas": [
            {"opcao": "Garchomp", "correto": true}, 
            {"opcao": "Arcanine", "correto": false}, 
            {"opcao": "Golem", "correto": false}
        ]
    },
    {
        "pergunta": "Quem é conhecido como o 'Pokémon Clone'?",
        "imagem": "img/CLONE.png",  
        "respostas": [
            {"opcao": "Mewtwo", "correto": true}, 
            {"opcao": "Ditto", "correto": false}, 
            {"opcao": "Mew", "correto": false}
        ]
    },
    {
        "pergunta": "Qual destes golpes é do tipo Fogo?",
        "imagem": "img/FOGO.png",  
        "respostas": [
            {"opcao": "Lança-chamas", "correto": true}, 
            {"opcao": "Raio Congelante", "correto": false}, 
            {"opcao": "Hidro Bomba", "correto": false}
        ]
    }
];

const perguntaElemento = document.querySelector(".pergunta");
const imagemPerguntaElemento = document.querySelector(".imagem-pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

let indiceAtual = 0;
let acertos = 0;

function carregarPergunta() {
  progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`;
  const perguntaAtual = perguntas[indiceAtual];
  perguntaElemento.innerHTML = perguntaAtual.pergunta;
  imagemPerguntaElemento.src = perguntaAtual.imagem;
  respostasElemento.innerHTML = "";

  perguntaAtual.respostas.forEach(resposta => {
    const botao = document.createElement("button");
    botao.classList.add("botao-resposta");
    botao.innerText = resposta.opcao;
    botao.onclick = () => {
      if (resposta.correto) acertos++;
      indiceAtual++;
      if (indiceAtual < perguntas.length) carregarPergunta();
      else finalizarJogo();
    };
    respostasElemento.appendChild(botao);
  });
}

function finalizarJogo() {
  textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`;
  conteudo.style.display = "none";
  conteudoFinal.style.display = "flex";
}

carregarPergunta();
