<?php

    $nota = $_POST['nota'];

    // echo "Nota recebida: ";
    // var_dump($nota); // Debugging

    $conexao = mysqli_connect("localhost", "root", "", "tarefadb");
    if (!$conexao) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $sql = "INSERT INTO tb_tarefas (nota) VALUES ($nota)";

    if (mysqli_query($conexao, $sql)) { 
        echo "Dados inseridos com sucesso!";
    } else {
        echo "Erro ao inserir dados: " . mysqli_error($conexao);
    }

    mysqli_close($conexao);

?>



