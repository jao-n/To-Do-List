import { getData } from "../services/getData.js";

// Seleciona o formulário com ID 'form'
const form = document.querySelector("#form");

// Define o evento 'onsubmit' do formulário
form.onsubmit = () => {
    // Seleciona o campo de entrada (input) dentro do formulário
    const input = form.querySelector("input");
    let value = input.value;

    // Verifica se o campo está vazio ou contém apenas espaços em branco
    if (value.trim() === "") {
        return alert("Digite algo"); // Exibe um alerta e interrompe o envio do formulário
    }

    // Função externa chamada para obter ou manipular os dados
    getData(); 
/*Resumo do que o código faz:

Configuração: O formulário é monitorado pelo ID para capturar interações.

Validação: Checa se o campo está vazio ou só tem espaços; se sim, alerta o usuário e bloqueia o envio.

Função externa: Depois da validação, chama getData, que faz algo com os dados fornecidos.

Objetivo: Garantir que o formulário só processe entradas válidas.
*/
};
