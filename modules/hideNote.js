// Importa a função 'completeText' do módulo 'completeText.js'
import { deleteData } from "../services/deleteData.js";
import { completeText } from "./completeText.js";

// Seleciona o botão com o ID 'eyeClosed'
const button = document.querySelector("#eyeClosed");

// Adiciona um evento de clique ao botão
button.addEventListener("click", () => {

    // Seleciona todas as imagens que representam tarefas concluídas (checked.png)
    const imgChecked = document.querySelectorAll('img[src = "img/checked.png"]')

    // Itera sobre as imagens de tarefas concluídas
    imgChecked.forEach((img) => {
        // Verifica se a imagem está visível (possui a classe 'appear')
        if (img.classList.contains("appear")) {
            // Obtém o elemento pai do pai da imagem (o contêiner da tarefa)
            const parent = img.parentNode.parentNode;

            const id = parent.id

            parent.style.display = "none"

            deleteData(id)
        }
    });

});
/*Resumo do que o código faz:
Botão esconde tarefas concluídas: Quando o botão com ID eyeClosed é clicado:
Procura imagens de tarefas concluídas (checked.png).
Se a imagem tiver a classe appear (marcada como feita), esconde o contêiner dela (usa display: none).
Objetivo: Deixa a interface limpa, ocultando as tarefas já finalizadas.*/