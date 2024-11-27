// Exporta a função 'completeText' para ser usada em outros arquivos
export function completeText() {
    // Seleciona o elemento de texto (span) que exibe a contagem de tarefas concluídas
    const span = document.querySelector("#complete");

    // Seleciona todas as imagens que representam tarefas concluídas (checked.png)
    const imgChecked = document.querySelectorAll('img[src = "img/checked.png"]');
    
    let value = 0; // Inicializa o contador de tarefas concluídas
    
    // Percorre as imagens e verifica se elas estão visíveis (classe 'appear')
    imgChecked.forEach((img) => {
        if (img.classList.contains("appear")) {
            value += 1; // Incrementa o contador se a imagem está visível
        }
    });

    // Atualiza o texto do span com o número de tarefas concluídas e ajusta o plural
    span.textContent = `${value} ${value != 1 ? "Concluídos" : "Concluído"}`;
    /*Resumo do que o código faz:
Seleção de elementos: Pega o span que mostra a contagem de tarefas concluídas e todas as imagens com o ícone de tarefa feita (checked.png).

Contagem de concluídas: Verifica quais imagens estão visíveis e soma.
Atualização do texto: Ajusta o span com o número certo e muda entre "Concluído" e "Concluídos".

Objetivo: Mostra, ao vivo, quantas tarefas você já terminou.*/ 
}
