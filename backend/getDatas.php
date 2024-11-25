<?php
    header('Content-Type: application/json');

    // Conexão com o banco de dados
    $conexao = mysqli_connect("localhost", "root", "", "tarefadb");
    if (!$conexao) {
        echo json_encode(["erro" => "Falha na conexão com o banco de dados"]);
        exit;
    }

    // Busca todas as notas no banco
    $sqlResultado = "SELECT * FROM tarefas";
    $resultadoNotas = mysqli_query($conexao, $sqlResultado);

    if ($resultadoNotas) {
        $tarefas = [];

        // Coleta os resultados em um array
        while ($row = mysqli_fetch_assoc($resultadoNotas)) {
            $tarefas[] = $row;
        }

        // Retorna as notas no formato JSON
        echo json_encode($tarefas);
    } else {
        echo json_encode(["erro" => "Erro ao buscar notas: " . mysqli_error($conexao)]);
    }

    mysqli_close($conexao);
?>