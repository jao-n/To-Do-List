// Importa a função 'completeText' do módulo 'completeText.js'
import { completeText } from "./completeText.js";

// Adiciona um evento global de clique ao documento
document.addEventListener("click", (event) => {
    // Verifica se o elemento clicado é um checkbox (classe 'check')
    if (event.target.classList.contains("check")) {
        // Seleciona o contêiner pai do elemento clicado
        const parent = event.target.parentNode;

        // Seleciona a imagem de "não concluído" visível
        const imgDefault = parent.querySelector(".appear");

        // Seleciona a imagem de "concluído" inicialmente oculta
        const imgChecked = parent.querySelector(".hide");

        // Alterna as classes para alternar a visibilidade das imagens
        imgDefault.classList.toggle("hide");
        imgDefault.classList.toggle("appear");

        imgChecked.classList.toggle("hide");
        imgChecked.classList.toggle("appear");

        // Atualiza a contagem de tarefas concluídas
        completeText();
    }
});
/*Resumo do que o código faz:
Objetivo: Alternar o status de uma tarefa (feita ou não) ao clicar no checkbox.
Funcionamento:
O clique no checkbox (check) detecta o contêiner pai do elemento.
Alterna entre as imagens "não concluído" (imgDefault) e "concluído" (imgChecked) usando as classes hide e appear.
A função completeText atualiza a contagem de tarefas concluídas na interface.
Vantagem:
Funciona com qualquer checkbox, mesmo que adicionado dinamicamente à página.*/