// 1. SELEÇÃO DE ELEMENTOS
const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
const contadores = document.querySelectorAll(".contador");

// 2. LÓGICA DAS ABAS (BOTÕES E TEXTOS)
for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        // Remove a classe "ativo" de todos antes de aplicar no selecionado
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        // Ativa o botão e o texto correspondente ao índice [i]
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    };
}

// 3. LÓGICA DO CONTADOR
const tempoObjetivo1 = new Date("2024-12-31T00:00:00"); // Ajustei para uma data futura
let tempoAtual = new Date();

// O cálculo abaixo retorna milissegundos. // 1. SELEÇÃO DE ELEMENTOS
const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
const contadores = document.querySelectorAll(".contador");

// 2. LÓGICA DAS ABAS (BOTÕES E TEXTOS)
for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        // Remove a classe "ativo" de todos antes de aplicar no selecionado
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        // Ativa o botão e o texto correspondente ao índice [i]
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    };
}

// 3. LÓGICA DO CONTADOR
const tempoObjetivo1 = new Date("2024-12-31T00:00:00"); // Ajustei para uma data futura
let tempoAtual = new Date();

// O cálculo abaixo retorna milissegundos. 
// Para exibir algo legível, você precisará tratar esses números depois.
contadores[0].textContent = calculaTempo(tempoObjetivo1);

function calculaTempo(tempoObjetivo) {
    let tempoFinal = tempoObjetivo - new Date();
    
    // Cálculos matemáticos para converter milissegundos em dias, horas, minutos e segundos
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
}
// Para exibir algo legível, você precisará tratar esses números depois.
contadores[0].textContent = calculaTempo(tempoObjetivo1);

function calculaTempo(tempoObjetivo) {
    let tempoFinal = tempoObjetivo - new Date();
    
    // Cálculos matemáticos para converter milissegundos em dias, horas, minutos e segundos
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
}
