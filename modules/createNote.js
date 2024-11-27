// Exporta a função 'createNote' para criar notas dinâmicas a partir de um array de objetos
export function createNote(notes) {
    // Itera sobre o array de notas
    notes.forEach(note => {

        // Seleciona o contêiner principal onde as notas serão adicionadas
        const notes = document.querySelector(".notes");

        // Cria o contêiner principal para cada nota
        const divNotes = document.createElement("div");
        divNotes.classList.add("divNotes"); // Adiciona uma classe para estilização
        divNotes.id = note.id

        // Cria um contêiner interno para os elementos da nota
        const div = document.createElement("div");

        // Cria a imagem padrão (não concluída)
        const imgDefault = document.createElement("img");
        imgDefault.src = "img/default.png"; // Define a imagem como "default"
        imgDefault.classList.add("appear"); // Aplica a classe para exibição inicial

        // Cria a imagem de "concluído"
        const imgChecked = document.createElement("img");
        imgChecked.src = "img/checked.png"; // Define a imagem como "checked"
        imgChecked.classList.add("hide"); // Inicialmente, essa imagem fica oculta

        // Cria uma checkbox para marcar a nota como concluída
        const check = document.createElement("input");
        check.type = "checkbox"; // Define o tipo como checkbox
        check.classList.add("check"); // Aplica uma classe para estilização

        // Cria um elemento de texto com o conteúdo da nota
        const span = document.createElement("span");
        span.textContent = note.nota; // Define o texto com o valor da nota do objeto

        // Adiciona os elementos (checkbox e imagens) ao contêiner interno
        div.append(check, imgDefault, imgChecked);

        // Adiciona o contêiner interno e o texto ao contêiner principal da nota
        divNotes.append(div, span);

        // Adiciona a nova nota ao contêiner geral de notas
        notes.append(divNotes);
    });
    /*
Resumo do que o código faz:
Objetivo:
Cria notas dinamicamente: Usa um array de objetos pra gerar elementos HTML e coloca na página.

Estrutura de cada nota:
Uma div com classe divNotes.
Dentro: checkbox, imagem padrão (default.png), imagem de "concluído" (checked.png) escondida, e um texto (span) com o conteúdo da nota.

Como faz:
Percorre o array, cria os elementos, configura os detalhes (tipo classes e atributos) e joga tudo na div com classe .notes.
Objetivo:

Adicionar notas bonitinhas e interativas pra poder mexer nelas depois, tipo marcar como "feito". */
}
