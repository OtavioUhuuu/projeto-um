// 1. Seleciona todos os elementos que possuem a classe ".botao"
const botoes = document.querySelectorAll(".botao");

// 2. Percorre cada um dos botões encontrados
for (let i = 0; i < botoes.length; i++) {
    
    // 3. Adiciona um evento de clique para o botão atual [i]
    botoes[i].onclick = function() {

        // 4. Remove a classe "ativo" de TODOS os botões antes de marcar o novo
        // Isso garante que apenas um botão fique ativo por vez
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
        }

        // 5. Adiciona a classe "ativo" apenas no botão que foi clicado
        botoes[i].classList.add("ativo");
    };
}
