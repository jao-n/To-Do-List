<?php

    $nota = $_POST['nota'];

    $conexao = mysqli_connect("localhost", "root", "", "tarefadb");
    if (!$conexao) {
        die("Connection failed: " . mysqli_connect_error());
    }


    $sql = "INSERT INTO tarefas (nota) VALUES ('$nota')";

    if (mysqli_query($conexao, $sql)) {
        print "Dados cadastrados com sucesso";
    } else {
        print "Error: " . $sql . "<br>" . mysqli_error($conexao);
    }

    mysqli_close($conexao);
?>



