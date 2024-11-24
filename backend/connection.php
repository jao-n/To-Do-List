<?php
    header('Content-Type: application/json');
    $nota = $_POST['nota'];

    $conexao = mysqli_connect("localhost", "root", "", "tarefadb");
    if (!$conexao) {
        die("Connection failed: " . mysqli_connect_error());
    }


    $sql = "INSERT INTO tarefas (nota) VALUES ('$nota')";

    $sqlResult = "SELECT * FROM tarefas";

    $result = mysqli_query($conexao, $sqlResult);

    // if (mysqli_query($conexao, $sql)) {
    //     // print "Dados cadastrados com sucesso";
    //     header('Location: ../index.html');
    // } else {
    //     print "Error: " . $sql . "<br>" . mysqli_error($conexao);
    // }

    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['nota'])) {
        $nota = mysqli_real_escape_string($conexao, $_POST['nota']);
    
        // Insere a nota no banco
        $sql = "INSERT INTO tarefas (nota) VALUES ('$nota')";
        if (!mysqli_query($conexao, $sql)) {
            echo json_encode(["erro" => "Erro ao inserir nota: " . mysqli_error($conexao)]);
            exit;
        }
        header('Location: ../index.html');
    }

    if ($result) {
        $tarefas = [];
    
        // Loop para coletar os resultados em um array
        while ($row = mysqli_fetch_assoc($result)) {
            $tarefas[] = $row;
        }
    
        // Retorna as notas no formato JSON
        echo json_encode($tarefas);
    } else {
        echo json_encode(["erro" => "Erro ao buscar notas: " . mysqli_error($conexao)]);
    }
    

    mysqli_close($conexao);
?>



