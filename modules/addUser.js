// Importa a função 'modalOpen' do módulo 'openModal.js'
import { modalOpen } from "./openModal.js";

// Seleciona o formulário com a classe 'form-header'
const form = document.querySelector(".form-header");

// Define o evento 'onsubmit' do formulário
form.onsubmit = (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário (recarregar a página)

    // Seleciona todos os campos de entrada (input) dentro do formulário
    const inputs = form.querySelectorAll("input");

    // Limpa o valor de todos os campos de entrada
    inputs.forEach((input) => input.value = "");

    // Chama a função para abrir o modal
    modalOpen();
    /*Resumo do que o código faz:
    Evita recarregar a página: event.preventDefault() impede o reload ao enviar o formulário.

    Limpa os campos: Todos os <input> do formulário ficam vazios.

    Abre o modal: Chama modalOpen() pra mostrar uma janela modal.
    
    Objetivo: Controla o envio do formulário e faz mais coisas, tipo abrir o modal e limpar tudo.
*/ 
};
