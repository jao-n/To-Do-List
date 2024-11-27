<?php
    // Define que o conteúdo retornado será no formato JSON
    header('Content-Type: application/json');

    // Conexão com o banco de dados MySQL
    $conexao = mysqli_connect("localhost", "root", "", "tarefadb");

    // Verifica se a conexão foi bem-sucedida
    if (!$conexao) {
        // Retorna um erro em formato JSON e encerra a execução
        echo json_encode(["erro" => "Falha na conexão com o banco de dados"]);
        exit;
    }

    // Consulta para buscar todas as notas na tabela 'tarefas'
    $sqlResultado = "SELECT * FROM tarefas";

    // Executa a consulta no banco de dados
    $resultadoNotas = mysqli_query($conexao, $sqlResultado);

    // Verifica se a consulta foi bem-sucedida
    if ($resultadoNotas) {
        $tarefas = []; // Array para armazenar as tarefas

        // Loop para coletar cada linha do resultado da consulta
        while ($row = mysqli_fetch_assoc($resultadoNotas)) {
            $tarefas[] = $row; // Adiciona cada linha ao array de tarefas
        }

        // Retorna os dados no formato JSON
        echo json_encode($tarefas);
    } else {
        // Retorna um erro em formato JSON caso a consulta falhe
        echo json_encode(["erro" => "Erro ao buscar notas: " . mysqli_error($conexao)]);
    }

    // Encerra a conexão com o banco de dados
    mysqli_close($conexao);
/*Resumo do que o código faz:
Configuração da resposta:

Define o cabeçalho HTTP para que o conteúdo retornado seja no formato JSON.
Conexão com o banco de dados:

Conecta ao banco de dados MySQL (tarefadb).
Em caso de falha na conexão, retorna uma mensagem de erro no formato JSON e encerra a execução.
Consulta ao banco:

Executa uma consulta SQL para buscar todos os registros da tabela tarefas.
Caso a consulta seja bem-sucedida, itera pelos resultados e armazena-os em um array chamado $tarefas.
Retorno dos dados:

Retorna os dados coletados no formato JSON.
Se houver erro durante a consulta, retorna uma mensagem de erro em JSON detalhando o problema.
Encerramento da conexão:

Após a execução das operações, fecha a conexão com o banco de dados para liberar recursos.
*/
?>
