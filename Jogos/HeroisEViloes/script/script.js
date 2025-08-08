let personagens = [];
let viloes = [];
let grupoViloes = ["Voldemort", "Darth Vader", "Joker(Coringa)", "Sauron", "Madara", "Frieza", "Aizen", "Meruem", "Kaidou", "Light"];
let forcaP = 0;
let forcaV = 0;

        function adicionarPersonagem() {
            let nome = document.getElementById("escolhapersonagem").value;
            if (nome && personagens.length < 3) {
                personagens.push(nome);
                document.getElementById("time").textContent = personagens.join(", ");
                document.getElementById("escolhapersonagem").value = "";
            }
        }

        document.getElementById("escolhapersonagem").addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                adicionarPersonagem();
            }
        });

        function verResultado() {
            if (personagens.length < 3) {
                alert("Escolha 3 personagens antes de continuar.");
                return;
            }
            
            for (let i = 0; i < 3; i++) {
                let indiceAleatorio = Math.floor(Math.random() * grupoViloes.length);
                viloes.push(grupoViloes[indiceAleatorio]);
                forcaP += Math.floor(Math.random() * 10) + 1;
                forcaV += Math.floor(Math.random() * 10) + 1;
            }
            
            document.getElementById("viloes").textContent = viloes.join(", ");
            document.getElementById("forcaP").textContent = forcaP;
            document.getElementById("forcaV").textContent = forcaV;
            
            if (forcaP > forcaV) {
                document.getElementById("resultado").textContent = "Parabéns, você ganhou!";
            } else if (forcaP < forcaV) {
                document.getElementById("resultado").textContent = "Sinto muito, você perdeu.";
            } else {
                document.getElementById("resultado").textContent = "Eita, deu empate!";
            }
        }

        function limpar() {
            personagens = [];
            viloes = [];
            forcaP = 0;
            forcaV = 0;
            document.getElementById("time").textContent = "";
            document.getElementById("viloes").textContent = "";
            document.getElementById("forcaP").textContent = "";
            document.getElementById("forcaV").textContent = "";
            document.getElementById("resultado").textContent = "";
            document.getElementById("escolhapersonagem").value = "";
        }