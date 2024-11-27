// Seleciona os elementos necessários: botão de usuário, modal e contêiner principal
const user = document.querySelector("#user"); // Botão para abrir/fechar o modal
const modal = document.querySelector("#modal"); // Modal que será exibido ou ocultado
const main = document.querySelector("main"); // Contêiner principal da página

// Exporta a função 'modalOpen' para alternar a visibilidade do modal
export function modalOpen() {
    // Seleciona novamente o modal e o contêiner principal (se necessário para reutilização)
    const modal = document.querySelector("#modal");
    const main = document.querySelector("main");

    // Alterna entre as classes 'hide' (oculto) e 'show' (visível) no modal
    modal.classList.toggle("hide");
    modal.classList.toggle("show");

    // Alterna a classe 'show' no contêiner principal para possíveis efeitos visuais
    main.classList.toggle("show");
}

// Adiciona um evento de clique ao botão de usuário
user.addEventListener("click", () => {
    // Alterna entre as classes 'hide' e 'show' no modal ao clicar no botão
    modal.classList.toggle("hide");
    modal.classList.toggle("show");

    // Alterna a classe 'show' no contêiner principal
    main.classList.toggle("show");
});
/*Resumo do que o código faz:
Objetivo: Controlar a exibição de um modal (janela pop-up).
Funcionalidades:

A função modalOpen alterna as classes CSS hide e show para mostrar ou esconder o modal.

O botão com ID user faz o modal abrir ou fechar ao ser clicado.
Processo:

Ao clicar no botão, o modal aparece ou some, alternando as classes.
A classe show também pode ser alternada no contêiner principal (main), ajustando a aparência da página.

Objetivo: Facilita a interação, permitindo abrir e fechar o modal com um clique.*/